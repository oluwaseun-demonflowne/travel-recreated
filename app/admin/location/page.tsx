"use client"
import React, { useState } from 'react'
import Collapsible from 'react-collapsible'
import { ZodType, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { AiOutlineCloudUpload, AiOutlineUpload } from 'react-icons/ai'
import { useSession } from 'next-auth/react'
import { useUploadThing } from '@/utils/uploadthing'
import toast from 'react-hot-toast'

type FormData = {
  locationCaption?: string;
  locationAt?: string;
  price?: number;
  language?: string;
  freeCancel?: string;
  day?: string;
  group?: string;
  tour?: string;
  cancelFreely?: string;
  activityType?: string;
  title1?: string;
  included1?: string;
  title2?: string;
  included2?: string;
  title3?: string;
  included3?: string;
  wifi?: string;
  cleanBathroom?: string;
  smoking?: string;
  breakfast?: string;
  gym?: string;
  atm?: string;
  swimming?: string;
  city?: string;
  overview?:string;
};


const Location = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [submitting,setSubmitting] = useState(false)
  const [uploadingImages,setUploadingImages] = useState(false)
  const [linkArray, setThisIsTheLink] = useState<string[]>([]);  
  const [isFreeCancelChecked, setIsFreeCancelChecked] = useState(false)
  const [isWifiAgainChecked, setIsWifiAgainChecked] = useState(false)
  const [isBathRoomChecked, setIsBathRoomChecked] = useState(false)
  const [isSmokingChecked, setIsSmokingChecked] = useState(false)
  const [isBreakfastAgainChecked, setIsBreakfastAgainChecked] = useState(false)
  const [isGymChecked, setIsGymChecked] = useState(false)
  const [isAtmChecked, setIsAtmChecked] = useState(false)
  const [isPoolChecked, setIsPoolChecked] = useState(false)
  const [isCityChecked, setIsCityChecked] = useState(false)

  const handleWifiAgain = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsWifiAgainChecked(isChecked)
  }
  const handleBathroom = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsBathRoomChecked(isChecked)
  }
  const handleSmoking = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsSmokingChecked(isChecked)
  }
  const handleBreakfastAgain = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsBreakfastAgainChecked(isChecked)
  }
  const handleGym = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsGymChecked(isChecked)
  }
  const handleAtm = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsAtmChecked(isChecked)
  }
  const handleSwimming = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsPoolChecked(isChecked)
  }
  const handleCity = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsCityChecked(isChecked)
  }
  const handleCancelFree = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsFreeCancelChecked(isChecked)
  }

  const schema:ZodType<FormData> = z.object({
    locationCaption: z.string().min(2).max(5000),
    locationAt:z.string().min(2).max(20),
    price:z.number().min(3).max(50000),
    language:z.string().min(2).max(15),
    freeCancel:z.string().min(2).max(15),
    day:z.string().min(1).max(15),
    group:z.string().min(1).max(15),
    tour:z.string().min(1).max(15),
    activityType:z.string().min(2).max(30),
    title1:z.string().min(2).max(30),
    included1:z.string().min(2).max(300),
    title2:z.string().min(2).max(30),
    included2:z.string().min(2).max(300),
    title3:z.string().min(2).max(30),
    included3:z.string().min(2).max(300),
    overview:z.string().min(2).max(30000),
 })

    const { startUpload } =  useUploadThing("locationPicture",
      { 
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

 const submitLocationData = async (data:FormData) => {
      try {
        setSubmitting(true)
        const response = await fetch('/api/category/location', {
            method: 'POST',
            body: JSON.stringify({
                image1:linkArray[0],
                image2:linkArray[1],
                image3:linkArray[2],
                category:'Location',
                creator:session?.user?.id,
                locationCaption: data.locationCaption,
                locationAt: data.locationAt,
                price:data.price,
                language:data.language ,
                freeCancel:data.freeCancel ,
                day: data.day,
                group: data.group,
                tour:data.tour ,
                cancelFreely: isFreeCancelChecked ? 'Free cancellation' : 'false',
                activityType:data.activityType ,
                title1:data.title1 ,
                included1: data.included1,
                title2: data.title2,
                included2: data.included2,
                title3: data.title3,
                included3: data.included3,
                overview: data.overview,
                wifi: isWifiAgainChecked ? 'Free wifi 24/7' : 'false' ,
                cleanBathroom: isBathRoomChecked ? 'Free clean bathroom' : 'false' ,
                smoking: isSmokingChecked ? 'Smoking Zone' : 'false' ,
                breakfast: isBreakfastAgainChecked ? 'Breakfast included' : 'false' ,
                gym: isGymChecked ? 'Gym facility' : 'false' ,
                atm: isAtmChecked ? 'ATM' : 'false' ,
                swimming: isPoolChecked ? 'Swimming pool' : 'false' ,
                city : isCityChecked ? 'Nearby City' : 'false' ,
            })
        })
        console.log(response)
        if(response.ok){
            router.push('/')
            toast.success("Location successfully added")
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
    <form  onSubmit={handleSubmit(submitLocationData)} className='flex items-center mt-5 flex-col mb-10 gap-5'>
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
            <h1 className='text-xl font-black'>Add Location</h1>
        </div>
        <div>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>Location Caption</p>
                        <input {...register("locationCaption", {required:true})} type='text' className='border p-2 rounded-full w-80 md:w-96 h-9 text-[17px]' placeholder='caption'/>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>Location At</p>
                        <input {...register("locationAt", {required:true})} type='text' className='border p-2 rounded-full w-80 md:w-96 h-9 text-[17px]' placeholder='location'/>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>Price</p>
                        <input {...register("price", {valueAsNumber:true,required:true})} type='number' className='border p-2 rounded-full w-80 md:w-96 h-9 text-[17px]' placeholder='Price'/>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>Languages</p>
                        <input {...register("language", {required:true})} type='text' className='border p-2 rounded-full w-80 md:w-96 h-9 text-[17px]' placeholder='English, UK'/>
                    </div>
                </div>
                <div className='flex w-full gap-4'>
                    <div className='w-full rounded-lg p-2 border'>
                        <Collapsible trigger="Special Features">
                        <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                                <h1 className='text-base font-black my-2'>Free Cancellation</h1>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input  {...register("freeCancel")} type="radio" id="cancelany" name="freeCancel" value="cancel" />
                                      <label className='text-sm' htmlFor="cancelany">cancel anytime(free)</label>
                                      {errors.freeCancel && <span className="text-[red] text-xs">{errors.freeCancel.message}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-base font-black my-2'>Duration</h1>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("day", {required:true})} type="radio" id="ones" name="day" value="1" />
                                      {errors.day && <span className="text-[red] text-xs">{errors.day.message}</span>}
                                      <label className='text-sm' htmlFor="ones">1 day</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("day", {required:true})} type="radio" id="twos" name="day" value="2" />
                                      <label className='text-sm' htmlFor="twos">2 days</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("day", {required:true})} type="radio" id="three" name="day" value="3" />
                                      <label className='text-sm' htmlFor="three">3 days</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("day", {required:true})} type="radio" id="three+" name="day" value="4+" />
                                      <label className='text-sm' htmlFor="three+">3+ days</label>
                                      {errors.day && <span className="text-[red] text-xs">{errors.day.message}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-base font-black my-2'>Group Size</h1>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("group", {required:true})} type="radio" id="oness" name="group" value="1" />
                                      <label className='text-sm' htmlFor="oness">1 person</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("group", {required:true})} type="radio" id="twoss" name="group" value="2" />
                                      <label className='text-sm' htmlFor="twoss">2 people</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("group", {required:true})} type="radio" id="threess" name="group" value="3" />
                                      <label className='text-sm' htmlFor="threess">3 people</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("group", {required:true})} type="radio" id="fourss" name="group" value="4" />
                                      <label className='text-sm' htmlFor="fourss">4 people</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("group", {required:true})} type="radio" id="fivess" name="group" value="5" />
                                      <label className='text-sm' htmlFor="fivess">5 people</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("group", {required:true})} type="radio" id="five+ss" name="group" value="5+" />
                                      <label className='text-sm' htmlFor="five+ss">5+ people</label>
                                      {errors.group && <span className="text-[red] text-xs">{errors.group.message}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-base font-black my-2'>Tour Type</h1>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("tour", {required:true})} type="radio" id="daily" name="tour" value="Daily Tour" />
                                      <label className='text-sm' htmlFor="daily">Daily Tour</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("tour", {required:true})} type="radio" id="weekly" name="tour" value="Weekly Tour" />
                                      <label className='text-sm' htmlFor="weekly">Weekly Tour</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("tour", {required:true})} type="radio" id="monthly" name="tour" value="Monthly Tour" />
                                      <label className='text-sm' htmlFor="monthly">Monthly Tour</label>
                                      {errors.tour && <span className="text-[red] text-xs">{errors.tour.message}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Collapsible>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='w-full rounded-lg p-2 border'>
                        <Collapsible trigger="Location Filters">
                        <div className='flex flex-col gap-4'>
                            <div className='text-sm font-medium flex flex-col gap-2'>
                              <h1 className='text-base font-semibold'>Cancellation</h1>
                              <div className='flex flex-col gap-1'>
                                <div className='flex justify-between gap-5 items-center'>
                                  <div className='flex gap-1 items-center'>
                                    <input onChange={handleCancelFree} type="checkbox" id="cancelonce" name="cancel" value="Free Cancellation" />
                                    <label htmlFor="cancelonce">Free cancellation</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='text-sm font-medium flex flex-col gap-2'>
                              <h1 className='text-base font-semibold'>Category Types</h1>
                              <div className='flex flex-col gap-1'>
                                <div className='flex justify-between gap-5 items-center'>
                                  <div className='flex gap-1 items-center'>
                                    <input {...register("activityType", {required:true})} type="radio" id="Tours" name="activityType" value="Tours" />
                                    <label htmlFor="Tours">Tours</label>
                                  </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                  <div className='flex gap-1 items-center'>
                                    <input {...register("activityType", {required:true})} type="radio" id="Attractions" name="activityType" value="Attractions" />
                                    <label htmlFor="Attractions">Attractions</label>
                                  </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                  <div className='flex gap-1 items-center'>
                                    <input {...register("activityType", {required:true})} type="radio" id="DayTrips" name="activityType" value="Day Trips" />
                                    <label htmlFor="DayTrips">Day Trips</label>
                                  </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                  <div className='flex gap-1 items-center'>
                                    <input {...register("activityType", {required:true})} type="radio" id="OutdoorActivities22" name="activityType" value="Outdoor Activities" />
                                    <label htmlFor="OutdoorActivities22">Outdoor Activities</label>
                                  </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                  <div className='flex gap-1 items-center'>
                                    <input {...register("activityType", {required:true})} type="radio" id="ConcertandShows22" name="activityType" value="Concert and Shows" />
                                    <label htmlFor="ConcertandShows22">Concert and Shows</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        </Collapsible>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='w-full rounded-lg p-2 border'>
                        <Collapsible trigger="What is included">
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-bold'>What is included(1)</p>
                                <input {...register("title1", {required:true})} type='text' className='border p-2 rounded-full w-96 h-9 text-[17px]' placeholder='title'/>
                                <textarea {...register("included1", {required:true})} className='border h-20 p-2 rounded-md w-96 text-[17px]'></textarea>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-bold'>What is included(2)</p>
                                <input {...register("title2", {required:true})} type='text' className='border p-2 rounded-full w-96 h-9 text-[17px]' placeholder='title'/>
                                <textarea {...register("included2", {required:true})} className='border h-20 p-2 rounded-md w-96 text-[17px]'></textarea>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-bold'>Whati s included(3)</p>
                                <input {...register("title3", {required:true})} type='text' className='border p-2 rounded-full w-96 h-9 text-[17px]' placeholder='title'/>
                                <textarea {...register("included3", {required:true})} className='border h-20 p-2 rounded-md w-96 text-[17px]'></textarea>
                            </div>
                        </div>
                        </Collapsible>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm font-bold'>Overview</p>
                    <textarea {...register("overview", {required:true})} className='border h-20 p-2 rounded-md w-80 md:w-96 text-[17px]'></textarea>
                </div>
                <div className='flex w-full gap-5 flex-col'>
                    <div className='rounded-lg p-2 border'>
                        <Collapsible trigger="Location Amenities">
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleWifiAgain} type="checkbox" id="wifi22" name="hotel" value="Free wifi 24/7" />
                                  <label className='text-sm' htmlFor="wifi22">Wifi</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleBathroom} type="checkbox" id="clean22" name="hotel" value="Free clean bathroom" />
                                  <label className='text-sm' htmlFor="clean22">Free clean bathroom</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleSmoking} type="checkbox" id="smoking22" name="hotel" value="Smoking Zone" />
                                  <label className='text-sm' htmlFor="smoking22">Smoking Zone</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleBreakfastAgain} type="checkbox" id="breakfast22" name="hotel" value="Breakfast included" />
                                  <label className='text-sm' htmlFor="breakfast22">Breakfast included</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleGym} type="checkbox" id="gym22" name="hotel22" value="Gym facility" />
                                  <label className='text-sm' htmlFor="gym22">Gym facility</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleAtm} type="checkbox" id="atm22" name="hotel22" value="ATM" />
                                  <label className='text-sm' htmlFor="atm22">ATM</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleSwimming} type="checkbox" id="pool22" name="hotel22" value="Swimming pool" />
                                  <label className='text-sm' htmlFor="pool22">Swimming pool</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleCity} type="checkbox" id="city22" name="hotel22" value="Nearby City" />
                                  <label className='text-sm' htmlFor="city22">Nearby city</label>
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
                {session?.user?.id && linkArray.length === 3 && <button className={`${submitting ? 'opacity-50 pointer-events-none' : ''}  rounded-full py-2 px-4 text-xs text-white bg-blue-600`}>Add Hotel</button>}
                    <p className='text-xs text-slate-400'>Once submitted , detailes cannot be updated, please crosscheck</p>
                </div>
            </div>
        </div>
    </form>
  )
}

export default Location