import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { error } from "console";


function useProducts(id: string | null) {
    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product|null>(null);
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<Boolean>(false);
    
    let url = "https://fakestoreapi.com/products";
    if(id != null){
        url = `https://fakestoreapi.com/products/${id}`;
    }

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then((json) => {
            console.log(json);
            if(id != null){
                setProduct(json)
            }else{
                setProducts(json);
            }
        })
        .catch(e => {
            console.error("Error fetching products:", e);
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    return { product, products, loading, error };
}

export default useProducts;