import React from 'react';
import {useFetchProducts} from "../services/fetchProducts";
import {useFetchBrands} from "../services/fetchBrands";

const AllProducts = () => {

    const {data: products, isLoading, isError} = useFetchProducts()
    const {data: brands} = useFetchBrands()

    const filteredProduct = (select) => {
        products?.filter((product)=>
            product.brand === select
        )
    }

    return (
        <div className={"flex flex-wrap mt-5 ml-10"}>
            <div className={"mr-10 mt-3 ml-4"}>
                <p className={"mt-10 text-2xl font-bold"}>브랜드</p>
                <p className={"mb-4 font-extrabold mr-5"}>_________________</p>
                {brands?.map((brand, index)=>(

                    <button
                        className={"flex font-semibold mb-4"}
                        onClick={(e)=>filteredProduct(e.target.value)}
                    >
                        <p className={"text-lg"}>{brand.name}</p>
                    </button>
                ))}
            </div>

            <div className={"flex mt-8 ml-7"}>
                {products?.map((product, index) => (
                    <div className="w-full lg:max-w-full  mb-3 ml-7 mt-5 mb-5">
                        <div className={"ml-2 bg-stone-100 border-2 w-52 lg:w-52 flex-none "}>
                            <img src={product.productImg1}  />
                        </div>
                        <div
                            className="bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-5">
                                <p className="text-gray-700 text-sm mb-1 font-bold">브랜드이름</p>
                                <div className="text-gray-900 text-sm">
                                    {product.name}
                                </div>

                            </div>
                            <div className="flex items-center">
                                <div className="">
                                    <p className="text-gray-900 leading-none font-semibold">{product.price}원</p>
                                    <p className="text-red-400 text-sm mt-1">{product.stock}개 남음</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default AllProducts;