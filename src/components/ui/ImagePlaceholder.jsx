import React from 'react';

const ImagePlaceholder = (height) => {
    return (
        <div
            className={`h-full ${
                height ?? 'min-h-[384px]'
            } w-full animate-pulse rounded-2xl bg-slate-50`}
        />
    );
};

export default ImagePlaceholder;