'use server';

import { backend } from '@/utils/api';

export interface CalcPriceSettings {
    mdfPrice: number;
    highglassPrice: number;
    vacuumPrice: number;
    colorPrice: number;
    fridgeCost: number;
    dishwasherCost: number;
    laundryCost: number;
}

async function getPriceSettings(): Promise<CalcPriceSettings | null> {
    const res = await backend<CalcPriceSettings>('/public/calcPrice', 'GET');
    if (!res.ok || !res.data) return null;
    return res.data;
}

async function calculatePrice(params: any, prices: CalcPriceSettings) {
    const alength = Number(params.alength) || 100;
    const blength = Number(params.blength) || 100;
    const clength = Number(params.clength) || 100;
    const islandlength = Number(params.islandlength) || 0;
    const openlength = Number(params.openlength) || 0;
    const openDepth = Number(params.openDepth) || 60;
    const tallWidth = Number(params.tallWidth) || 0;
    const ceilHeight = Number(params.ceilHeight) || 70;
    const refrigeratorWidth = Number(params.refrigeratorWidth) || 0;
    const hasDishwasher = params.hasDishwasher === '1' || params.hasDishwasher === true;
    const hasLaundry = params.hasLaundry === '1' || params.hasLaundry === true;
    const layoutno = Number(params.layoutno) || 1;

    const totalWallLength = (alength + blength + clength) / 100;
    const islandMeter = islandlength / 100;
    const openMeter = openlength / 100;

    let totalCabinetMeter = totalWallLength;
    totalCabinetMeter += islandMeter * 0.8;
    totalCabinetMeter += openMeter * (openDepth / 100);

    const heightFactor = ceilHeight / 70;
    const widthFactor = 1 + (tallWidth / 1000);

    let mdfPrice = totalCabinetMeter * prices.mdfPrice * heightFactor * widthFactor;
    let highGlassPrice = totalCabinetMeter * prices.highglassPrice * heightFactor * widthFactor;
    let vacuumPrice = totalCabinetMeter * prices.vacuumPrice * heightFactor * widthFactor;
    let colorPrice = totalCabinetMeter * prices.colorPrice * heightFactor * widthFactor;

    if (refrigeratorWidth > 0) {
        const fridgeCost = (refrigeratorWidth / 80) * prices.fridgeCost;
        mdfPrice += fridgeCost * 0.5;
        highGlassPrice += fridgeCost * 0.5;
        vacuumPrice += fridgeCost * 0.5;
        colorPrice += fridgeCost * 0.5;
    }

    if (hasDishwasher) {
        mdfPrice += prices.dishwasherCost * 0.3;
        highGlassPrice += prices.dishwasherCost * 0.3;
        vacuumPrice += prices.dishwasherCost * 0.3;
        colorPrice += prices.dishwasherCost * 0.3;
    }

    if (hasLaundry) {
        mdfPrice += prices.laundryCost * 0.3;
        highGlassPrice += prices.laundryCost * 0.3;
        vacuumPrice += prices.laundryCost * 0.3;
        colorPrice += prices.laundryCost * 0.3;
    }

    const layoutComplexity: Record<number, number> = {
        1: 1.0, 2: 1.1, 3: 1.1, 4: 1.2, 5: 1.0,
        6: 1.2, 7: 1.2, 8: 1.3, 9: 1.2, 10: 1.4,
        11: 1.3, 12: 1.5
    };

    const complexityFactor = layoutComplexity[layoutno] || 1.0;

    mdfPrice *= complexityFactor;
    highGlassPrice *= complexityFactor;
    vacuumPrice *= complexityFactor;
    colorPrice *= complexityFactor;

    return {
        Mdf: Math.round(mdfPrice),
        HighGlass: Math.round(highGlassPrice),
        Vacuum: Math.round(vacuumPrice),
        Color: Math.round(colorPrice)
    };
}

export async function getCalculateResult(params: any) {
    const requiredParams = [
        'alength', 'blength', 'clength', 'islandlength', 'openlength',
        'tallWidth', 'ceilHeight', 'refrigeratorWidth', 'openDepth',
        'hasDishwasher', 'hasLaundry', 'layoutno'
    ];

    const defaultValues: Record<string, any> = {
        'alength': 100, 'blength': 100, 'clength': 100,
        'islandlength': 0, 'openlength': 0, 'tallWidth': 0,
        'ceilHeight': 70, 'refrigeratorWidth': 0, 'openDepth': 60,
        'hasDishwasher': false, 'hasLaundry': false, 'layoutno': 1
    };

    requiredParams.forEach(param => {
        if (!(param in params) || params[param] === undefined || params[param] === null) {
            params[param] = defaultValues[param];
        }
    });

    const form = new FormData();
    for (const [key, value] of Object.entries(params)) {
        let stringValue: string;
        if (typeof value === 'boolean') {
            stringValue = value ? '1' : '0';
        } else {
            stringValue = String(value);
        }
        form.append(key, stringValue);
    }

    try {
        const response = await fetch("https://idero.ir/cabinet/getprice", {
            body: form,
            method: "POST",
            headers: { 'Accept': 'application/json' },
        });

        const responseText = await response.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch {
            const prices = await getPriceSettings();
            if (!prices) return null;
            return calculatePrice(params, prices);
        }

        if (data.Code && data.Code !== 0) {
            const prices = await getPriceSettings();
            if (!prices) return null;
            return calculatePrice(params, prices);
        }

        if (data.Mdf === 0 && data.HighGlass === 0 && data.Vacuum === 0 && data.Color === 0) {
            const prices = await getPriceSettings();
            if (!prices) return null;
            return calculatePrice(params, prices);
        }

        if (data.Mdf && data.HighGlass && data.Vacuum && data.Color) {
            return {
                Mdf: data.Mdf,
                HighGlass: data.HighGlass,
                Vacuum: data.Vacuum,
                Color: data.Color
            };
        }

        const prices = await getPriceSettings();
        if (!prices) return null;
        return calculatePrice(params, prices);
    } catch (error) {
        console.error('Error fetching from API, using local calculation:', error);
        const prices = await getPriceSettings();
        if (!prices) return null;
        return calculatePrice(params, prices);
    }
}
