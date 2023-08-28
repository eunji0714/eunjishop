import {useQuery} from "@tanstack/react-query";
import shopapi from "./api";

const fetchProducts = async() => {
    const {data} = await shopapi.get("/product")
    return data.data
}

const useFetchProducts = () =>
    useQuery(["products"], () => fetchProducts(), {
        keepPreviousData : true
    })

export {useFetchProducts}
