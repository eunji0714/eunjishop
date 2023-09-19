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
            className={`mt-24 mt-auto border-t border-gray-200 ${
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                </svg>

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