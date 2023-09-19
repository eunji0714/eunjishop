import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {ClockIcon} from "@heroicons/react/20/solid";

const MainImage = ({
    id, name, price, stock, desc1, desc2, productImg1, direction, rotation, scale, zIndex
}) => {
    return (
        <div
            className={`absolute w-[260px] rounded-2xl bg-whte p-4 shadow-lg sm:w-[320px]
                ${direction ?? ''}
                ${rotation ?? ''}
                ${scale ?? ''}
                ${zIndex ?? ''}
            `}
        >
            <LazyLoadImage
                src={productImg1}
                width={600}
                height={400}
                placeholder={<ImagePlaceholder />}
                alt={"Image ALlt"}
                className={"rounded-2xl"}
            />
            <div className="pt-4 pb-2">
                <h3 className="border-b border-gray-200 pb-4 text-lg font-bold text-gray-900">
                    {name}
                </h3>
                <div className="flex items-end justify-between pt-4">
                    <div className="relative rounded-lg border-2 border-yellow-900 px-2 py-1">
            <span className="absolute -top-3 bg-white px-2 text-xs text-yellow-800">
              Price
            </span>
                        <p className=" flex items-center text-lg font-bold text-yellow-800">
                            <AiOutlineDollarCircle className="mr-1" />
                            {price}
                        </p>
                    </div>
                    <div>
                        <span className="text-sm text-gray-500">{desc1}</span>
                        <p className="mt-1 flex items-center justify-end">
                            <ClockIcon className="mr-2 h-4 w-4" />
                            {stock}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainImage;