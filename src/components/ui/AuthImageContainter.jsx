import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";

const AuthImageContainter = ({image,firstText,secondText}) => {
    return (
        <div className="col-span-6 hidden h-full w-full items-center bg-slate-50 p-4 lg:flex">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <LazyLoadImage
                    src={image}
                    width={400}
                    height={400}
                    effect="blur"
                    alt="Image Alt"
                    className="-mt-32 opacity-70"
                />
                <h1 className={`text-gray-600 -mt-80 relative z-10 text-4xl font-bold `}>{firstText}</h1>
                <h1 className="relative z-10  mt-2 text-4xl font-bold text-yellow-900">
                    {secondText}
                </h1>
            </div>
        </div>
    );
};

export default AuthImageContainter;