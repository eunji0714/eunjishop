import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FiShoppingBag} from "react-icons/fi";
import {BsFillPencilFill} from "react-icons/bs";
import User from "./User";
import axios from "axios";
import {LazyLoadImage} from "react-lazy-load-image-component";



const NavBar = () => {

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
    return (
        <header className={"text-white p-10 bg-black flex justify-between border-b border-grey-300 "}>
            <Link to={"/"} className={"flex items-center text-4xl"}>
                <FiShoppingBag className={"mr-2"}/>
                <h1 className={"text-2xl font-bold"}>eunjishop__</h1>
            </Link>
            <nav className={"flex items-center gap-4 font-semibold"}>
                <Link to={"/products"}>Products</Link>
                <Link to={"/carts"}>Carts</Link>
                <Link to={"/products/new"} className={"text-2xl"}>
                    <BsFillPencilFill />
                </Link>
                { isLoggedIn
                    ? (
                        <div className={"group relative text-base sm:text-sm"}>
                            <div className={"w-1/5 overflow-hidden rounded-full bg-gray-100 "}>
                                <Link to={"/"}>
                                    <LazyLoadImage
                                        src={user.profileImg}
                                        alt={user.name}
                                        // className={"object-cover object-center "}
                                    />
                                    {/*<button onClick={logoutHandler}>*/}
                                    {/*    LogOut*/}
                                    {/*</button>*/}
                                </Link>
                            </div>
                        </div>

                    )
                    : (

                         <Link to={"/login"}>
                             <button>LogIn</button>
                        </Link>
                )

                }



            </nav>

        </header>
    );
};

export default NavBar;