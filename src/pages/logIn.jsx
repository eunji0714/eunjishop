import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import loginHandler from "../services/useLoginHandler";
import Loading from "../components/Loading";
import {EMAIL_REGEX} from "../data/Auth/authData";
import AuthImageContainter from "../components/ui/AuthImageContainter";

const LogIn = () => {

    const navigate = useNavigate()

    // hook-form
    const {
        register,
        handleSubmit,
        formState: {isSubmitting, isDirty, errors},
        setError
    } = useForm()

    //use-query
    const {isLoading,isError, mutateAsync} = loginHandler()

    const onLoginhandler = async(userInput) => {
        console.log(userInput)
        await  mutateAsync(userInput)
        // await localStorage.setItem("token", JSON.stringify(data.token))
        navigate("/")
    }

    return (

        <section className={"m-auto grid min-h-[calc(100vh-65px)] w-full grid-cols-10"}>
            {isLoading && <Loading /> }
            <div className={"col-span-10 flex h-full w-full grow flex-col items-center justify-center bg-white shadow-slate-50 drop-shadow-md lg:col-span-4"}>
                <div className={"mb-14 flex-col items-center text-center"}>
                    <h2 className={"mb-2 text-3xl font-bold"}>
                        Hello again, eunji shop
                    </h2>
                    <p className={"text-slate-500"}>
                        Welcome back! Please enter you detail
                    </p>
                </div>
                <div className={"flex w-full flex-col items-center"}>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    required
                                    {...register("email")}
                                    // value={email}
                                    // onChange={e => setEmail(e.target.value)}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-black hover:text-gray-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name={"password"}
                                    autoComplete="current-password"
                                    required
                                    {...register("password")}
                                    // value={password}
                                    // onChange={e=> setPassword(e.target.value)}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleSubmit(onLoginhandler)}
                                className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <AuthImageContainter
                image={"https://img.freepik.com/free-photo/3d-render-smartphone-with-hand-fill-online-survey_107791-15837.jpg?size=626&ext=jpg"}
                firstText={"Eunji shop for Smart shopper"}
                secondText={"Login Here"}
            />
        </section>
        // <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        //         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        //             Sign in to your account
        //         </h2>
        //     </div>
        //
        //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        //
        //         <p className="mt-10 text-center text-sm text-gray-500">
        //             Don't have an account yet? {' '}
        //             <Link to={'/signup'} className="font-semibold leading-6 text-black hover:text-gray-500">
        //                 Sign up
        //             </Link>
        //
        //         </p>
        //     </div>
        // </div>
    );
};

export default LogIn;