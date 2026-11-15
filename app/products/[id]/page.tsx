import ProductDetails from "@/app/components/ProductDetails";

type PageProductProps = {
    params: Promise<{
        id: string;
    }>
}

export default async function PageProduct({ params }: PageProductProps) {
    const { id } = await params;
    return (
        <div>
            <ProductDetails id={id} />
        </div>
    );
}