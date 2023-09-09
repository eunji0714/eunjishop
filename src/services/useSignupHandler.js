import {useMutation, useQueryClient} from "@tanstack/react-query";
import shopapi from "./api";

const signupHandler = async (userInput) => {
    const {data} = await shopapi.post("/auth/signup", userInput)
    console.log(data.data)
    return data.data
}

const useSignupHandler = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (userInput) => signupHandler(userInput),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['userInfo']
            })
        }
    })
}

export default useSignupHandler;