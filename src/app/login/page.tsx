"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";





export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]); 

    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? "Processing" : "Login"}</h1>
        <hr/>
    {/*left section*/}
    <section className='flex-1 flex items-center justify-center relative'>
   
    <div className='absolute bottom-30 left-400 hover:scale-150 ease-in-out'>
        <Image
         src={sushiImage}
         alt='Logo'
         width={200}
         height={679}
         />
    </div>
    <h1 className='text-1.5xl text-white font-bold transition-transform transform absolute top-5 left-50%'>
        Welcome to Login Page
    </h1>
    
    </section>
    {/* {right section} */}
    <section className='flex-1 flex items-center justify-center relative md:item-start'>
        <div className='p-6 md:p-12 rounded-lg shadow-xl w-full max-w-lg bg-rgb(129, 140, 248) absolute right-50%'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className='mt-10 text-center text-2x1 font-bold leading-9 tracking-tight text-gray-900'>
                    Sign in to your account!
                </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form className="space-y-6 action='#"method="POST">
                    <div>
                        <label htmlFor='email' className='block-text-sm font-medium leading-6 text-gray-900'>
                            User Id
                        </label>
                        <label>
                        <div className='mt-2'> 
                            <TextField
                                id='email'
                                name='email'
                                value={user.email}
                                onChange={(f)=>setUser({...user,email:f.target.value})}
                                autoComplete='email'
                                type='email'
                                required
                                placeholder='Enter User Id'
                                className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </label>
                    </div>
                    <div>
                        <div className=''>
                            <label  htmlFor='password' className='block-text-sm font-medium leading-6 text-gray-900'>
                                Password
                            </label>
                            <label>   
                            <div className='mt-2'>
                                <TextField
                                   id='password'
                                   name='password'
                                   value={user.password}
                                   onChange={(f)=>setUser({...user,password:f.target.value})}
                                   autoComplete='current-password'
                                   type='password'
                                   placeholder='Enter password'
                                   required
                                   className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                   />
                                </div>
                                <div className='mt-2 text-sm flex items-center justify-between '>
                                Don't have an account?
                                <Link href='/signup' passHref={true} legacyBehavior={true}>
                                    {/* <a className='font-semibold leading-6 text-indigo-900 hover:text-indigo-200 '> */}
                                   Create a new account
                                {/* </a> */}
                               </Link>
                            </div>
                            </label>
                        </div>                              
                    </div>
                    <div>
                        <button 
                                onClick={onLogin}
                                type="submit"
                                className="flex w-full justify-center rounded-mg bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</main>
    )

}