import BackendItemHandler from "../../products/color/page";

export default function Page() {
    return (
        <BackendItemHandler
            api="/admin/portfolio/category"
            name="دسته بندی"
        />
    );
}