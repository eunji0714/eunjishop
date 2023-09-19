import React, {useEffect, useState} from 'react';
import async from "async";
import shopapi from "../services/api";
import axios from "axios";

const NewProduct = () => {


    const [brand, setBrand] = useState({
        name : "",
        desc : "",
        brandImg : "",
    })

    const [product, setProduct] = useState({
        name : "",
        price : null,
        brand : "",
        stock : null,
        desc1 : "",
        desc2 : "",
        productImg1 : "",
    })
    console.log(product)
    const [brands, setBrands] = useState([])
    // const [name, setName] = useState("")
    console.log("--", brands)
    const handleChange = async(e) => {
        const {name, value} = e.target
        setProduct((product) => ({...product, [name]: value}))
    }

    const getBrands = async() => {
        try{
            const {data, status} = await shopapi.get("/brand")
            console.log(data, status)

            if(status === 200){
                setBrands(data.data)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const {data, status} = await shopapi.post("/product", product)
            if(status === 201){
                alert("제품이 등록되었습니다.")
            }
        }catch(err){
            console.log(err.message)
        }

    }

    useEffect(()=>{
        getBrands()
    },[])



    const handleBrandChange = async(e) => {
        e.preventDefault()
        const {name, value} = e.target
        setBrand((product) => ({...brand, [name]: value}))
    }

    const handleBrandSubmit = async(e) => {
        e.preventDefault()   //무한반복 방지
        try{
            const {data, status} = await shopapi.post("/brand", brand)
            if(status === 201){
                alert("브랜드가 등록되었습니다.")
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return (
        <div className={"mb-32 mx-80 mt-12"}>
            <section className={"w-full text-center mb-14"}>
                <h2 className={"my-4 text-2xl font-bold"}>새로운 브랜드 등록</h2>
                <form className={"flex flex-col px-12"} onSubmit={handleBrandSubmit}>
                    <input
                        type={"text"}
                        name={"brandImg"}
                        placeholder={"브랜드이미지"}
                        required
                        value={brand.brandImg}
                        onChange={handleBrandChange}
                        className={"border p-1 pl-2 rounded mb-1"}
                    />
                    <input
                        type={"text"}
                        name={"name"}
                        placeholder={"브랜드명"}
                        required
                        // onChange={(e)=> setName(e.target.value)}
                        value={brand.name}
                        onChange={handleBrandChange}
                        className={"border p-1 pl-2 rounded mb-1"}
                    />
                    <input
                        type={"text"}
                        name={"desc"}
                        placeholder={"브랜드 설명"}
                        required
                        value={brand.desc}
                        onChange={handleBrandChange}
                        className={"border  p-1 pl-2 rounded mb-3"}
                    />
                    <button className={"border mx-64 rounded-3xl py-1.5 bg-gray-200 hover:bg-gray-800 hover:text-white border-black"}>브랜드 등록하기</button>
                </form>

            </section>
            <section className={"w-full text-center "}>
                <h2 className={"my-4 text-2xl font-bold"}>새로운 제품 등록</h2>
                <form className={"flex flex-col px-12"} onSubmit={handleSubmit}>
                    <input
                        type={"text"}
                        name={"productImg1"}
                        placeholder={"제품이미지"}
                        required
                        value={product.productImg1}
                        onChange={handleChange}
                        className={"border p-1 pl-2 rounded mb-1"}
                    />
                    <input
                        type={"text"}
                        name={"name"}
                        placeholder={"제품명"}
                        required
                        // onChange={(e)=> setName(e.target.value)}
                        value={product.name}
                        onChange={handleChange}
                        className={"border p-1 pl-2 rounded mb-1"}
                    />
                    <input
                        type={"number"}
                        name={"price"}
                        placeholder={"제품가격"}
                        required
                        value={product.price}
                        onChange={handleChange}
                        className={"border p-1 pl-2 rounded mb-1"}
                    />
                    <select className="text-gray-400 pl-1 w150 border p-1 pl-2 rounded mb-1" onChange={(e) => setProduct({...product, brand: e.target.value })}>
                        <option>브랜드 선택</option>
                        {brands?.map((brand, index) => (
                            <option value={brand.id} key={index}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                    <input
                        type={"number"}
                        name={"stock"}
                        placeholder={"재고수량"}
                        required
                        value={product.stock}
                        onChange={handleChange}
                        className={"border p-1 pl-2 rounded mb-1"}
                    />
                    <input
                        type={"text"}
                        name={"desc1"}
                        placeholder={"모델명"}
                        required
                        value={product.desc1}
                        onChange={handleChange}
                        className={"border p-1 pl-2 rounded mb-1"}
                    />
                    <input
                        type={"text"}
                        name={"desc2"}
                        placeholder={"출시일"}
                        required
                        value={product.desc2}
                        onChange={handleChange}
                        className={"border p-1 pl-2 rounded mb-3"}
                    />
                    <button className={"border mx-64 rounded-3xl py-1.5 bg-gray-200 hover:bg-gray-800 hover:text-white border-black"}>제품 등록하기</button>
                </form>

            </section>
        </div>


);
};

export default NewProduct;