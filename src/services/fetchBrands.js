import {useQuery} from "@tanstack/react-query";
import shopapi from "./api";

const fetchBrands = async() => {
    const {data} = await shopapi.get("/brand")
    return data.data
}

const useFetchBrands = () =>
    useQuery(["brands"], () => fetchBrands(), {
        keepPreviousData : true
    })

export {useFetchBrands}
