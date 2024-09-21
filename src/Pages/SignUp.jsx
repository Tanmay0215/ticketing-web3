import { useState } from "react";
import SimpleSlider from "../Components/SignSlider";
import { NavLink } from "react-router-dom";
import { Container } from "postcss";

const SignUp=()=>{
    const [data,setdata] = useState({name : "" , contact : "", email : "" , password : ""});
    const changeHandler = (e)=>{
        const {name,value} = e.target
        setdata((prev)=>({
            ...prev,
            [name] : value,
        }))
        // console.log(data)/
    }
    const submitHandler = () => {
        console.log(data)
        setdata({name : "" , contact : "", email : "" , password : ""});
    }
    return(
        <div className="overflow-hidden bg-Siuu w-screen h-screen flex justify-center items-center">
            <div className="w-1/2 my-auto h-screen">
            <SimpleSlider/>
            </div>
            <div className="w-1/2">
            <div className="flex flex-col items-center">
                <div className="text-3xl font-bold">Hi , Welcome Back!</div>
                <form className="w-60 flex flex-col gap-y-8 mt-10">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-xl">Name</label>
                    <input type ='text' name = "name" value = {data.name} onChange={changeHandler} id="name" className="h-8 border-2 rounded-lg"></input>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="email" className="text-xl">Email</label>
                    <input type ='email' name = "email" value = {data.email} onChange={changeHandler} id="email" className="h-8 border-2 rounded-lg"></input>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="contact" className="text-xl">Contact</label>
                    <input type ='number' name = "contact" value = {data.contact} onChange={changeHandler} id="contact" className="h-8 border-2 rounded-lg"></input>
                    </div>
                    <div className="flex flex-col">
                            <label htmlFor="password" className="text-xl">Password</label>
                            <input type="password" name="password" value={data.password} onChange={changeHandler} id="password" required className="h-8 border-2 rounded-lg"/>
                        </div>
                    <div className="flex justify-center items-center h-10 bg-blue-600 rounded-md"> 
                    <button onClick={submitHandler} className="text-xl">Login</button>
                    </div>
                </form>
                <div className="mt-4">Already have an account? <NavLink to='/login' className="text-blue-600">Login</NavLink></div>
            </div>
            </div>
        </div>
    )
}

export default SignUp;