import React, {useState} from 'react';
import async from "async";
import shopapi from "../services/api";

const NewProduct = () => {

    const [product, setProduct] = useState({
        name : "",
        price : 0,
        brand : "",
        stock : 0,
        desc1 : "",
        desc2 : "",
        productImg : "",
    })
    console.log(product)
    // const [name, setName] = useState("")

    const handleChange = async(e) => {
        const {name, value} = e.target
        setProduct((product) => ({...product, [name]: value}))
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

    return (
        <section className={"w-full text-center"}>
            <h2 className={"my-4 text-2xl font-bold"}>새로운 제품 등록</h2>
            <form className={"flex flex-col px-12"} onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    name={"productImg"}
                    placeholder={"제품이미지"}
                    required
                    value={product.productImg}
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
                <input
                    type={"text"}
                    name={"brand"}
                    placeholder={"브랜드"}
                    required
                    value={product.brand}
                    onChange={handleChange}
                />
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