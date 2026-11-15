
import Link from "next/link";
import { Product } from "../types/product";
type ProductItemProp = {
    product: Product
}

export default function ProductItem({ product } : ProductItemProp) {
    return (
        <article className="product-card">
            <Link
                className="card-image"
                href={`/products/${product.id}`}
                aria-label={`View ${product.title}`}
            >
                <img
                    src={product.image}
                    alt={product.title}
                    width={420}
                    height={460}
                    loading="lazy"
                />
                <span className="badge">Bestseller</span>
                <span className="arrow" aria-hidden="true">
                    ↗
                </span>
            </Link>
            <div className="card-info">
                <div>
                    <p>{product.category}</p>
                    <h3>
                        <Link href={`/products/${product.id}`}>{product.title}</Link>
                    </h3>
                </div>
                <span>${product.price}</span>
            </div>
        </article>
    )
}