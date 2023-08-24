import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FiShoppingBag} from "react-icons/fi";
import {BsFillPencilFill} from "react-icons/bs";
import User from "./User";



const NavBar = () => {

    const [user, setUser] = useState({})

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
                {user && <User {...user} />}
                <Link to={"/login"}>
                    {user && <button>LogIn</button>}
                </Link>
                {!user && <button>LogOut</button>}


            </nav>

        </header>
    );
};

export default NavBar;