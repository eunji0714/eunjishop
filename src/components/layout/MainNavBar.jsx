import React, {useEffect, useState} from 'react';
import DesktopNav from "./DesktopNav";
import {classNames} from "../../utils/utils";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

const MainNavBar = () => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const {user, isAuthed} = useAuth()
    const userdata = user ?? null
    // useEffect(() => {
    //     if(user){
    //         navigate("/")
    //     }
    // },[])
    return (
        <div>

            <DesktopNav
                classNames={classNames}
                setOpen={setOpen}
                navigate={navigate}
                // isAdmin={user}
                // userData={user}
            />
        </div>
    );
};

export default MainNavBar;