"use client";

import useProducts from "../hooks/useProduct";
import { Product } from "../types/product";
import ProductSection from "./ProductSection";

export default function ProductDetails({ id }: { id: string }) {
    const { product, loading, error } = useProducts(id);

    if(loading){
        return <p>Loading shop Product ..........</p>
    }

    if(error){
        return <p>An error Occurred while fetching this data</p>
    }
    return (
        <main className="container" id="main">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <a href="/#shop">{product?.category}</a>
                <span>/</span>
                <span aria-current="page">{product?.title}</span>
            </nav>
            <section className="product-layout">
                {/* PRODUCT IMAGE */}
                <div>
                    <div className="detail-image">
                        <span className="badge">THE CROWD FAVOURITE</span>
                        <img
                            src={product?.image}
                            alt={product?.title}
                            width={420}
                            height={460}
                        />
                    </div>
                    <p className="image-footnote">NATURAL MATERIALS. QUIET CHARACTER.</p>
                </div>
                {/* PRODUCT INFORMATION */}
                <div className="product-info">
                    <p className="eyebrow">FORM STUDIO / FURNITURE</p>
                    <h1>
                        The Everyday
                        <br />
                        Chair.
                    </h1>
                    <p className="rating">
                        <span aria-label="5 out of 5 stars">★★★★★</span>
                        <a href="#reviews">4.9 · 28 reviews</a>
                    </p>
                    <p className="price">
                        {product?.price ? `$${product.price}` : "Price not available"}
                    </p>
                    <p className="description">
                        {product?.description || "No description available for this product."}
                    </p>
                    {/* Native controls need no JavaScript. React can handle the form later. */}
                    <form action="#demo-note">
                        <fieldset>
                            <legend>
                                Finish <span>Choose your favourite</span>
                            </legend>
                            <div className="finish-options">
                                <label>
                                    <input
                                        type="radio"
                                        name="finish"
                                        defaultValue="natural"
                                    />
                                    <span>Natural oak</span>
                                </label>
                                <label>
                                    <input type="radio" name="finish" defaultValue="walnut" />
                                    <span>Warm walnut</span>
                                </label>
                            </div>
                        </fieldset>
                        <div className="purchase-row">
                            <label className="quantity">
                                Qty{" "}
                                <input
                                    type="number"
                                    name="quantity"
                                    min={1}
                                    max={10}
                                    defaultValue={1}
                                    required={true}
                                />
                            </label>
                            <button type="submit" className="button">
                                Add to bag <span>↗</span>
                            </button>
                        </div>
                    </form>
                    <p className="demo-note" id="demo-note">
                        Classroom demo: no order is placed. Connect this form to your React cart
                        later.
                    </p>
                    <div className="delivery">
                        <p>↗ Delivery in 3–5 business days</p>
                        <p>↶ Easy 7-day returns</p>
                    </div>
                    {/* HTML details/summary creates accordions without JavaScript. */}
                    <div className="accordions">
                        <details open={true}>
                            <summary>The details</summary>
                            <p>
                                Solid oak frame, a comfortable foam seat, and soft woven upholstery.
                                Felt feet help protect your floors.
                            </p>
                        </details>
                        <details>
                            <summary>Dimensions &amp; care</summary>
                            <p>
                                54 cm wide × 56 cm deep × 78 cm high. Seat height: 45 cm. Wipe the
                                wood with a soft, dry cloth. Spot clean the fabric.
                            </p>
                        </details>
                        <details>
                            <summary>Delivery &amp; returns</summary>
                            <p>
                                Sample delivery fee: ₦5,000. Free delivery on orders over ₦100,000.
                                Return within 7 days in the original packaging.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
            <section className="review" id="reviews">
                <p className="eyebrow">A LITTLE LOVE FROM OUR COMMUNITY</p>
                <blockquote>
                    “The kind of chair that makes a house feel like home.”
                </blockquote>
                <p>
                    ★★★★★ <span>Amara O. · Sample customer review</span>
                </p>
            </section>
            <section className="section">
                <div className="section-title">
                    <div>
                        <p className="eyebrow">BETTER TOGETHER</p>
                        <h2>Good company.</h2>
                    </div>
                    <a className="text-link" href="index.html#shop">
                        Shop all essentials ↗
                    </a>
                </div>
                <ProductSection />
            </section>
        </main>

    )
}