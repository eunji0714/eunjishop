import React, {useState} from 'react';
import DesktopNav from "./DesktopNav";
import {classNames} from "../../utils/utils";
import {useNavigate} from "react-router-dom";

const MainNavBar = () => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)


    return (
        <div>
            <DesktopNav
                classNames={classNames}
                setOpen={setOpen}
                navigate={navigate}
            />
        </div>
    );
};

export default MainNavBar;