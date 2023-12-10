"use client"
import { Dialog, DialogContent,DialogTrigger } from '@/components/ui/dialog'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface Props {
    checked: boolean
    setIsChecked: Dispatch<SetStateAction<boolean>>
}


const Login = ({setIsChecked}: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const {refresh} = useRouter()
  const [login, setLogin] = useState(true)  
  const [register, setRegister] = useState(false)

  const [registering,setRegistering] = useState(false)
  const [loginin,setLoginin] = useState(false)  

  const [firstName,setFirstName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")  

  const triggerClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

 const loginUser = async (e:React.FormEvent) => {
    e.preventDefault()
    setLoginin(true)
    await signIn("credentials",{
        redirect:false,
        email:email, 
        password:password
    }).then((callback) => {
        if(callback?.ok) {
            refresh()
            setEmail("")
            setPassword("")
            setLoginin(false)
            toast.success("Logged in successfully")
            triggerClick()
        }
        if(callback?.error) {
            // setEmail("")
            // setPassword("")
            setLoginin(false)
            toast.error(callback?.error)
        }
    })
 }


  const registerUser = async (e:React.FormEvent) => {
    e.preventDefault()
    setRegistering(true)
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({firstName,email,password}),
    });
    if(response.status === 201) {
        setFirstName("")
        setEmail("")
        setPassword("")
        setRegister(false)
        setLogin(true)
        setRegistering(false)
        toast.success("User created successfully")
    }
    else if(response.status === 409) {
        setFirstName("")
        setEmail("")
        setPassword("")
        setRegistering(false)
        toast.error("User already exists!")
    } else {
        setRegistering(false)
        toast.error("Something went wrong!")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button ref={buttonRef} onClick={() => {
            setLogin(true)
            setRegister(false)
            setIsChecked(false)
        }} className='bg-[rgb(58,94,206)] text-white w-28 text-xs font-medium rounded-full py-2 px-4'>Sign In</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex items-center border  h-[480px] ">
        {login && <form onSubmit={loginUser} className='flex w-[100%] flex-col gap-4'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-bold'>Login to your Acount</h1>
                <p className='text-slate-600 text-xs'>Start right now with us</p>
            </div>
            <div>
                <p className='text-slate-500 text-sm'>Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' required placeholder='Your email' className='outline-none w-full rounded-sm border text-[17px] py-3 px-2' />
            </div>
            <div>
                <p className='text-slate-500 text-sm'>Password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='********' required className='outline-none w-full rounded-sm border text-[17px] py-3 px-2' />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    <input type='checkbox' />
                    <button type='button' className='text-xs'>Remember me</button>
                </div>
                <button type='button' className='text-xs'>Forgot password?</button>
            </div>
            <button type='submit' className={`w-full py-3 ${loginin ? "pointer-events-none opacity-30" : ""} text-white font-medium text-sm  bg-[rgb(58,94,206)] rounded-sm`}>Sign In</button>
            <div className='flex items-center justify-between'>
                <span className='text-slate-500 text-sm'>Dont&apos;t have an account?</span>
                <button type='button' onClick={() => {
                    setRegister(true)
                    setLogin(false)
                }} className='text-xs border py-2 px-5'>Sign up</button>
            </div>
        </form>}
        {register && <form onSubmit={registerUser} className='flex flex-col w-[100%] gap-4'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-bold'>Create an Acount</h1>
                <p className='text-slate-600 text-xs'>Start right now with us</p>
            </div>
            <div>
                <p className='text-slate-500 text-sm'>First Name</p>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type='text' required placeholder='First Name' className='w-full rounded-sm border text-[17px] py-3 px-2' />
            </div>
            <div>
                <p className='text-slate-500 text-sm'>Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' required placeholder='Your email' className='w-full rounded-sm border text-[17px] py-3 px-2' />
            </div>
            <div>
                <p className='text-slate-500 text-sm'>Password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='********' required className='w-full rounded-sm border text-[17px] py-3 px-2' />
            </div>
            <button className={`w-full py-3 text-white ${registering ? 'pointer-events-none opacity-30' : ''} font-medium text-sm  bg-[rgb(58,94,206)] rounded-sm`}>
                {!registering ? <span>Sign Up</span> : <span>Loading...</span>}
            </button>
            <div className='flex items-center justify-between'>
                <span className='text-slate-500 text-sm'>Already have an account?</span>
                <button onClick={() => {
                    setLogin(true)
                    setRegister(false)
                }} className='text-xs border py-2 px-5'>Sign In</button>
            </div>
        </form>}
      </DialogContent>
    </Dialog>
  )
}

export default Login