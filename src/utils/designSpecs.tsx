export const CategoryNames: Record<number, string> = {
    1: "کتابخانه",
    2: "میز تلویزیون",
    3: "کنسول",
    4: "کمد",
    5: "جاکفشی",
    6: "دراور",
    7: "اپن",
    9: "پاتختی",
};

const FurnitureNames: Record<number, string> = {
    1: "خالی",
    2: "درب تک",
    3: "درب دوتایی",
    4: "کشو",
    5: "فلپ",
};

const InteriorNames: Record<number, string> = {
    1: "خالی",
    2: "آویز لباس",
    3: "کشوی داخلی",
    4: "رجال",
    5: "پره عمودی",
};

const BackPanelThicknessNames: Record<number, string> = {
    0: "نامشخص",
    1: "۳ میلی‌متر",
    2: "۱۶ میلی‌متر",
};

const FurniturePositionNames: Record<number, string> = {
    1: "درون چارچوب",
    2: "روی چارچوب",
};

const BoolNames: Record<number, string> = {
    0: "خیر",
    1: "بله",
};

const HoodModeNames: Record<number, string> = {
    1: "توکار",
    2: "روکار",
};

const MicrowaveModeNames: Record<number, string> = {
    1: "توکار",
    2: "روکار",
};

export interface DesignSpec {
    label: string;
    value: string;
}

export function parseDesignData(data: any): {
    width: number;
    height: number;
    depth: number;
    categoryName: string;
    sectionCount: number;
    specs: DesignSpec[];
} | null {
    if (!data || typeof data !== "object") return null;

    const dim = data.Dimension || {};
    const prop = data.Property || {};
    const sections: any[] = data.SectionList || [];
    const categoryId = data.CategoryId;

    const width = dim.OveralWidth || 0;
    const height = dim.OveralHeight || 0;
    const depth = dim.OveralDepth || 0;
    const categoryName = CategoryNames[categoryId] || "نامشخص";

    const specs: DesignSpec[] = [];

    specs.push({ label: "نوع محصول", value: categoryName });
    specs.push({ label: "عرض", value: `${width} سانتی‌متر` });
    specs.push({ label: "ارتفاع", value: `${height} سانتی‌متر` });
    specs.push({ label: "عمق", value: `${depth} سانتی‌متر` });
    specs.push({ label: "تعداد ستون", value: String(sections.length) });

    const compartmentCount = sections.reduce(
        (sum, s) => sum + (s.ComaprtmentList?.length || 0),
        0
    );
    specs.push({ label: "تعداد طبقه", value: String(compartmentCount) });

    if (prop.BackPanelThicknessId !== undefined) {
        specs.push({
            label: "ضخامت پشت",
            value: BackPanelThicknessNames[prop.BackPanelThicknessId] || "نامشخص",
        });
    }

    if (prop.FeetId !== undefined) {
        specs.push({
            label: "پایه تراز",
            value: BoolNames[prop.FeetId] || "نامشخص",
        });
    }

    if (prop.FurniturePositionId !== undefined) {
        specs.push({
            label: "محل قرارگیری درب/کشو",
            value: FurniturePositionNames[prop.FurniturePositionId] || "نامشخص",
        });
    }

    if (prop.HoodId !== undefined && prop.HoodId === 1) {
        specs.push({ label: "هود", value: "بله" });
        if (prop.HoodModeId !== undefined) {
            specs.push({
                label: "نوع هود",
                value: HoodModeNames[prop.HoodModeId] || "نامشخص",
            });
        }
    }

    if (prop.MicrowaveId !== undefined && prop.MicrowaveId === 1) {
        specs.push({ label: "مایکروویو", value: "بله" });
        if (prop.MicrowaveModeId !== undefined) {
            specs.push({
                label: "نوع مایکروویو",
                value: MicrowaveModeNames[prop.MicrowaveModeId] || "نامشخص",
            });
        }
    }

    if (prop.ClosetMode) {
        specs.push({
            label: "نوع کمد",
            value: prop.ClosetMode === "stepped" ? "پله‌ای" : "ساده",
        });
    }

    const furnitureTypes = new Set<string>();
    const interiorTypes = new Set<string>();
    for (const section of sections) {
        for (const comp of section.ComaprtmentList || []) {
            if (comp.FurnitureId && comp.FurnitureId !== 1) {
                furnitureTypes.add(FurnitureNames[comp.FurnitureId] || "نامشخص");
            }
            if (comp.InteriorId && comp.InteriorId !== 1) {
                interiorTypes.add(InteriorNames[comp.InteriorId] || "نامشخص");
            }
        }
    }

    if (furnitureTypes.size > 0) {
        specs.push({ label: "انواع درب/کشو", value: Array.from(furnitureTypes).join("، ") });
    }
    if (interiorTypes.size > 0) {
        specs.push({ label: "یراق داخلی", value: Array.from(interiorTypes).join("، ") });
    }

    return { width, height, depth, categoryName, sectionCount: sections.length, specs };
}

export function DesignSpecsTable({ specs }: { specs: DesignSpec[] }) {
    return (
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm mt-2">
            {specs.map((s, i) => (
                <div key={i} className="flex justify-between border-b border-gray-100 py-1">
                    <span className="text-gray-500">{s.label}:</span>
                    <span className="font-medium">{s.value}</span>
                </div>
            ))}
        </div>
    );
}
