import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {FiShoppingBag} from "react-icons/fi";
import {BsFillPencilFill} from "react-icons/bs";
import User from "./User";
import axios from "axios";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useTranslation} from "react-i18next";
import i18n from "i18next";


const NavBar = () => {

    //다국어지원
    const {t} = useTranslation()
    const languageRef = useRef(null)
    const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    console.log(isLoggedIn)
    const getProfile = async (token) =>{
        try{
            const options = {
                headers : {
                    Authorization : "bearer " + token.toString()
                }
            }
            const {data, status} = await axios.get("http://localhost:8000/api/auth", options)
            if (status === 200){
                setUser(data.data)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    const logoutHandler = () => {
        localStorage.clear()
        alert("로그아웃 완료")
    }

    useEffect(()=> {
        const token = localStorage.getItem("token")
        if(token){
            setIsLoggedIn(true)
            getProfile(token)
        }
    },[])
    console.log(user)

    console.log(user.username)

    //다국어지원
    const handleUserClose = useCallback((e) => {
        if (isLanguageMenuOpen && languageRef.current !== null && !languageRef.current.contains(e.target)) setLanguageMenuOpen(false);
    }, [ isLanguageMenuOpen]);

    useEffect(() => {
        document.addEventListener("click", handleUserClose);
        return () => document.removeEventListener("click", handleUserClose)
    }, [handleUserClose]);

    // 언어 변경하기
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguageMenuOpen(false);
    };
    //다국어지원 끝

    return (
        <header className={"text-white p-10 bg-black flex justify-between border-b border-grey-300 "}>

            <Link to={"/"} className={"flex items-center text-4xl"}>
                <FiShoppingBag className={"mr-2"}/>
                <h1 className={"text-2xl font-bold"}>{t(`header.eunjishop`)}</h1>
            </Link>
            <nav className={"flex items-center gap-4 font-semibold"}>
                <Link to={"/products/new"} className={"text-2xl"}>
                    <BsFillPencilFill />
                </Link>
                <Link to={"/products"}>{t(`header.products`)}</Link>
                <Link to={"/carts"}>{t(`header.carts`)}</Link>

                { isLoggedIn
                    ? (
                        <div className={"group relative text-base"}>
                            <div className={"w-1/5 overflow-hidden rounded-full bg-gray-100 "}>
                                <Link to={"/"}>
                                    <LazyLoadImage
                                        src={user.profileImg}
                                        alt={user.name}
                                        // className={"object-cover object-center "}
                                    />
                                </Link>
                            </div>
                            <button onClick={logoutHandler}>
                                {t(`header.logout`)}
                            </button>
                        </div>


                    )
                    : (

                         <Link to={"/login"}>
                             <button className="text-base font-bold">{t(`header.login`)}</button>
                        </Link>
                )

                }
                <div ref={languageRef}  onClick={() => setLanguageMenuOpen(prev => !prev)}>
                    <button className="header-gnb-nav-link lang-en text-base font-semibold">
                        {t(`header.language`)}
                    </button>
                    {isLanguageMenuOpen && (
                        <ul className="header-gnb-nav-link-dropDown ">
                            <li className="header-gnb-nav-link-dropDown-item font-normal text-gray-400" onClick={() => changeLanguage("ko")}>한국어</li>
                            <li className="header-gnb-nav-link-dropDown-item font-light text-gray-400" onClick={() => changeLanguage("en")}>English</li>
                        </ul>
                    )}
                </div>


            </nav>

        </header>
    );
};

export default NavBar;