"use client"
import React, { useState } from 'react'
import Collapsible from 'react-collapsible';
import { ZodType, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation';
import { AiOutlineCloudUpload, AiOutlineUpload } from 'react-icons/ai';
import "@uploadthing/react/styles.css"
import { useSession } from 'next-auth/react';
import { useUploadThing } from '@/utils/uploadthing';
import toast from 'react-hot-toast';

type FormData = {
  carName?: string;
  location?: string;
  price?: number;
  passengerNo?: number;
  luggageNo?: number;
  trans?: string;
  overview?: string;
  duration?: string;
  size?: string;
}

 


const Car = () => {
  const router = useRouter()
  const [submitting,setSubmitting] = useState(false)
  const { data: session } = useSession()
  const [uploadingImages,setUploadingImages] = useState(false)
  const [linkArray, setThisIsTheLink] = useState<string[]>([]);
  const [isMeetAndGreetChecked,setIsMeetAndGreetChecked ] = useState(false)
  const [isShuttleChecked,setIsShuttleChecked ] = useState(false)
  const [isWifiChecked , setIsWifiChecked] = useState(false)
  const [isFMRadioChecked , setIsFMRadioChecked] = useState(false)
  const [isAirbagChecked , setIsAirbagChecked] = useState(false)
  const [isPowerWindowsChecked , setIsPowerWindowsChecked] = useState(false)
  const [isSensorChecked , setIsSensorChecked] = useState(false)
  const [isSpeedKmChecked , setisSpeedKmChecked] = useState(false)
  const [isSteeringwheelChecked , setIsSteeringwheelChecked] = useState(false)
  const [isSafetyFeaturesChecked , setIsSafetyFeaturesChecked] = useState(false)


  const handleMeetAndGreetChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsMeetAndGreetChecked(isChecked)
  }
  const handleShuttleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsShuttleChecked(isChecked)
  }
  const handleWifiChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsWifiChecked(isChecked)
  }
  const handleFmRadioChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsFMRadioChecked(isChecked)
  }
  const handleAirbagChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsAirbagChecked(isChecked)
  }
  const handlePowerWindowsChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsPowerWindowsChecked(isChecked)
  }
  const handleSensorChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsSensorChecked(isChecked)
  }
  const handleSpeedKmChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setisSpeedKmChecked(isChecked)
  }
  const handleSteeringWheelChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsSteeringwheelChecked(isChecked)
  }
  const handleSafetyFeaturesChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsSafetyFeaturesChecked(isChecked)
  }


  const schema:ZodType<FormData> = z.object({
    carName: z.string().min(2).max(30),
    location:z.string().min(2).max(20),
    price:z.number().min(3).max(10000),
    passengerNo:z.number().min(1).max(10),
    luggageNo:z.number().min(1).max(10),
    trans:z.string().min(2).max(15),
    overview:z.string().min(2).max(5000),
    duration:z.string().min(2).max(15),
    size:z.string().min(2).max(15),
 })
 

    const { startUpload } =  useUploadThing("carPicture",{ 
        onClientUploadComplete:  async (res) => {
              res.map((i) => {
                  setThisIsTheLink(prev => [...prev, i.url])
              }) 
              setUploadingImages(false)
        },
        onUploadError: () => {
          toast.error("Error Updating file, ReUpload")
          setUploadingImages(false)
        },
    });

 const {register, handleSubmit, formState:{errors} } = useForm<FormData>({resolver: zodResolver(schema)})
 
 const submitCarData = async (data:FormData) => {

      try {
        setSubmitting(true)
        const response = await fetch('/api/category/car', {
            method: 'POST',
            body: JSON.stringify({
                image1:linkArray[0],
                image2:linkArray[1],
                image3:linkArray[2],
                category:'car',
                creator:session?.user?.id,
                carName: data.carName,
                location:data?.location
                ? data.location.charAt(0)?.toUpperCase() + data.location.slice(1)
                : undefined,
                price:data.price,
                passengerNo:data.passengerNo,
                luggageNo:data.luggageNo,
                trans:data.trans,
                overview:data.overview,
                duration:data.duration,
                size:data.size,
                meetGreet:isMeetAndGreetChecked ? 'Airport (meet & greet)' : 'false',
                shuttle:isShuttleChecked ? 'Airport (shuttle)' : 'false',
                wifi:isWifiChecked ? 'Wifi' : 'false',
                fmRadio:isFMRadioChecked ? 'FM Radio' : 'false',
                airBag:isAirbagChecked ? 'Airbag' : 'false',
                powerWindows:isPowerWindowsChecked ? 'Power Windows' : 'false',
                sensor:isSensorChecked ? 'Sensor' : 'false',
                speed:isSpeedKmChecked ? 'Speed Km' : 'false',
                steering:isSteeringwheelChecked ? 'Steering Wheel' : 'false',
                safety:isSafetyFeaturesChecked ? 'Safety Features' : 'false',
            })
        })
        console.log(response)
        if(response.ok){
            router.push('/')
            toast.success("Car Successfully added")
        }
        if(response.status == 500) {
            toast.error('Error occured')
            setSubmitting(false)
        }
      } catch (error) {
          toast.error('An unknown error occured')
          setSubmitting(false)
      }
 }

  return (
    <form  onSubmit={handleSubmit(submitCarData)} className='flex items-center mt-5 flex-col mb-10 gap-5'>
        <div className='flex'>
          <div className='w-40 h-40 border flex relative justify-center items-center rounded-l-md overflow-hidden'>
            <img src={linkArray[0]} className='absolute opacity-30' />
            {/* <input type="file" required onChange={handleImage1} className='hidden' id='id1'  accept="image/jpeg, image/png, image/jpg, image/webp" /> */}
            <label className=' z-20' htmlFor='id1'><AiOutlineCloudUpload className='text-2xl' /></label>
          </div>
          <div>
            <div className='w-20 h-20 border flex justify-center relative items-center rounded-l-md overflow-hidden'>
              <img src={linkArray[1]} className='absolute opacity-30' />
              {/* <input type="file" required onChange={handleImage2} className='hidden' id='id2'  accept="image/jpeg, image/png, image/jpg, image/webp" /> */}
              <label className=' z-20' htmlFor='id2'><AiOutlineCloudUpload className='text-2xl' /></label>
            </div>
            <div className='w-20 h-20 border flex justify-center relative items-center rounded-l-md overflow-hidden'>
              <img src={linkArray[2]} className='absolute opacity-30' />
              {/* <input className='hidden' required onChange={handleImage3} type="file" id='id3'  accept="image/jpeg, image/png, image/jpg, image/webp" /> */}
              <label className=' z-20' htmlFor='id3'><AiOutlineCloudUpload className='text-2xl' /></label>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
            <h1 className='text-xl font-black'>Add Car</h1>
        </div>
        <div>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>Car Name</p>
                        <input {...register("carName", {required:true})} type='text' className='border p-2 rounded-full w-80 md:w-96 h-9 text-[17px]' placeholder='car name'/>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>Location</p>
                        <input {...register("location", {required:true})} type='text' className='border p-2 rounded-full w-80 md:w-96 h-9 text-[17px]' placeholder='location'/>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>Price</p>
                        <input {...register("price", {valueAsNumber:true ,required:true})} type='number' className='border p-2 rounded-full w-80 md:w-96 h-9 text-[17px]' placeholder='Price'/>
                        {/* {errors.price && <span className="text-[red] text-xs">{errors.price.message}</span>} */}
                    </div>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>Passenger Seater</p>
                        <input type='number'  {...register("passengerNo", {valueAsNumber:true ,required:true})} className='border p-2 rounded-md w-20 h-9 text-[17px]' placeholder='passenger'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>Luggage No</p>
                        <input type='number'  {...register("luggageNo", {valueAsNumber:true ,required:true})} className='border p-2 rounded-md w-20 h-9 text-[17px]' placeholder='luggage'/>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <input {...register("trans", {required:true})} type="radio" id="manual" name="trans" value="Manual" />
                        <label className='text-sm' htmlFor="manual">Manual</label>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <input {...register("trans", {required:true})} type="radio" id="transmission" name="trans" value="Transmission" />
                        <label className='text-sm' htmlFor="transmission">Transmission</label>
                        {errors.trans && <span className="text-[red] text-xs">{errors.trans.message}</span>}
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm font-bold'>Overview</p>
                    <textarea {...register("overview", {required:true})} className='border h-20 p-2 rounded-md w-80 md:w-96 text-[17px]'></textarea>
                </div>
                <div className='flex gap-5 flex-col'>
                    <div className='rounded-lg p-2 border'>
                        <Collapsible trigger="Car Filters">
                        <div className='flex flex-col gap-1'>
                            <div className='text-xs mt-5 font-medium flex flex-col gap-2'>
                                <h1 className='text-base font-semibold'>Mileage/Kilometres</h1>
                                <div className='flex flex-col gap-1'>
                                  <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("duration", {required:true})} type="radio" id="limited" name="duration" value="limited" />
                                      <label className='text-sm' htmlFor="limited">Limited</label>
                                      
                                    </div>
                                  </div>
                                  <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("duration", {required:true})} type="radio" id="unlimited" name="duration" value="unlimited" />
                                      <label className='text-sm' htmlFor="unlimited">Unlimited</label>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div className='text-xs font-medium flex flex-col gap-2'>
                                <h1 className='text-base font-semibold'>Deals</h1>
                                <div className='flex flex-col gap-1'>
                                  <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input onChange={handleMeetAndGreetChange} type="checkbox" id="airport" name="category" value="airport" />
                                      <label className='text-sm' htmlFor="airport">Airport (meet & greet)</label>
                                    </div>
                                  </div>
                                  <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input onChange={handleShuttleChange} type="checkbox" id="shuttle" name="category" value="shuttle" />
                                      <label className='text-sm' htmlFor="shuttle">Airport (shuttle)</label>
                        
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div className='text-sm flex flex-col font-medium'>
                                <div className='py-2 '>
                                  <h1 className='text-base font-semibold'>Car Category</h1>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex justify-between  items-center'>
                                          <div className='flex gap-1 items-center'>
                                            <input {...register("size", {required:true})} type="radio" id="small" name="size" value="small" />
                                            <label htmlFor="small">Small</label>
                                          </div>
                                    </div>
                                    <div className='flex justify-between gap-5 items-center'>
                                          <div className='flex gap-1 items-center'>
                                            <input {...register("size", {required:true})} type="radio" id="medium" name="size" value="medium" />
                                            <label htmlFor="medium">Medium</label>
                                          </div>
                                    </div>
                                    <div className='flex justify-between gap-5 items-center'>
                                          <div className='flex gap-1 items-center'>
                                            <input {...register("size", {required:true})} type="radio" id="large" name="size" value="large" />
                                            <label htmlFor="large">Large</label>
                                          </div>
                                    </div>
                                    <div className='flex justify-between gap-5 items-center'>
                                          <div className='flex gap-1 items-center'>
                                            <input {...register("size", {required:true})} type="radio" id="premium" name="size" value="premium" />
                                            <label htmlFor="premium">Premium</label>
                                          </div>
                                    </div>
                                    <div className='flex justify-between gap-5 items-center'>
                                          <div className='flex gap-1 items-center'>
                                            <input {...register("size", {required:true})} type="radio" id="suv" name="size" value="suv" />
                                            <label htmlFor="suv">SUV</label>
                                            {errors.size && <span className="text-[red] text-xs">{errors.size.message}</span>}
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Collapsible>
                    </div>
                </div>
                <div className='flex gap-5 flex-col'>
                    <div className='rounded-lg p-2 border'>
                        <Collapsible trigger="Car Amenities">
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleWifiChange} type="checkbox" id="wifi" name="cat" value="Free wifi 24/7" />
                                  <label className='text-sm' htmlFor="wifi">Wifi</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleFmRadioChange} type="checkbox" id="radio" name="category" value="FM Radio" />
                                  <label className='text-sm' htmlFor="radio">FM Radio</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleAirbagChange} type="checkbox" id="airbag" name="category" value="Airbag" />
                                  <label className='text-sm' htmlFor="airbag">Airbag</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handlePowerWindowsChange} type="checkbox" id="power" name="category" value="Power Windows" />
                                  <label className='text-sm' htmlFor="power">Power Windows</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleSensorChange} type="checkbox" id="sensor" name="category" value="Sensor" />
                                  <label className='text-sm' htmlFor="sensor">Sensor</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleSpeedKmChange} type="checkbox" id="speed" name="category" value="Speed Km" />
                                  <label className='text-sm' htmlFor="speed">Speed Km</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleSteeringWheelChange} type="checkbox" id="wheel" name="category" value="Steering wheel" />
                                  <label className='text-sm' htmlFor="wheel">Steering wheel</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleSafetyFeaturesChange} type="checkbox" id="safety" name="category" value="Safety Features" />
                                  <label className='text-sm' htmlFor="safety">Safety Features</label>
                                </div>
                            </div>
                        </div>
                        </Collapsible>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                 {linkArray.length < 3 ? <p className='my-2 text-xs'>You muust upload 3 images , you currently at {linkArray.length} </p> : <span className="text-xs">Succesful</span> } 
                <input
                          id='upload'
                          required
                          type="file"
                          className="hidden border-input placeholder:text-muted-foreground focus-visible:ring-ring  h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                          onChange={async (e) => {
                            setUploadingImages(true)
                            const file = e.target.files?.[0]
                            if (!file) {
                              toast.error("Retry...")
                              setUploadingImages(false)
                              return;}
                            await startUpload([file]);
                          }}
                        />
                        {!uploadingImages && <label className={`text-base${linkArray.length > 2 ? "hidden" : ""} cursor-pointer font-semibold rounded-md  justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1`} htmlFor='upload'>
                          <AiOutlineUpload className='text-xl' /> Upload Hotel Images
                        </label>}
                        {uploadingImages && <label className='text-xs pointer-events-none opacity-10 cursor-pointer font-semibold rounded-md  justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1' htmlFor='upload'>
                          <AiOutlineUpload /> Uploading Hotel Images...
                        </label>}    
                {session?.user?.id && linkArray.length === 3 && <button className={`${submitting ? 'opacity-50 pointer-events-none' : ''}  rounded-full py-2 px-4 text-xs text-white bg-blue-600`}>Add Car</button>}
                    <p className='text-xs text-slate-400'>Once submitted , detailes cannot be updated, please crosscheck</p>
                </div>
            </div>
        </div>
    </form>
  )
}

export default Car