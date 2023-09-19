import React from 'react';
import ProductSlide from "./ProductSlide";
import {useFetchProducts} from "../../services/fetchProducts";

const SlideContainer = () => {
    const {isLoading, error, data:products} = useFetchProducts()
    console.log("products",products)
    return (
        <>
            <ProductSlide
                isLoading={isLoading}
                error={error}
                products={products}
            />
        </>
    );
};

export default SlideContainer;