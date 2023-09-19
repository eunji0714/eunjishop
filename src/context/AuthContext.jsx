import {createContext, useContext, useEffect, useState} from "react";
import shopapi from "../services/api";

const initialValue = {
    isAuthed : false,
    setIsAuthed: () => {},
    user : null,
    setUser : () => {}
}

const AuthContext = createContext(initialValue)

export const AuthProvider= ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthed, setIsAuthed] = useState(false)
    console.log("user", user)
    console.log("isAuthed", isAuthed)

    useEffect(() => {
        const storagedUser = localStorage.getItem("user")
        const storagedToken = localStorage.getItem("token")
        //새로고침하면 사라지기때문에 localStorage에 저장
        if(storagedToken && storagedUser) {
            setUser(JSON.parse(storagedUser))
            shopapi.defaults.headers.Authorization = `Bearer ${storagedToken}`
        }
    },[])
    return(
        <AuthContext.Provider
            value={{isAuthed, user, setUser, setIsAuthed}} //로그인 여부
        >
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth(){
    const context = useContext(AuthContext)

    return context
}