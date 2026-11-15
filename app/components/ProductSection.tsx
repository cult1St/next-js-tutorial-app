"use client";

import useProducts from "../hooks/useProduct";
import ProductItem from "./ProductItem";


export default function ProductSection() {
    const { products, loading, error } = useProducts(null);

    if (loading) {
        return <p>Loading products...</p>;
    }
     if(error){
        return <p>An error Occurred while fetching this data</p>
    }
    return (
        <section className="container section" id="shop">
            <div className="section-title">
                <div>
                    <p className="eyebrow">GOOD FINDS, GREAT COMPANY</p>
                    <h2>Your next favourite.</h2>
                </div>
                <a className="text-link" href="product.html">
                    Discover our favourite ↗
                </a>
            </div>
            <p className="section-subtitle">
                Furniture, lighting and little things that make a difference.
            </p>
            <div className="product-grid">
                {
                    products.length > 0 ? (
                        products.map((product, key) => <ProductItem product={product} key={key} />)
                    ) : (
                        <p>No Product available now, please try again later</p>
                    )
                }
                
            </div>
        </section>
    )
}