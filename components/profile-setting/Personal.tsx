"use client"
import { DefaultSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { ZodType, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useRouter } from 'next/navigation'
import axios, { AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { User } from '@/index'
import toast from 'react-hot-toast'
import { AiOutlineUpload } from 'react-icons/ai'
import { useUploadThing } from '@/utils/uploadthing'

type Props = {}


declare module "next-auth" {
    interface Session {
      user: {
        id: string | undefined | null;
        firstName?: string;
        lastName?: string;
        phoneNumber?: string;
        email?: string;
        bio?: string;
        livesIn?: string;
        language?: string;
        profilePhoto?: string; // Add this line
        coverPhoto?: string;   // Add this line
      } & DefaultSession["user"];
    }
  }
  



type EditData = {
    firstName?: String;
    lastName?: String;
    phoneNumber?: String;
    email?: String;
    bio?: String;
    livesIn?: String;
    language?: String
}

// firstName,lastName,phoneNumber,Email,bio,livesIn,Language


const Personal = (props: Props) => {
    const {id} = useParams()   
    const {push} = useRouter()
    const [loading,setLoading] = useState(false)
    const { data: session, status } = useSession()
    const [submitting,setSubmitting] = useState(false)
    const [photoImage , setPhotoImage] = useState<string | undefined>("")
    const [coverImage , setCoverImage] = useState<string | undefined>("") 
    const [uploadingProfilePicture , setUploadingProfilePicture] = useState(false)
    const [uploadingCoverPicture , setUploadingCoverPicture] = useState(false)
    const [thisIsTheLink ,setThisIsTheLink] = useState<string | undefined>("")

    const { data,refetch } = useQuery({    
        queryKey: [`profile${id}`],
        queryFn: () =>
          axios
            .get(`/api/user/${id}`)
            .then((res:AxiosResponse<User>) => res.data),
    });

    useEffect (() => {
        if(uploadingProfilePicture) {
          setPhotoImage(thisIsTheLink)
        }
        if(uploadingCoverPicture) {
          setCoverImage(thisIsTheLink)
        }
        setUploadingProfilePicture(false)
        setUploadingCoverPicture(false)
    },[thisIsTheLink])

    
    const { startUpload } =  useUploadThing("profilePhotoUpload",
      { 
      onClientUploadComplete:  async (res) => {
            setThisIsTheLink(res[0]?.url)
      },
      onUploadError: () => {
        toast.error("Error Updating file, ReUpload")
        setUploadingProfilePicture(false)
        setUploadingCoverPicture(false)
      },
    });
  
  



    const schema:ZodType<EditData> = z.object({
      firstName:z.string(),
      lastName:z.string(),
      phoneNumber:z.string(),
      email:z.string().email(),
      bio:z.string(),
      livesIn:z.string(),
      language:z.string(),
    })
 

 const {register, handleSubmit, formState:{errors} } = useForm<EditData>({resolver: zodResolver(schema)})
 const submitEditData = async (data:EditData) => {
    try {
        setSubmitting(true)
        const response = await fetch('/api/personalInfo', {
            method: 'PATCH',
            body: JSON.stringify({
                profilePhoto:photoImage,
                coverPhoto:coverImage,
                userId:session?.user?.id,
                firstName:data.firstName,
                lastName:data.lastName,
                phoneNumber:data.phoneNumber,
                email:data.email,
                bio:data.bio,
                livesIn:data.livesIn,
                language:data.language,
            })
        })
        if(response.status == 200){
            refetch()
            toast.success("Successful")
            push(`/profile/${session?.user?.id}`)
        }
        if(response.status == 500) {
            toast.error("Unknown error")
            setSubmitting(false)
        }
      } catch (error) {
          console.log(error)
          setSubmitting(false)
      } finally {
          
      }  
 }





  return (
    <form onSubmit={handleSubmit(submitEditData)} className='flex flex-col mb-10 gap-5'>
        <div className='flex justify-between items-center'>
            <h1 className='text-sm font-black'>Personal Information</h1>
        </div>
        <div>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs font-bold'>First Name</p>
                        <input {...register("firstName")} type='text' className='border p-2 rounded-full w-40  md:w-48 h-9 text-xs' placeholder={data?.firstName}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs font-bold'>Last Name</p>
                        <input {...register("lastName")} type='text' className='border p-2 rounded-full w-40  md:w-48 text-xs' placeholder={data?.lastName ? data.lastName : ""}/>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs font-bold'>Phone Number</p>
                        <input {...register("phoneNumber")} type='text' className='border p-2 rounded-full w-40  md:w-48 h-9 text-xs' placeholder={data?.phoneNumber ? data.phoneNumber.toString() : ""}/>
                        {errors.phoneNumber && <span className="text-[red] text-xs">{errors.phoneNumber.message}</span>}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs font-bold'>Email</p>
                        <input {...register("email")} type='email' className='border p-2 rounded-full w-40  md:w-48 text-xs' placeholder={data?.email}/>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-xs font-bold'>BIO</p>
                    {/* <input  className='border placeholder={session?.user?.email} p-2 rounded-md w-80 md:w-96 text-xs'/> */}
                    <input {...register("bio")} type='text' className='border p-2 rounded-full w-80 md:w-96 text-xs' placeholder={data?.bio ? data.bio : ""} />
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs font-bold'>Lives in</p>
                        <input {...register("livesIn")} type='text' className='border p-2 rounded-full w-40  md:w-48 h-9 text-xs' placeholder={data?.livesIn ? data.livesIn : ""}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs font-bold'>Language</p>
                        <input {...register("language")} type='text' className='border p-2 rounded-full w-40  md:w-48 text-xs' placeholder={data?.language ? data.language : ''}/>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                <div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs font-bold mb-3'>Update profile picture?</p>
                        <input
                          id='upload'
                          type="file"
                          className="hidden border-input placeholder:text-muted-foreground focus-visible:ring-ring  h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                          onChange={async (e) => {
                            setUploadingProfilePicture(true)
                            const file = e.target.files?.[0];
                            if (!file) {
                              toast.error("Retry...")
                              setUploadingProfilePicture(false)
                              return;}
                            await startUpload([file]);
                          }}
                        />
                        {!uploadingProfilePicture && <label className='text-base cursor-pointer font-semibold rounded-md  justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1' htmlFor='upload'>
                          <AiOutlineUpload className='text-xl' /> Upload profile photo
                        </label>}
                        {uploadingProfilePicture && <label className='text-xs pointer-events-none opacity-10 cursor-pointer font-semibold rounded-md  justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1' htmlFor='upload'>
                          <AiOutlineUpload /> Uploading profile photo...
                        </label>}
                    </div>    
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs font-bold mb-3 mt-4'>Update cover picture?</p>
                        <input
                          id='uploadcover'
                          type="file"
                          className="hidden border-input placeholder:text-muted-foreground focus-visible:ring-ring  h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                          onChange={async (e) => {
                            setUploadingCoverPicture(true)
                            const file = e.target.files?.[0];
                            if (!file) {
                              toast.error("Retry...")
                              setUploadingCoverPicture(false)
                              return;}
                            await startUpload([file]);
                          }}
                        />
                        {!uploadingCoverPicture && <label className='text-base cursor-pointer font-semibold rounded-md  justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1' htmlFor='uploadcover'>
                          <AiOutlineUpload className='text-xl' /> Upload cover photo
                        </label>}
                        {uploadingCoverPicture && <label className='text-xs pointer-events-none opacity-10 cursor-pointer font-semibold rounded-md  justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1' htmlFor='uploadcover'>
                          <AiOutlineUpload /> Uploading cover photo...
                        </label>}
                    </div>
                </div>
                    <button className={`rounded-full ${submitting || uploadingCoverPicture || uploadingProfilePicture ? 'pointer-events-none opacity-50' : ''} py-2 px-4 text-xs text-white bg-blue-600`}>Update profile</button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default Personal