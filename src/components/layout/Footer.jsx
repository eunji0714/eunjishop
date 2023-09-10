import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {
    footerMarketPlace,
    footerResource,
    footerCompany,
    footerSocial,
} from "../../data/layout/layoutData";

const Footer = () => {

    const navigate = useNavigate()

    return (
        <footer
            className={`mt-auto border-t border-gray-200 ${
                navigate.pathname === '/login' || navigate.pathname === '/signup'
                    ? 'hidden'
                    : 'block'
            }`}
        >
            <div className={"mx-auto flex flex-col items-center"}>
                <div className={"grid w-full max-w-7xl gap-8 py-8 px-4 sm:grid-cols-12 sm:px-6 md:py-12"}>
                    <div className={"sm:col-span-12 lg:col-span-6"}>
                        <div className={"mb-2"}>
                            <Link to={"/"} className={"inline-block"} aria-label={"Cruip"}>
                                로고
                            </Link>
                        </div>
                    </div>
                    <div className={"sm:col-span-6 md:col-span-3 lg:col-span-2 lg:ml-auto"}>
                       <h6 className={"mb-2 font-medium text0gray-800"}>Marketplace</h6>
                        <ul className={"text-sm"}>
                            {footerMarketPlace.map((market, index) => (
                                <li className={"mb-2"} key={index}>
                                    <Link to={market.link}
                                          className={"text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"}
                                    >
                                        {market.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={"sm:col-span-6 md:col-span-3 lg:col-span-2 lg:ml-auto"}>
                        <h6 className={"mb-2 font-medium text0gray-800"}>Resources</h6>
                        <ul className={"text-sm"}>
                            {footerResource.map((market, index) => (
                                <li className={"mb-2"} key={index}>
                                    <Link to={market.link}
                                          className={"text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"}
                                    >
                                        {market.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={"sm:col-span-6 md:col-span-3 lg:col-span-2 lg:ml-auto"}>
                        <h6 className={"mb-2 font-medium text0gray-800"}>Eunji Company</h6>
                        <ul className={"text-sm"}>
                            {footerCompany.map((market, index) => (
                                <li className={"mb-2"} key={index}>
                                    <Link to={market.link}
                                          className={"text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"}
                                    >
                                        {market.name}
                                    </Link>
                                </li>
                            ) )}
                        </ul>
                    </div>
                </div>
                <div className={"flex w-full justify-center border-t border-gray-200 p-4 sm:px-6 md:py-8"}>
                    <div className={"w-full max-w-7xl px-4 sm:px-6 md:flex md:item-center md:justify-between"}>
                        <ul className={"mb-4 flex md:order-1 md:ml-4 md:mb-0"}>
                            {footerSocial.map((social, index) => (
                                <li key={index} className={`${index === 0 ? '' : 'ml-4'}`}>
                                    <button
                                        // onClick={(e) => {
                                        //     e.preventDefault()
                                        //     window.open(social.link,'_blank')
                                        // }}
                                        className={"hover:bg-white-100 flex items-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"}
                                        aria-label={social.name}
                                    >
                                        <svg
                                            className={"h-8 w-8 fill-current"}
                                            viewBox={"0 0 32 32"}
                                            xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                            <path d={social.path} />
                                        </svg>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className={"mr-4 text-sm text-gray-600"}>
                            Mady by{' '}
                            <Link
                                className={"text-blue-600 hover:underline"}
                                target={"_blank"}
                                to={"https://github.com/eunji0714"}
                            >
                                Eunji Shin
                            </Link>
                            . All rights reserved.
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;