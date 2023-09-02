import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useFetchProductById} from "../services/fetchProducts";

const ProductDetail = () => {

    const {productId} = useParams()
    const navigate = useNavigate()
    const {data:product, isLoading, isError} = useFetchProductById(productId)

    if(isLoading){
        return(
            <div>
                <h1>loading</h1>
            </div>
        )
    }

    return (
        <div>
            <button onClick={()=> navigate(-1)}>
                뒤로가기
            </button>
            <img src={product.productImg1}  className={"bg-stone-100 border-2 w-96 lg:w-96 flex-none"}/>

            <h1>{product.name}</h1>
        </div>
    );
};

export default ProductDetail;