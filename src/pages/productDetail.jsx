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
        <div className={"flex"}>
            <div>
                <img src={product.productImg1}  className={"ml-40 mt-10 mr-16 bg-stone-100 border-2flex-none"} style={{"width" : "535px"}}/>
            </div>
            <div className={"ml-14"}>
                <h1 className={"mt-14 text-lg font-bold"}>{product.brand.name}</h1>
                <h1 className={"text-2xl font-bold"}>{product.name}</h1>
                <h1 className={"mt-12 text-gray-400 font-semibold"}>판매가격</h1>
                <h1 className={"mt-2 text-4xl font-bold"}>{product.price.toLocaleString()}원</h1>
                <select className="font-bold mt-5 bg-gray-50 border-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-2.5 py-3.5 pr-96 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected className={""}>사이즈</option>
                    <option>230</option>
                    <option>240</option>
                    <option>250</option>
                    <option>260</option>
                    <option>270</option>
                    <option>280</option>
                </select>
                <div>
                    <button className={"font-bold mt-4 rounded-lg border border-blue-900 border-1 px-20 py-3 text-blue-900"}>
                        장바구니
                    </button>
                    <button className={"ml-6 font-bold mt-4 rounded-lg bg-blue-900 px-20 py-3 text-white"}>
                        구매하기
                    </button>

                </div>
                <hr className={"mt-16 border-gray-300 rounded-lg"}/>
                <div className={""}>
                    <div className={"flex justify-between mt-4"}>
                        <h1 className={"text-gray-500"}>브랜드</h1>
                        <h1 className={"font-semibold"}>{product.brand.name}</h1>
                    </div>
                    <div className={"flex justify-between mt-2"}>
                        <h1 className={"text-gray-500"}>모델명</h1>
                        <h1 className={"font-semibold"}>{product.desc1}</h1>
                    </div>
                    <div className={"flex justify-between mt-2"}>
                        <h1 className={"text-gray-500"}>출시일</h1>
                        <h1 className={"font-semibold"}>{product.desc2}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;