import React from 'react';
import {GlobeEuropeAfricaIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import {useFetchProducts} from "../services/fetchProducts";
import MainImage from "./MainImage";
import {MAIN_DATA} from "../data/Home/homdData";

const Main = () => {

    return (
        <section className={"relative"}>
            <div className={"overflow-hidden py-24 "}>
                <div className={"mx-auto max-w-7xl px-6 lg:px-8"}>
                    <div className={"mx-auto grid max-w2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:ml-10 lg:max-w-none lg:grid-cols-2"}>
                        <div className={"lg:pt-10"}>
                            <div className={"lg:max-w-xl"}>
                                <h1 className={"text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-left"}>Welcome to the World of{' '}
                                    <span className={"block text-yellow-900 lg:inline"}>Eunji shop</span>
                                </h1>
                                <p className={"mt-6 text-center text-lg leading-8 text-gray-600 lg:text-left"}>
                                    <span className={"inline font-semibold text-gray-900"}>
                                        Eunji shop
                                    </span>{' '}
                                    is a shoes shop
                                </p>
                                <div className="mt-10 flex flex-wrap items-center justify-center gap-y-4 gap-x-6 sm:flex-nowrap sm:gap-y-4 lg:justify-start">
                                    <Link
                                        to="/products"
                                        className="flex w-full items-center justify-center rounded-md bg-yellow-800 px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm transition-all hover:bg-yellow-700 sm:w-fit"
                                    >
                                        See the Collection
                                        <GlobeEuropeAfricaIcon className="ml-2 h-4 w-4" />
                                    </Link>
                                    <Link
                                        to="/products"
                                        className="flex max-h-[44px] w-full items-center justify-center rounded-md border border-yellow-700 px-4 py-2 text-base font-semibold leading-7 text-yellow-700 shadow-sm transition-all hover:shadow-yellow-700 sm:w-fit"
                                    >
                                        Shop Now
                                        <GlobeEuropeAfricaIcon className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={"relative flex h-96 justify-center"}>
                            {MAIN_DATA?.map((product, index) => (
                                <MainImage
                                    key={index}
                                    name={product.name}
                                    price={product.price}
                                    stock={product.stock}
                                    productImg1={product.productImg1}
                                    desc1={product.desc1}
                                    desc2={product.desc2}
                                    rotation={product.rotation}
                                    scale={product.scale}
                                    direction={product.direction}
                                    zIndex={product.zIndex}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;