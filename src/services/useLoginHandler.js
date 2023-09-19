import {useMutation, useQueryClient} from "@tanstack/react-query";
import shopapi from "./api";
import {useAuth} from "../context/AuthContext";

const loginHandler = async (userInput) => {
    const {data} = await shopapi.post("/auth/login", userInput)
    return data.data
}

const useLoginHandler = () => {
    const queryClient = useQueryClient()
    const {setUser, setIsAuthed} = useAuth()



    return useMutation({
        mutationFn: (userInput) => loginHandler(userInput),
        onSuccess: (data) => {
            console.log("+++data",data)
            localStorage.setItem("user", JSON.stringify(data.user))
            localStorage.setItem("token", data.token)
            shopapi.defaults.headers.Authorization = `Bearer ${data.token}`

            setUser(data.user)
            setIsAuthed(true)
            queryClient.invalidateQueries({
                queryKey: ['userInfo']
            })
        }
    })
}

export default useLoginHandler;