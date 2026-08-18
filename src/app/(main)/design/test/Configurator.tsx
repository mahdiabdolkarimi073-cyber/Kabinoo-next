'use client';

import dynamic from 'next/dynamic';
import { ReactNode, useEffect, useRef, useState } from 'react';
import {
    ActionIcon,
    Badge,
    Button,
    Container,
    NumberInput,
    SegmentedControl,
    Select,
    Slider,
    Text,
    Tooltip
} from '@mantine/core';
import classes from './Configurator.module.css';
import Loading from '@/no-side/Loading';
import { IconArrowBack, IconRefresh, IconSwitchHorizontal } from '@tabler/icons-react';
import helps from "./help.json"
import { CategoriesLabels, CategoriesReverse } from "@/app/(main)/design/page";

// TypeScript interfaces
interface Dimension {
    OveralWidth: number;
    OveralHeight: number;
    OveralDepth: number;
}

interface Property {
    BackPanelThicknessId: number;
    FeetId: number;
    FurniturePositionId: number;
    HandleItemId: number;
    MaterialItemId: number;
}

interface ConfiguratorState {
    CategoryId: number;
    Dimension: Dimension;
    Property: Property;
    SectionList?: any[];
}

interface Control {
    id: string;
    type: 'range' | 'select' | 'checkbox' | string;
    min: number;
    max: number;
    value: number | boolean;
    options?: { value: string; label: string, extra?: string }[];
    tag: string
    label: string
    marks?: { value: number; label: string }[],
    prefix?: string
}

interface MessageData {
    code: number;
    message: string;
    data: ConfiguratorState | Control[];
}

interface CommandData {
    command: string;
    data: Record<string, any>;
}


const Configurator = (props: {
    category: number,
    data?: any,
    onSave?: (o: any) => any
}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [price, setPrice] = useState(0);
    const [controls, setControls] = useState<Control[]>([]);
    const [data, setData] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(true);
    const [activeControl, setActiveControl] = useState<Control>();
    const type = CategoriesLabels.find(o => o.id === CategoriesReverse[props.category])?.name;
    //@ts-ignore
    window['D_T'] = type;

    useEffect(() => {
        const handleMessage = (event: MessageEvent<MessageData>) => {
            if (event.data.code === 100) {
                setLoading(false);
                setControls(event.data.data as Control[]);
            } else if (event.data.code === 101) {
                const { id, value } = (event.data.data || {}) as any;
                setData(prev => ({
                    ...prev,
                    [id]: value
                }))
            } else if (event.data.code === 105) {
                setPrice(+event.data.data || 0)
            } else if (event.data.code === 200) {
                props?.onSave?.(event.data.data);
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    useEffect(() => {
        if (props.data) {
            window.localStorage.setItem("InitObject", JSON.stringify({ Configurator: JSON.stringify(props.data) }))
        }
    }, [props])

    const sendCommand = (command: string, data: CommandData['data']) => {
        console.log(command, data);
        if (command === "setControlValue") {
            setData((prev: any) => ({
                ...prev,
                [data.id + ""]: data.value
            }))
        }
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.postMessage(
                { command, data } as CommandData,
                '*'
            );
        }
    };

    const renderControl = (control: Control) => {
        if (control.id === "sectionCountDropDown") {
            control.type = "range";
            control.tag = "input";
            const options = [...control.options || []];
            if (!!options.length) {
                const nums = options.map(o => +o.value);
                control.min = Math.min(...nums);
                control.max = Math.max(...nums);
                control.marks = options.map(o => ({
                    value: +o.value,
                    label: `${o.value}`
                }))
                control.prefix = "ستون"
                delete control.options;
            }
        }
        if (control.tag === "select" || control.type === "button-list") {
            return (
                <div key={control.id}>
                    <Text size="sm" fw={500} mb={5}>
                        {control.label}
                    </Text>
                    <Select
                        value={data[control.id]?.toString?.() || String(control.value)}
                        onChange={(value) => sendCommand('setControlValue', {
                            id: control.id,
                            value: parseInt(value!) || value!
                        })}
                        data={control.options || []}
                        {...control?.options?.[0]?.extra && ({
                            renderOption: ({ checked, option }) => {
                                const item = control.options?.find(o => o.value === option.value);
                                return (
                                    <div className={'flex items-center gap-2'}>
                                        <img style={{
                                            width: "20px",
                                            height: "20px",
                                            borderRadius: "100%",
                                            objectFit: "cover"
                                        }} src={item?.extra} alt={option.label} />
                                        <p>{option.label}</p>
                                    </div>
                                )
                            }
                        })}
                    />
                </div>
            )
        }

        if (control.options && control.tag !== "select") {
            const currentValue = data[control.id] !== undefined ? data[control.id] : control.value;
            const stringValue = typeof currentValue === "boolean" ? String(currentValue) : String(currentValue || "");
            return (
                <>
                    <div className='flex justify-between items-center'>
                        <p>{control.label}</p>
                        <SegmentedControl
                            data={control.options}
                            onChange={(e) => sendCommand('setControlValue', { id: control.id, value: e })}
                            value={stringValue}
                        />
                    </div>
                    {(control.id === "handleInput" && data[control.id] === "true") && (
                        <div className={'flex items-center justify-end gap-3 mt-2'}>
                            {['dot', 'line'].map((o, i) => (
                                <div
                                    onClick={() => {
                                        sendCommand('setControlValue', { id: 'handleModeInput', value: false });
                                        sendCommand("Click", {
                                            path: `[data-handleobject-id="${i + 1}"]`
                                        });
                                        setData(prev => ({
                                            ...prev,
                                            ol: i + ""
                                        }))
                                    }}

                                    style={{
                                        width: "40px",
                                        height: "40px"
                                    }}
                                    key={o + i}
                                    className={`rounded-xl overflow-hidden border ${data['ol'] === i + "" ? "border-primary" : "border-gray-300"}`}>
                                    <img
                                        src={`/design/configure/door-${o}.png`}
                                        alt={o}
                                        className={'w-full h-full object-cover'}
                                    />
                                </div>
                            ))}
                            <div
                                onClick={() => {
                                    sendCommand('setControlValue', { id: 'handleModeInput', value: true });
                                    setData(prev => ({
                                        ...prev,
                                        ol: "hidden"
                                    }))
                                }}
                                style={{
                                    width: "40px",
                                    height: "40px"
                                }}
                                className={`rounded-xl overflow-hidden border flex items-center justify-center bg-gray-100 cursor-pointer ${data['ol'] === "hidden" ? "border-primary" : "border-gray-300"}`}
                            >
                                <span className="text-[10px] text-center font-medium leading-tight">دستگیره مخفی</span>
                            </div>
                        </div>
                    )}
                </>
            )
        }
        if (control.type === "range") {
            return (
                <div key={control.id}>
                    <Text size="sm" fw={500} mb={5}>
                        {control.label}
                    </Text>
                    <Slider
                        min={+control.min}
                        max={+control.max}
                        marks={control.marks}
                        value={data[control.id] || Number(control.value)}
                        onChange={(value) => sendCommand('setControlValue', { id: control.id, value })}
                        label={(value) => `${control.marks?.find(o => o.value === value)?.label || value} ${control.prefix || "cm"}`}
                    />
                    {control.marks?.length ? (
                        <Select
                            size='xs'
                            className='mt-5'
                            data={control.marks.map(o => ({
                                ...o,
                                value: o.value + "",
                                label: o.label + ` ${control.prefix || "cm"}`
                            }))}
                            value={data[control.id]?.toString() || Number(control.value)}
                            key={data[control.id]?.toString() || Number(control.value)}
                            onChange={value => sendCommand('setControlValue', {
                                id: control.id,
                                value: +(value || control.min)
                            })}
                        />
                    ) : (
                        <NumberInput
                            size='xs'
                            className='mt-1'
                            min={+control.min}
                            max={+control.max}
                            key={data[control.id] || Number(control.value)}
                            defaultValue={data[control.id] || Number(control.value)}
                            onKeyDown={e => {
                                if (e.key === "Enter") {
                                    sendCommand('setControlValue', {
                                        id: control.id,
                                        value: Math.max(control.min, Math.min((e.target as any).value, control.max))
                                    })
                                }
                            }}
                            onBlur={(value) => sendCommand('setControlValue', {
                                id: control.id,
                                value: value.target.value
                            })}
                        />
                    )}
                </div>
            )
        }
    };

    return (
        <div className={classes.container + " my-10 relative flex flex-col lg:flex-row gap-3"}>
            {loading && (
                <div className='w-full h-[3-vh] center mx-auto absolute left-0 right-0'>
                    <Loading />
                </div>
            )}
            {!loading && (
                <Container className={'min-w-[300px]'}>
                    <div className='flex-col gap-4 hidden md:flex'>
                        {controls.filter(e => e.id !== 'handleModeInput').map((e, i) => {
                            const node = renderControl(e) as ReactNode;
                            if (!node) return;
                            return (
                                <Help id={e.id}>
                                    <div>
                                        {node}
                                    </div>
                                </Help>
                            )
                        })}
                        <Help id={'price_display'}>
                            <Badge color='secondary' size='xl' fullWidth>{price.toLocaleString("fa")} تومان</Badge>
                        </Help>
                        <Help id={'save_design'}>
                            <Button onClick={() => sendCommand('Save', {})}>
                                ذخیره
                            </Button>
                        </Help>
                        <p className='text-center text-xs opacity-70'>زمان تحویل 3 الی 6 هفته</p>
                    </div>
                </Container>
            )}
            <div className='flex-grow flex flex-col items-end min-h-[70vh]'>
                <div className='flex gap-3 items-center'>
                    <Help id={'reset_button'}>

                        <ActionIcon
                            onClick={() => {
                                setData({})
                                sendCommand("Eval", { value: "reset()" })
                            }}
                            variant='outline'
                            size='lg'
                        >
                            <IconRefresh size={20} />
                        </ActionIcon>
                    </Help>
                    <Help id={'undo_button'}>
                        <ActionIcon
                            onClick={() => sendCommand("Eval", { value: "undo()" })}
                            variant='outline'
                            size='lg'
                        >
                            <IconArrowBack size={20} />
                        </ActionIcon>
                    </Help>
                    <Help id={'dimension_display'}>
                        <ActionIcon
                            onClick={() => sendCommand("Eval", { value: "changeView()" })}
                            variant='outline'
                            size='lg'
                        >
                            <IconSwitchHorizontal size={20} />
                        </ActionIcon>
                    </Help>
                </div>
                <iframe
                    ref={iframeRef}
                    src={`/idero-2/index.html?category=${props.category}`}
                    className='min-h-[550px] w-full overflow-none'
                    scrolling={'none'}
                    onLoad={() => sendCommand('getControls', {})}
                />
                <div className='flex flex-col md:hidden w-full gap-5 min-h-50 mb-5'>
                    <div className=''>
                        <div className='overflow-auto grow flex flex-nowrap gap-5 p-1' style={{
                            minWidth: "100%",
                            width: 0
                        }}>
                            {controls.filter(o => !!o.label && o.id !== 'handleModeInput').map(o => {
                                const selected = activeControl?.id === o.id;
                                return (
                                    <Button variant={selected ? "filled" : 'outline'} onClick={() => {
                                        setActiveControl(o);
                                    }} classNames={{ root: "min-w-30" }}>
                                        {o.label}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                    {activeControl && (
                        <Help id={activeControl.id}>
                            <div>
                                {renderControl(activeControl)}
                            </div>
                        </Help>
                    )}
                </div>
                <div className="px-3 bg-white relative -top-10" dir="rtl">
                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">
                            راهنمای طراحی {type}
                        </h1>
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                در این محیط می‌توانید {type} دلخواه خود را به صورت کاملاً سفارشی طراحی کنید. ابتدا ابعاد
                                کلی شامل عرض، ارتفاع و عمق را تعیین کنید. سپس تعداد ستون‌هایی که می‌خواهید {type} شما
                                داشته باشد را انتخاب کنید. توجه داشته باشید که سیستم بر اساس عرض انتخابی شما،
                                محدودیت‌های منطقی برای تعداد ستون‌ها اعمال می‌کند.
                            </p>

                            <p>
                                رنگ و نمای ظاهری {type} را از میان گزینه‌های متنوعی که شامل طرح‌های چوبی، رنگ‌های ساده و
                                رنگ‌های جذاب است انتخاب کنید. هر رنگ با کیفیت بالا و مقاوم در برابر استفاده روزانه طراحی
                                شده است.
                            </p>

                            <p>
                                برای تنظیمات دقیق‌تر، روی هر ستون کلیک کنید تا بتوانید عرض، ارتفاع و تعداد طبقات آن را
                                به صورت جداگانه تنظیم کنید. همچنین با کلیک روی هر طبقه، امکان اضافه کردن درب، کشو یا فلپ
                                و تغییر ارتفاع طبقه فراهم است. اگر می‌خواهید چندین طبقه دارای درب مشترک باشند، کلیک چپ
                                را نگه داشته و روی طبقات مورد نظر بکشید.
                            </p>

                            <p>
                                در تنظیمات عملکردی مشخص کنید که درب‌ها و کشوها درون چارچوب طبقه قرار گیرند یا روی چارچوب
                                نصب شوند. همچنین تعیین کنید که آیا تمام قسمت‌ها مجهز به دستگیره باشند یا از سیستم فشاری
                                استفاده کنید.
                            </p>

                            <p>
                                ضخامت پشت محصول را بر اساس نیاز خود انتخاب کنید. ورق نازک برای استفاده معمولی و
                                صرفه‌جویی در قیمت مناسب است، در حالی که ورق ضخیم مقاومت و دوام بیشتری دارد.
                            </p>

                            <p>
                                در نهایت تصمیم بگیرید که آیا {type} شما مجهز به پایه‌های تنظیم‌کننده باشد یا خیر. این
                                پایه‌ها امکان تراز کردن روی سطوح ناهموار را فراهم می‌کنند و ارتفاع آن‌ها به ارتفاع کلی
                                محصول اضافه خواهد شد.
                            </p>

                            <p>
                                قیمت نهایی {type} بر اساس تمام انتخاب‌ها و تنظیمات شما به صورت لحظه‌ای محاسبه و نمایش
                                داده می‌شود. پس از اتمام طراحی، می‌توانید آن را ذخیره کرده و سپس به سبد خرید اضافه کنید.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Help(props: {
    id: string,
    children: ReactNode,
    className?: string
}) {
    //@ts-ignore
    const type = window['D_T']
    const help = helps.find(o => o.id === props.id);
    return (
        <Tooltip
            position={'left'}
            radius={'sm'}
            bg={'white'}
            color={'black'}
            classNames={{
                tooltip: "drop-shadow"
            }}
            label={help ? (
                <div className={'text-black'}>
                    <h6>{help.title}</h6>
                    <p className={'text-xs word-breaks '}>{help.description.replaceAll("%type%", type)}</p>
                </div>
            ) : undefined}
        >
            <div className={props.className}>
                {props.children}
            </div>
        </Tooltip>
    )
}

export default dynamic(() => Promise.resolve(Configurator), { ssr: false, loading: () => <Loading /> });