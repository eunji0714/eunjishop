import React, {useEffect, useState} from 'react';
import async from "async";
import shopapi from "../services/api";
import axios from "axios";

const NewProduct = () => {

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

    return (
        <section className={"w-full text-center"}>
            <h2 className={"my-4 text-2xl font-bold"}>새로운 제품 등록</h2>
            <form className={"flex flex-col px-12"} onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    name={"productImg1"}
                    placeholder={"제품이미지"}
                    required
                    value={product.productImg1}
                    onChange={handleChange}
                />
                <input
                    type={"text"}
                    name={"name"}
                    placeholder={"제품명"}
                    required
                    // onChange={(e)=> setName(e.target.value)}
                    value={product.name}
                    onChange={handleChange}
                />
                <input
                    type={"number"}
                    name={"price"}
                    placeholder={"제품가격"}
                    required
                    value={product.price}
                    onChange={handleChange}
                />
                <select className="w150" onChange={(e) => setProduct({...product, brand: e.target.value })}>
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
                />
                <input
                    type={"text"}
                    name={"desc1"}
                    placeholder={"모델명"}
                    required
                    value={product.desc1}
                    onChange={handleChange}
                />
                <input
                    type={"text"}
                    name={"desc2"}
                    placeholder={"출시일"}
                    required
                    value={product.desc2}
                    onChange={handleChange}
                />
                <button>제품 등록하기</button>
            </form>

        </section>
    );
};

export default NewProduct;