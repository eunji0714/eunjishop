import React, {useState} from 'react';
import shopapi from "../services/api";

const NewBrand = () => {

    const [brand, setBrand] = useState({
        name : "",
        desc : "",
        brandImg : "",
    })
    // const [name, setName] = useState("")

    const handleChange = async(e) => {
        const {name, value} = e.target
        setBrand((product) => ({...brand, [name]: value}))
    }

    const handleSubmit = async(e) => {
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
        <section className={"w-full text-center"}>
            <h2 className={"my-4 text-2xl font-bold"}>새로운 브랜드 등록</h2>
            <form className={"flex flex-col px-12"} onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    name={"brandImg"}
                    placeholder={"브랜드이미지"}
                    required
                    value={brand.brandImg}
                    onChange={handleChange}
                />
                <input
                    type={"text"}
                    name={"name"}
                    placeholder={"브랜드명"}
                    required
                    // onChange={(e)=> setName(e.target.value)}
                    value={brand.name}
                    onChange={handleChange}
                />
                <input
                    type={"text"}
                    name={"desc"}
                    placeholder={"브랜드 설명"}
                    required
                    value={brand.desc}
                    onChange={handleChange}
                />
                <button>브랜드 등록하기</button>
            </form>

        </section>
    );
};

export default NewBrand;