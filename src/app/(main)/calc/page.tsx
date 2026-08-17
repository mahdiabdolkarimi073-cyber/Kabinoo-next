'use client';

import { Slider, Button, Group, SegmentedControl, Card, NumberInput } from "@mantine/core";
import { useState } from "react";
import { getCalculateResult } from "./action";

function getCabinetBgPosition(index: number) {
    const cols = 3;
    const rows = 4;
    const col = (index - 1) % cols;
    const row = Math.floor((index - 1) / cols);

    const x = (col / (cols - 1)) * 100;
    const y = (row / (rows - 1)) * 100;

    return `url('/design/calc-bg.png') ${x}% ${y}%`;
}

const fields = [{
    id: 1,
    se: 0,
    parameter: {
        a: {
            min: 60,
            max: 1e3
        }
    }
}, {
    id: 2,
    se: 1,
    parameter: {
        a: {
            min: 100,
            max: 1e3
        },
        openlength: {
            min: 100,
            max: 500
        }
    }
}, {
    id: 3,
    se: 0,
    parameter: {
        a: {
            min: 60,
            max: 1e3
        },
        islandlength: {
            min: 100,
            max: 300
        }
    }
}, {
    id: 4,
    se: 1,
    parameter: {
        a: {
            min: 100,
            max: 1e3
        },
        openlength: {
            min: 100,
            max: 500
        },
        islandlength: {
            min: 100,
            max: 300
        }
    }
}, {
    id: 5,
    se: 1,
    parameter: {
        a: {
            min: 100,
            max: 1e3
        },
        b: {
            min: 100,
            max: 1e3
        }
    }
}, {
    id: 6,
    se: 2,
    parameter: {
        a: {
            min: 100,
            max: 1e3
        },
        b: {
            min: 200,
            max: 1e3
        },
        openlength: {
            min: 100,
            max: 500
        }
    }
}, {
    id: 7,
    se: 1,
    parameter: {
        a: {
            min: 100,
            max: 1e3
        },
        b: {
            min: 100,
            max: 1e3
        },
        islandlength: {
            min: 100,
            max: 300
        }
    }
}, {
    id: 8,
    se: 2,
    parameter: {
        a: {
            min: 100,
            max: 1e3
        },
        b: {
            min: 200,
            max: 1e3
        },
        openlength: {
            min: 100,
            max: 500
        },
        islandlength: {
            min: 100,
            max: 300
        }
    }
}, {
    id: 9,
    se: 2,
    parameter: {
        a: {
            min: 100,
            max: 1e3
        },
        b: {
            min: 200,
            max: 1e3
        },
        c: {
            min: 100,
            max: 1e3
        }
    }
}, {
    id: 10,
    se: 3,
    parameter: {
        a: {
            min: 100,
            max: 1e3
        },
        b: {
            min: 200,
            max: 1e3
        },
        c: {
            min: 200,
            max: 1e3
        },
        openlength: {
            min: 100,
            max: "bWall-80"
        }
    }
}, {
    id: 11,
    se: 2,
    parameter: {
        a: {
            min: 200,
            max: 1e3
        },
        b: {
            min: 300,
            max: 1e3
        },
        c: {
            min: 200,
            max: 1e3
        },
        islandlength: {
            min: 100,
            max: "bWall-280"
        }
    }
}, {
    id: 12,
    se: 3,
    parameter: {
        a: {
            min: 400,
            max: 1e3
        },
        b: {
            min: 400,
            max: 1e3
        },
        c: {
            min: 400,
            max: 1e3
        },
        openlength: {
            min: 100,
            max: "bWall-80"
        },
        islandlength: {
            min: 100,
            max: "bWall-280"
        }
    }
}];

const paramLabels: Record<string, string> = {
    a: "طول دیوار A",
    b: "طول دیوار B",
    c: "طول دیوار C",
    islandlength: "طول جزیره",
    openlength: "طول اپن"
};

const paramHelpers: Record<string, string> = {
    a: "طول دیوار اصلی کابینت را وارد کنید.",
    b: "طول دیوار دوم کابینت را وارد کنید.",
    c: "طول دیوار سوم کابینت را وارد کنید.",
    islandlength: "جزیره نوعی کانتر است که از هیچ سمتی به دیوار وصل نمی باشد.",
    openlength: "اپن یا کانتر جداکننده پذیرایی و آشپزخانه است و از یک طرف به دیوار متصل است."
};

// ============ ۶ نوع مقادیر پیش‌فرض ============
const defaultPresets = [
    {
        id: 1,
        name: "آشپزخانه کوچک",
        description: "مناسب آپارتمان‌های ۶۰-۷۰ متری",
        values: {
            alength: 250,
            blength: 300,
            clength: 200,
            islandlength: 0,
            openlength: 0,
            tallWidth: 80,
            ceilHeight: 70,
            refrigeratorWidth: 80,
            hasDishwasher: true,
            hasLaundry: false,
            layoutno: 5
        }
    },
    {
        id: 2,
        name: "آشپزخانه متوسط",
        description: "مناسب آپارتمان‌های ۸۰-۱۰۰ متری",
        values: {
            alength: 350,
            blength: 400,
            clength: 300,
            islandlength: 0,
            openlength: 150,
            tallWidth: 100,
            ceilHeight: 80,
            refrigeratorWidth: 80,
            hasDishwasher: true,
            hasLaundry: true,
            layoutno: 6
        }
    },
    {
        id: 3,
        name: "آشپزخانه بزرگ",
        description: "مناسب آپارتمان‌های ۱۲۰-۱۵۰ متری",
        values: {
            alength: 450,
            blength: 500,
            clength: 400,
            islandlength: 150,
            openlength: 0,
            tallWidth: 120,
            ceilHeight: 80,
            refrigeratorWidth: 95,
            hasDishwasher: true,
            hasLaundry: true,
            layoutno: 7
        }
    },
    {
        id: 4,
        name: "آشپزخانه لوکس",
        description: "مناسب ویلاها و آپارتمان‌های بزرگ",
        values: {
            alength: 550,
            blength: 600,
            clength: 500,
            islandlength: 200,
            openlength: 200,
            tallWidth: 140,
            ceilHeight: 90,
            refrigeratorWidth: 95,
            hasDishwasher: true,
            hasLaundry: true,
            layoutno: 12
        }
    },
    {
        id: 5,
        name: "آشپزخانه خطی",
        description: "مناسب فضاهای طویل و باریک",
        values: {
            alength: 600,
            blength: 200,
            clength: 0,
            islandlength: 0,
            openlength: 0,
            tallWidth: 100,
            ceilHeight: 70,
            refrigeratorWidth: 0,
            hasDishwasher: false,
            hasLaundry: false,
            layoutno: 1
        }
    },
    {
        id: 6,
        name: "آشپزخانه جزیره‌ای",
        description: "مناسب فضاهای باز و مدرن",
        values: {
            alength: 400,
            blength: 450,
            clength: 350,
            islandlength: 250,
            openlength: 0,
            tallWidth: 110,
            ceilHeight: 80,
            refrigeratorWidth: 80,
            hasDishwasher: true,
            hasLaundry: false,
            layoutno: 11
        }
    }
];

export default function Page() {
    const [result, setResult] = useState<{ Mdf: number; HighGlass: number; Vacuum: number; Color: number } | null>(null);
    const [item, setItem] = useState<typeof fields[number]>(fields[0]);
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState<Record<string, number | boolean>>({});
    const [presetIndex, setPresetIndex] = useState(0);
    const [selectedPreset, setSelectedPreset] = useState<typeof defaultPresets[0] | null>(null);

    // تابع برای اعمال یک پریست خاص
    const applyPreset = (preset: typeof defaultPresets[0]) => {
        setSelectedPreset(preset);
        
        // پیدا کردن فیلد مناسب بر اساس layoutno
        const field = fields.find(f => f.id === preset.values.layoutno) || fields[0];
        setItem(field);
        
        // تنظیم پارامترها با مقادیر پریست
        const newParams: Record<string, number | boolean> = {};
        
        // اضافه کردن پارامترهای دیوارها
        Object.entries(field.parameter).forEach(([key]) => {
            const paramKey = key === 'a' ? 'alength' : 
                            key === 'b' ? 'blength' : 
                            key === 'c' ? 'clength' : key;
            if (paramKey in preset.values) {
                newParams[paramKey] = preset.values[paramKey as keyof typeof preset.values];
            }
        });
        
        // اضافه کردن سایر پارامترها
        newParams.ceilHeight = preset.values.ceilHeight;
        newParams.refrigeratorWidth = preset.values.refrigeratorWidth;
        newParams.hasDishwasher = preset.values.hasDishwasher;
        newParams.hasLaundry = preset.values.hasLaundry;
        newParams.layoutno = preset.values.layoutno;
        newParams.tallWidth = preset.values.tallWidth;
        newParams.islandlength = preset.values.islandlength || 0;
        newParams.openlength = preset.values.openlength || 0;
        
        // اطمینان از وجود همه پارامترها
        if (!('alength' in newParams)) newParams.alength = 100;
        if (!('blength' in newParams)) newParams.blength = 100;
        if (!('clength' in newParams)) newParams.clength = 100;
        if (!('islandlength' in newParams)) newParams.islandlength = 0;
        if (!('openlength' in newParams)) newParams.openlength = 0;
        
        setParams(newParams);
    };

    // تابع برای چرخش بین پریست‌ها
    const cyclePresets = () => {
        const nextIndex = (presetIndex + 1) % defaultPresets.length;
        setPresetIndex(nextIndex);
        applyPreset(defaultPresets[nextIndex]);
    };

    // تابع برای نمایش پریست خاص
    const applySpecificPreset = (index: number) => {
        setPresetIndex(index);
        applyPreset(defaultPresets[index]);
    };

    const handleSelect = (field: typeof fields[number]) => {
        setItem(field);
        let initial: typeof params = {};
        
        Object.entries(field.parameter).forEach(([key, val]) => {
            const paramKey = key === 'a' ? 'alength' : 
                            key === 'b' ? 'blength' : 
                            key === 'c' ? 'clength' : key;
            const minValue = typeof val.min === "number" ? val.min : 100;
            initial[paramKey] = minValue;
        });
        
        initial.ceilHeight = 70;
        initial.refrigeratorWidth = 0;
        initial.hasDishwasher = false;
        initial.hasLaundry = false;
        initial.layoutno = fields.findIndex(o => o.id === field.id) + 1;
        initial.tallWidth = 0;
        
        if (!('alength' in initial)) initial.alength = 100;
        if (!('blength' in initial)) initial.blength = 100;
        if (!('clength' in initial)) initial.clength = 100;
        if (!('islandlength' in initial)) initial.islandlength = 0;
        if (!('openlength' in initial)) initial.openlength = 0;
        
        setParams(initial);
        setSelectedPreset(null);
    };

    const calculatePrice = async () => {
        setLoading(true);
        try {
            const paramsToSend = { ...params };
            
            const requiredFields = [
                'alength', 'blength', 'clength', 'islandlength', 'openlength',
                'tallWidth', 'ceilHeight', 'refrigeratorWidth', 
                'hasDishwasher', 'hasLaundry', 'layoutno'
            ];
            
            const defaults: Record<string, any> = {
                'alength': 100,
                'blength': 100,
                'clength': 100,
                'islandlength': 0,
                'openlength': 0,
                'tallWidth': 0,
                'ceilHeight': 70,
                'refrigeratorWidth': 0,
                'hasDishwasher': false,
                'hasLaundry': false,
                'layoutno': 1
            };
            
            requiredFields.forEach(field => {
                if (!(field in paramsToSend) || paramsToSend[field] === undefined || paramsToSend[field] === null) {
                    paramsToSend[field] = defaults[field];
                }
            });
            
            const result = await getCalculateResult(paramsToSend);
            setResult(result);
        } catch (error) {
            console.error('Error calculating price:', error);
            alert('خطا در محاسبه قیمت. لطفاً مجدداً تلاش کنید.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container mx-auto my-6 md:my-10 max-w-4xl px-3 md:px-4'>
            {/* دکمه‌های انتخاب پریست */}
            <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                    <Button 
                        size="sm" 
                        variant="outline"
                        onClick={cyclePresets}
                        className="mb-2"
                    >
                        🔄 تغییر طرح پیش‌فرض
                    </Button>
                    {defaultPresets.map((preset, index) => (
                        <Button
                            key={preset.id}
                            size="xs"
                            variant={selectedPreset?.id === preset.id ? "filled" : "outline"}
                            color={selectedPreset?.id === preset.id ? "primary" : "gray"}
                            onClick={() => applySpecificPreset(index)}
                            className="text-xs"
                        >
                            {preset.name}
                        </Button>
                    ))}
                </div>
                {selectedPreset && (
                    <div className="text-center mt-2 text-sm text-gray-600">
                        <span className="font-bold">{selectedPreset.name}</span>
                        <span className="mx-2">-</span>
                        <span>{selectedPreset.description}</span>
                    </div>
                )}
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-5'>
                {fields.map((field, i) => {
                    const selected = item?.id === field.id;
                    return (
                        <div className='center' key={field.id} onClick={() => handleSelect(field)}>
                            <div className={"border rounded-lg border-gray-300 p-1.5 md:p-2 hover:bg-primary/50 cursor-pointer " + (selected && "bg-primary")}>
                                <div className='h-20 w-20 md:h-26 md:w-26' style={{
                                    background: getCabinetBgPosition(i + 1),
                                    backgroundSize: "300% 400%"
                                }} />
                            </div>
                        </div>
                    );
                })}
            </div>
            <br />
            {item && (
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 my-6 md:my-8">
                        {Object.entries(item.parameter).map(([key, val]) => {
                            const stateKey = key === 'a' ? 'alength' : 
                                            key === 'b' ? 'blength' : 
                                            key === 'c' ? 'clength' : key;
                            const min = typeof val.min === "number" ? val.min : 100;
                            const max = typeof val.max === "number" ? val.max : 1000;
                            const currentValue = Number(params[stateKey]) || min;
                            
                            return (
                                <div key={key}>
                                    <label className="font-bold mb-1 block">{paramLabels[key] || key}
                                        <small className="mx-2 text-gray-500">(سانتی‌متر)</small>
                                    </label>
                                    <small className="block mb-2 text-gray-400">{paramHelpers[key]}</small>

                                    <Slider
                                        min={min}
                                        max={max}
                                        value={currentValue}
                                        onChange={v => setParams(p => ({ ...p, [stateKey]: v }))}
                                        mb={8}
                                    />
                                    <NumberInput
                                        min={min}
                                        max={max}
                                        value={currentValue}
                                        onChange={(e) => {
                                            const v = Number(e);
                                            if (!isNaN(v) && v >= min && v <= max) {
                                                setParams(p => ({ ...p, [stateKey]: v }));
                                            }
                                        }}
                                    />
                                </div>
                            );
                        })}

                        <div>
                            <label className="font-bold mb-1 block">عرض کمد
                                <small className="mx-2 text-gray-500">(سانتی‌متر)</small>
                            </label>

                            <Slider
                                min={0}
                                max={+params?.alength || 100}
                                value={+params['tallWidth'] || 0}
                                onChange={v => setParams(p => ({ ...p, tallWidth: v }))}
                                mb={8}
                            />
                            <NumberInput
                                value={+params['tallWidth'] || 0}
                                min={0}
                                max={+params?.alength || 100}
                                onChange={(e) => {
                                    const v = Number(e);
                                    if (!isNaN(v) && v >= 0 && v <= (+params?.alength || 100)) {
                                        setParams(p => ({ ...p, tallWidth: v }));
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <label className="font-bold mb-2 block">ارتفاع هوایی</label>
                            <small className="block mb-2 text-gray-400">کابینت متصل به دیوار که بالای کابینت زمینی قرار می‌گیرد</small>
                            <SegmentedControl
                                value={params.ceilHeight?.toString() || "70"}
                                onChange={val => setParams(p => ({ ...p, ceilHeight: Number(val) }))}
                                data={[
                                    { value: "70", label: "70 سانت" },
                                    { value: "80", label: "80 سانت" },
                                    { value: "90", label: "90 سانت" }
                                ]}
                                fullWidth
                            />
                        </div>
                        <div>
                            <label className="font-bold mb-2 block">یخچال</label>
                            <SegmentedControl
                                value={params.refrigeratorWidth?.toString() || "0"}
                                onChange={val => setParams(p => ({ ...p, refrigeratorWidth: Number(val) }))}
                                data={[
                                    { value: "0", label: "ندارد" },
                                    { value: "80", label: "معمولی" },
                                    { value: "95", label: "ساید" },
                                    { value: "125", label: "دوقلو" }
                                ]}
                                fullWidth
                            />
                        </div>
                        <div>
                            <label className="font-bold mb-2 block">جای ماشین ظرفشویی</label>
                            <SegmentedControl
                                value={params.hasDishwasher?.toString() || "false"}
                                onChange={val => setParams(p => ({ ...p, hasDishwasher: val === "true" }))}
                                data={[
                                    { value: "false", label: "ندارد" },
                                    { value: "true", label: "دارد" }
                                ]}
                                fullWidth
                            />
                        </div>
                        <div>
                            <label className="font-bold mb-2 block">جای ماشین لباسشویی</label>
                            <SegmentedControl
                                value={params.hasLaundry?.toString() || "false"}
                                onChange={val => setParams(p => ({ ...p, hasLaundry: val === "true" }))}
                                data={[
                                    { value: "false", label: "ندارد" },
                                    { value: "true", label: "دارد" }
                                ]}
                                fullWidth
                            />
                        </div>
                    </div>
                    
                    {result && (
                        <Card shadow="sm" padding="md" radius="md" withBorder className="my-6 md:my-8">
                            <Group grow className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                                <div className="text-center">
                                    <label className="block text-gray-700 mb-2">قیمت ام دی اف</label>
                                    <p className="text-lg md:text-xl font-bold text-primary">
                                        {result.Mdf.toLocaleString('fa')} <span className="text-xs md:text-sm font-normal">تومان</span>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <label className="block text-gray-700 mb-2">قیمت هایگلاس</label>
                                    <p className="text-lg md:text-xl font-bold text-primary">
                                        {result.HighGlass.toLocaleString('fa')} <span className="text-xs md:text-sm font-normal">تومان</span>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <label className="block text-gray-700 mb-2">قیمت وکیوم (ممبران)</label>
                                    <p className="text-lg md:text-xl font-bold text-primary">
                                        {result.Vacuum.toLocaleString('fa')} <span className="text-xs md:text-sm font-normal">تومان</span>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <label className="block text-gray-700 mb-2">قیمت رنگ پلی اورتان</label>
                                    <p className="text-lg md:text-xl font-bold text-primary">
                                        {result.Color.toLocaleString('fa')} <span className="text-xs md:text-sm font-normal">تومان</span>
                                    </p>
                                </div>
                            </Group>
                        </Card>
                    )}
                    
                    <div className="center flex gap-4">
                        <Button size="md" loading={loading} onClick={calculatePrice}>
                            محاسبه قیمت آنلاین
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}