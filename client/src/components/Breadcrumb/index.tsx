import { Breadcrumb } from "antd";
import Link from "next/link";

interface BreadcrumbItem {
    title: string;
    link?: string;
}

interface BreadCrumbProps {
    items: BreadcrumbItem[];
}

const BreadCrumb = ({ items }: BreadCrumbProps) => {
    const breadcrumbItems = items.map((item, index) => ({
        key: index,
        title: item.link ? <Link href={item.link}>{item.title}</Link> : item.title,
    }));

    return (
        <Breadcrumb separator=">" items={breadcrumbItems} />
    );
}

export default BreadCrumb;