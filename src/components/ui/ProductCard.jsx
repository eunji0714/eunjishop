import React from 'react';
import ErrorMessage from "./ErrorMessage";
import {Link} from "react-router-dom";
import {TagIcon} from "@heroicons/react/20/solid";
import {LazyLoadImage} from "react-lazy-load-image-component";

const ProductCard = ({
                         id,
                         image,
                         description,
                         title,
                         price,
                         category,
                         sizes,
                         highlights,
                         details,
                         tags,
                     }) => {
    if (!id) return <ErrorMessage />
    return (
        <Link
            to={`/products/${id}`}
            state={{
                id,
                image,
                title,
                description,
                category,
                price,
                sizes,
                highlights,
                details,
            }}
        >
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 pt-[100%]">
                <div className="absolute inset-0 translate-x-1/2 translate-y-1/2">
                    <LazyLoadImage
                        src={image}
                        alt={description}
                        className="w-52 absolute top-0 left-0 h-full w-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-75"
                    />
                </div>
            </div>
            <div className="p-5">
                <h3 className="border-b border-gray-200 pb-4 text-lg font-bold text-gray-900">
                    {title}
                </h3>

                <div className="flex items-end justify-between pt-5">
                    <div className="relative rounded-lg border-2 border-violet-500 px-2 py-1">
            <span className="absolute -top-3 bg-white px-2 text-xs text-violet-400">
              Price
            </span>
                        <p className=" text-lg font-bold text-violet-500">₩{price}</p>
                    </div>

                    <p className="flex items-center text-sm text-gray-500">
                        <TagIcon className="mr-2 h-4 w-4" />
                        {tags}
                    </p>
                </div>
            </div>

        </Link>
    );
};

export default ProductCard;