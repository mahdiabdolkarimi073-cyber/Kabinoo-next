import StyledDiv from "@/style-stuff/StyledDiv"

export default function Page() {
    return (
        <div className="p-2 max-w-2xl mx-auto my-6 md:my-10 px-2">
            <StyledDiv
                style={{
                    "*": {
                        textAlign: "justify"
                    }
                }}
                className="font-sans text-gray-800 leading-normal "
            >
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center!">
                    مجموعه تخصصی کابینت و دکوراسیون داخلی
                </h1>

                <p className="mb-6 text-base md:text-lg">
                    در مجموعه‌ی تخصصی کابینت و دکوراسیون داخلی ما، زیبایی، دوام و کارایی در کنار هم معنا پیدا می‌کنند. ما در کرمان فعالیت می‌کنیم؛ جایی که هنر طراحی، شناخت دقیق از نیازهای شما ، و تعهد به کیفیت، پایه‌های اصلی کار ما را شکل می‌دهند.
                </p>

                <p className="mb-6 text-base md:text-lg">
                    مجموعه کابینوحاصل تلاش یک خانواده‌ی خلاق و فنی‌ست که هر عضو آن با تخصص خود، به ارتقای کیفیت پروژه‌ها کمک می‌کند. ما باور داریم که جزئیات کوچک، تفاوت‌های بزرگ می‌سازند.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4 border-r-4 border-amber-500 pr-3">
                    مزیت‌های کاری ما
                </h2>

                <ul className="list-disc list-inside mb-8 space-y-3">
                    <li className="text-base md:text-lg">قبل از اجرا، هر پروژه با طراحی دیجیتال دقیق و قابل‌تصور ارائه می‌شود تا مشتری بتواند با اطمینان تصمیم‌گیری کند.</li>
                    <li className="text-base md:text-lg">ما فقط با مواد اولیه‌ای کار می‌کنیم که در آزمون زمان و استفاده، سربلند بیرون آمده‌اند.</li>
                    <li className="text-base md:text-lg">در ساخت کابینت‌ها و المان‌های دکوراتیو، از ترکیب‌های خاصی استفاده می‌کنیم که مقاومت، زیبایی و دوام را به‌طور هم‌زمان تضمین می‌کنند.</li>
                    <li className="text-base md:text-lg">هماهنگی کامل با سبک زندگی مشتری: طراحی‌ها بر اساس نیازهای واقعی خانواده‌ها انجام می‌شود—چه فضای کوچک آپارتمانی باشد، چه ویلای بزرگ با سبک کلاسیک.</li>
                    <li className="text-base md:text-lg">از مشاوره اولیه تا نصب نهایی، تیم ما در کنار شماست. هیچ مرحله‌ای بدون هماهنگی و تأیید شما انجام نمی‌شود.</li>
                    <li className="text-base md:text-lg">ما به صداقت کاری پایبندیم. قیمت‌ها بر اساس متریال، زمان اجرا و حجم پروژه تعیین می‌شود، بدون هزینه‌های پنهان.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold mt-12 mb-4 border-r-4 border-amber-500 pr-3">
                    مأموریت ما
                </h2>

                <p className="mb-8 text-lg">
                    ما فقط کابینت نمی‌سازیم؛ ما فضاهایی خلق می‌کنیم که زندگی در آن‌ها راحت‌تر، زیباتر و منظم‌تر باشد. مأموریت ما این است که هر خانه یا محل کار، بازتابی از شخصیت و نیازهای صاحب آن باشد.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold mt-12 mb-4 border-r-4 border-amber-500 pr-3">
                    چشم‌انداز ما
                </h2>

                <p className="text-lg">
                    تبدیل شدن به مرجع طراحی و اجرای دکوراسیون داخلی با حفظ کیفیت، نوآوری و رضایت مشتری. ما به توسعه پایدار، آموزش تیم‌های اجرایی، و ارتقاء استانداردهای ساخت و طراحی متعهدیم.
                </p>
            </StyledDiv>
        </div>
    );
}