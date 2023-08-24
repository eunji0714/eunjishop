import React from 'react';

const User = ({displayName, photoURL}) => {
    return (
        <div className={"flex shrink-0 items-center"}>
            <img
                className={"mr-2 h-10 w-10 rounded-full"}
                src={photoURL}
                alt={displayName}
            />
            <span className={"hidden md:block"}>{displayName}</span>
        </div>
    );
};

export default User;