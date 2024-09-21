import { useState } from "react";
import SimpleSlider from "../Components/SignSlider";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase";
import toast from "react-hot-toast";
const SignUp=()=>{
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [data,setdata] = useState({name : "" , contact : "", email : "" , password : ""});
    const changeHandler = (e)=>{
        const {name,value} = e.target
        setdata((prev)=>({
            ...prev,
            [name] : value,
        }))
    }
    const submitHandler = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password,data.contact,data.name)
        .then((userCredential) => {
        const user = userCredential.user;
        toast.success('SignUp Successfull')
        navigate('/')
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error("SignUp Unsuccessful")
  });
    setdata({name : "" , contact : "", email : "" , password : ""});
    }
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).
        then(()=>{
            toast.success("SignUp Successfull")
            navigate('/');
        })
        .catch((error) => {
            console.error("Error signing in with Google", error);
            toast.error('SignUp UnSuccessfull')
          });
      };
    return(
        <div className="overflow-hidden bg-Siuu w-screen h-screen flex justify-center items-center">
            <div className="w-1/2 my-auto h-screen">
            <SimpleSlider/>
            </div>
            <div className="w-1/2">
            <div className="flex flex-col items-center">
                <div className="text-3xl font-bold">Create Your Account</div>
                <form className="w-64 flex flex-col gap-y-8 mt-10">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-xl">Name</label>
                    <input type ='text' name = "name" value = {data.name} onChange={changeHandler} id="name" className="h-9 border-2 rounded-lg p-2"></input>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="email" className="text-xl">Email</label>
                    <input type ='email' name = "email" value = {data.email} onChange={changeHandler} id="email" className="h-9 border-2 rounded-lg p-2"></input>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="contact" className="text-xl">Contact No.</label>
                    <input type ='text' name = "contact" value = {data.contact} onChange={changeHandler} id="contact" className="h-9 border-2 rounded-lg p-2"></input>
                    </div>
                    <div className="flex flex-col">
                            <label htmlFor="password" className="text-xl">Password</label>
                            <input type="password" name="password" value={data.password} onChange={changeHandler} id="password" required className="h-9 border-2 rounded-lg p-2"/>
                        </div>
                    <div className="flex justify-center items-center h-12 bg-[#0E64D2] rounded-md cursor-pointer"> 
                    <button onClick={submitHandler} className="text-xl">Create Account</button>
                    </div>
                </form>
                <div className="mt-4">Already have an account? <NavLink to='/login' className="text-blue-600">Login</NavLink></div>
                <div className="flex justify-between items-center border-black border-2 border-opacity-60 py-1 px-3 rounded-md mt-4 gap-x-3 w-64 cursor-pointer" onClick={()=>{signInWithGoogle()}} >
                    <FcGoogle className="h-8 w-8"/>
                    <div><button>SignUp with Google</button></div>
                    <div>
                    </div>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default SignUp;