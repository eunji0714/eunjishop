import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm, useFormContext} from "react-hook-form";
import signupHandler from "../services/useSignupHandler";

const SignUp = () => {

    const navigate = useNavigate()

    //hook-form
    const {register, watch, handleSubmit, setValue} = useForm()

    //use-query
    const {isError, mutateAsync} = signupHandler()

    const agreeData = [

        {
            "title" : "Agree Marketing",
            "target" : "isMarketingAgree"
        },
        {
            "title" : "Agree Personal Info",
            "target" : "isPersonalInfoAgree"
        }
    ]
    const handleSelectAll = (e) => {
        if (e.currentTarget.checked) { // selectAll 체크박스가 체크되면
            agreeData.forEach((item) => {
                setValue(`${item.target}`, true); // 모든 체크박스의 value를 true로
            });
        } else { // selectAll 체크박스가 체크해제되면
            agreeData.forEach((item) => {
                setValue(`${item.target}`, false); // 모든 체크박스의 value를 false로
            });
        }
    };

    //email 중복확인 안됨..
    const checkEmail = (data) => {
        const {email} = data
        console.log("-------", email)
    }

    useEffect(
        () => {
            if (agreeData.every((item) => watch(`${item.target}`) === true)) {
                setValue("selectAll", true);
            } else {
                setValue("selectAll", false);
            }
        },
        agreeData.map((item) => watch(`${item.target}`))
    );



    const onSignuphandler = async(data) => {
        const {email, username, password, confirmpw, isMarketingAgree, isPersonalInfoAgree} = data
        if( password !== confirmpw ){
            alert("Password do not match.")
        }

        const userInput = {
            email, username, password, isPersonalInfoAgree, isMarketingAgree
        }

        await mutateAsync(userInput)
        navigate("/login")
    }


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Get Started
                </h2>
                <p className={"text-sm text-center text-gray-500"}>Create your accout now.</p>
            </div>

            <div className="mt-9 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-3">
                    <div>
                        <div className={"flex justify-between"}>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <button
                                className={`border opacity-50 border-gray-400 rounded px-1.5 text-xs  hover:bg-gray-300`}
                                onClick={handleSubmit(checkEmail)}
                            >
                                중복확인
                            </button>
                        </div>
                        <div className="mt-1">
                            <input
                                type="email"
                                autoComplete="email"
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                                {...register("email")}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900">
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                required
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("username")}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>

                        </div>
                        <div className="mt-1">
                            <input
                                type="password"
                                autoComplete="current-password"
                                required
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("password")}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Password Confirm
                            </label>
                        </div>
                        <div className="mt-1">
                            <input
                                type="password"
                                autoComplete="current-password"
                                required
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register("confirmpw")}
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <input
                                type={"checkbox"}
                                {...register("selectAll")}
                                onChange={handleSelectAll}
                            />
                            <label className={"align-top font-bold leading-6 text-gray-900 text-red-400 text-sm"}> All Agree</label>

                            <div className={"flex"}>
                                {agreeData.map((item)=> (
                                    <div className={"mr-10"}>
                                        <input {...register(`${item.target}`)} key={`${item.target}`} type={"checkbox"} />
                                        <label className={"text-sm align-top font-medium leading-6 text-gray-900"}> {item.title}</label>

                                    </div>
                                ))}
                            </div>

                        </div>


                    </div>

                    <div>
                        <button
                            className="mt-6 flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                            onClick={handleSubmit(onSignuphandler)}
                        >
                            Create account
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account? {' '}
                    <Link to={'/login'} className="font-semibold leading-6 text-black hover:text-gray-500">
                        Log In
                    </Link>

                </p>

            </div>
        </div>
    );

};

export default SignUp;