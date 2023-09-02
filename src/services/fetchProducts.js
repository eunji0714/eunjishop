import {useQuery} from "@tanstack/react-query";
import shopapi from "./api";

const fetchProducts = async() => {
    const {data} = await shopapi.get("/product")
    return data.data
}
const fetchProductById = async(id) => {
    const {data} = await shopapi.get(`/product/${id}`)
    return data.data
}

const useFetchProducts = () =>
    useQuery(["products"], () => fetchProducts(), {
        keepPreviousData : true,
        // select : (products) => products.filter(product => product.brand.includes(filter.name))
    })

const useFetchProductById = (id) =>
    useQuery(["product", id], () => fetchProductById(id))

export {useFetchProducts, useFetchProductById}
