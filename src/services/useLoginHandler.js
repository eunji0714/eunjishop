import {useMutation, useQueryClient} from "@tanstack/react-query";
import shopapi from "./api";

const loginHandler = async (userInput) => {
    const {data} = await shopapi.post("/auth/login", userInput)
    return data.data
}

const useLoginHandler = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (userInput) => loginHandler(userInput),
            // shopapi
            //     .post("/auth/login", {
            //         email : userInput.email,
            //         password : userInput.password
            //     })
            //     .then(res => res.data.data),
        onSuccess: (data) => {
            localStorage.setItem("token",data.token)
            queryClient.invalidateQueries({
                queryKey: ['userInfo']
            })
        }
    })
}

export default useLoginHandler;