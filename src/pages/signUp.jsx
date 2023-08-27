import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import shopapi from "../services/api";

const SignUp = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpw, setConfirmpw] = useState("")
    const [isMarketingAgree, setIsMarketingAgree] = useState(false)
    const [isPersonalInfoAgree, setIsPersonalInfoAgree] = useState(false)
    const [agreeCheckbox, setAgreeCheckbox] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(false)
    const onIdCheckhandler = async() => {
       try{
           const userInput = {
               email
           }
           console.log(userInput)
           const {status} = await shopapi.post('user/email', userInput)
           if(status === 201){
               alert("ID is already existed.")
           }
       }catch (err){
           console.log(err.message)
           if(email){
               alert("ID can be used.")
               setBtnDisabled(true)

           }


       }

    }

    const onSignuphandler = async() => {
        try{
            if(password !== confirmpw){
                alert("Password do not match")
            }

            const userInput = {
                email, name, password, confirmpw, isPersonalInfoAgree, isMarketingAgree,
                provider : "local",
                profileImg : ""
            }
            const {status} = await shopapi.post("/auth/signup", userInput)
            if(status === 201){
                navigate("/login")
            }
        }catch(err){
            console.log(err.message)
        }
    }

    const onAgreehandler = (e) => {

        e.preventDefault()

        setIsPersonalInfoAgree(!agreeCheckbox)
        setIsMarketingAgree(!agreeCheckbox)
        console.log(agreeCheckbox)

    }

    useEffect(() => {
        if(!isMarketingAgree || !isPersonalInfoAgree){
            setAgreeCheckbox(false)
        }
        if(isMarketingAgree && isPersonalInfoAgree){
            setAgreeCheckbox(true)
        }


    }, [isMarketingAgree, isPersonalInfoAgree])



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
                                className={`border opacity-50 border-gray-400 rounded px-1.5 text-xs ${btnDisabled ? `bg-gray-300` : null} hover:bg-gray-300`}
                                onClick={onIdCheckhandler}
                                disabled={btnDisabled}
                            >
                                중복확인
                            </button>
                        </div>
                        <div className="mt-1">
                            <input
                                type="email"
                                value={email}
                                autoComplete="email"
                                required
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={e=> setEmail(e.target.value)}
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
                                value={name}
                                required
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={e=> setName(e.target.value)}
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
                                value={password}
                                autoComplete="current-password"
                                required
                                onChange={e=> setPassword(e.target.value)}
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                value={confirmpw}
                                autoComplete="current-password"
                                required
                                onChange={e=> setConfirmpw(e.target.value)}
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className={"flex justify-between"}>
                            <div className={"flex"}>
                                <div className={"mr-3"}>
                                    <input
                                        type={"checkbox"}
                                        value={isMarketingAgree}
                                        onChange={e=> setIsMarketingAgree(e.target.checked)}
                                        checked={isMarketingAgree}
                                    />
                                    <label className={"text-sm align-top font-medium leading-6 text-gray-900"}> Agree Marketing</label>
                                </div>
                                <div>
                                    <input
                                        type={"checkbox"}
                                        value={isPersonalInfoAgree}
                                        onChange={e=> setIsPersonalInfoAgree(e.target.checked)}
                                        checked={isPersonalInfoAgree}
                                    />
                                    <label className={"text-sm align-top font-medium leading-6 text-gray-900"}> Agree Personal Info</label>
                                </div>
                            </div>
                            <div>
                                <input
                                    type={"checkbox"}
                                    value={agreeCheckbox}
                                    onChange={onAgreehandler}
                                    checked={agreeCheckbox}

                                />
                                <label className={"text-red-400 text-sm align-top font-medium leading-6 text-gray-900"}> All agree</label>
                            </div>
                        </div>


                    </div>

                    <div>
                        <button
                            className="mt-6 flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                            onClick={onSignuphandler}
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