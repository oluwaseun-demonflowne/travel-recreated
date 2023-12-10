"use client"
import React, { useState } from 'react'
import Collapsible from 'react-collapsible'
import { ZodType, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { AiOutlineCloudUpload, AiOutlineUpload } from 'react-icons/ai'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useUploadThing } from '@/utils/uploadthing'

type FormData = {
  hotelName?: string;
  shortHotelDescription?: string;
  location?: string;
  price?: number;
  guestNo?: string;
  roomNo?: string;
  privateBathNo?: string;
  cancelFree?: string;
  reserveNow?: string;
  specialOffer?: string;
  breakfast?: string;
  romantic?: string;
  airport?: string;
  overview?: string;
  wifi?: string;
  star?: string;
  hotelType?: string;
  dedicated?: string;
  checkIn?: string;
  freeCancel?: string;
  wifiIncluded?: string;
  bathroom?: string;
  smoking?: string;
  breakfastIncluded?: string;
  gym?: string;
  atm?: string;
  pool?: string;
  city?: string;
}


const Hotel = () => {
  const router = useRouter()
  const [uploadingImages,setUploadingImages] = useState(false)
  const [submitting,setSubmitting] = useState(false)
  const { data: session} = useSession()
  const [linkArray, setThisIsTheLink] = useState<string[]>([]);
  const [isFreeCancelChecked, setIsFreeCancelChecked] = useState(false)
  const [isReserveNow, setIsReserveNow] = useState(false)
  const [isSpecialOffer, setIsSpecialOffer] = useState(false)
  const [isBreakfastChecked, setIsBreakfastChecked] = useState(false)
  const [isRomanticChecked, setIsRomanticChecked] = useState(false)
  const [isAirportChecked, setIsAirportChecked] = useState(false)
  const [isWifiChecked, setIsWifiChecked] = useState(false)
  const [isStarChecked, setIsStarChecked] = useState(false)
  const [isDedicatedChecked, setisDedicatedChecked] = useState(false)
  const [isCheckInChecked, setisCheckInChecked] = useState(false)
  const [isFreeCancelCheckedAgain, setisFreeCancelCheckedAgain] = useState(false)
  const [isWifiAgainChecked, setIsWifiAgainChecked] = useState(false)
  const [isBathRoomChecked, setIsBathRoomChecked] = useState(false)
  const [isSmokingChecked, setIsSmokingChecked] = useState(false)
  const [isBreakfastAgainChecked, setIsBreakfastAgainChecked] = useState(false)
  const [isGymChecked, setIsGymChecked] = useState(false)
  const [isAtmChecked, setIsAtmChecked] = useState(false)
  const [isPoolChecked, setIsPoolChecked] = useState(false)
  const [isCityChecked, setIsCityChecked] = useState(false)

  const handleCancelFree = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsFreeCancelChecked(isChecked)
  }
  const handleReserveNow = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsReserveNow(isChecked)
  }
  const handleSpecialOffer = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsSpecialOffer(isChecked)
  }

  const handleBreakfast = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsBreakfastChecked(isChecked)
  }
  const handleRomantic = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsRomanticChecked(isChecked)
  }
  const handleAirport = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsAirportChecked(isChecked)
  }
  const handleWifi = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsWifiChecked(isChecked)
  }
  const handleStar = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsStarChecked(isChecked)
  }
  const handleDedicated = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setisDedicatedChecked(isChecked)
  }
  const handleSelfCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setisCheckInChecked(isChecked)
  }
  const handleFreeCancelAgain = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setisFreeCancelCheckedAgain(isChecked)
  }

  


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

  const schema:ZodType<FormData> = z.object({
    hotelName: z.string().min(2).max(1000),
    shortHotelDescription:z.string().min(2).max(1000),
    location:z.string().min(2).max(50),
    price:z.number().min(2).max(10000),
    guestNo:z.string().min(1).max(2),
    roomNo:z.string().min(1).max(2),
    privateBathNo:z.string().min(1).max(2),
    overview:z.string().min(2).max(5000),
    hotelType:z.string().min(2).max(15),
 })

    const { startUpload } =  useUploadThing("hotelPicture",
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
 const submitHotelData = async (data:FormData) => {
    console.log(data)
    try {
      setSubmitting(true)
      const response = await fetch('/api/category/hotel', {
          
          method: 'POST',
          body: JSON.stringify({
              image1:linkArray?.[0],
              image2:linkArray?.[1],
              image3:linkArray?.[2],
              category:'Hotel',
              creator:session?.user?.id,
              hotelName:data.hotelName,
              shortHotelDescription:data.shortHotelDescription,
              location:data?.location
              ? data.location.charAt(0)?.toUpperCase() + data.location.slice(1)
              : undefined,
              price:data.price,
              guestNo:data.guestNo,
              roomNo:data.roomNo,
              privateBathNo:data.privateBathNo,
              cancelFree:isFreeCancelChecked ? 'Free cancellation' : 'false',
              reserveNow:isReserveNow ? 'Reserve now, pay at stay' : 'false',
              specialOffer:isSpecialOffer ? 'special' : 'false',
              breakfast:isBreakfastChecked ? 'Breakfast Included' : 'false',
              romantic:isRomanticChecked ? 'Romantic' : 'false',
              airport:isAirportChecked ? 'Airport Transfer' : 'false',
              overview:data.overview,
              wifi:isWifiChecked ? 'WiFi' : 'false',
              star:isStarChecked ? '5 star' : 'false',
              hotelType:data.hotelType,
              dedicated:isDedicatedChecked ? 'Dedicated Workspace' : 'false',
              checkIn:isCheckInChecked ? 'Self Check-In' : 'false',
              freeCancel:isFreeCancelCheckedAgain ? 'Free Cancellation' : 'false',
              wifiIncluded:isWifiAgainChecked ? 'Free wifi' : 'false',
              bathroom:isBathRoomChecked ? 'Free Clean Bathroom' : 'false',
              smoking:isSmokingChecked ? 'Smoking Zone' : 'false',
              breakfastIncluded:isBreakfastAgainChecked ? 'Breakfast included' : 'false',
              gym:isGymChecked ? 'Gym Facility' : 'false',
              atm:isAtmChecked ? 'ATM' : 'false',
              pool:isPoolChecked ? 'Swimming pool' : 'false',
              city:isCityChecked ? 'Nearby City' : 'false',
          })
      })
      console.log(response)
      if(response.ok){
          router.push('/')
          toast.success("Hotel Successfully added")
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
    <form onSubmit={handleSubmit(submitHotelData)} className='flex items-center mt-5 flex-col mb-10 gap-5'>
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
            <h1 className='text-xl font-black'>Add Hotel</h1>
        </div>
        <div>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>Hotel Name</p>
                        <input {...register("hotelName", {required:true})} type='text' className='border p-2 rounded-full w-80 md:w-96 h-9 text-[17px]' placeholder='car name'/>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>Short Hotel Description</p>
                        <input {...register("shortHotelDescription", {required:true})} type='text' className='border p-2 rounded-full w-80 md:w-96 h-9 text-[17px]' placeholder='car name'/>
                        {errors.shortHotelDescription && <span className="text-[red] text-xs">{errors.shortHotelDescription?.message}</span>}
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
                        {errors.price && <span className="text-[red] text-xs">{errors.price.message}</span>}
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='w-full rounded-lg p-2 border'>
                        <Collapsible trigger="Top Features">
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-base font-black my-2'>No of Guests</h1>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("guestNo", {required:true})} type="radio" id="guest1" name="guestNo" value="1" />
                                      <label className='text-sm' htmlFor="guest1">1 guest</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("guestNo", {required:true})} type="radio" id="guest2" name="guestNo" value="2" />
                                      <label className='text-sm' htmlFor="guest2">2 guest</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("guestNo", {required:true})} type="radio" id="guest3" name="guestNo" value="3" />
                                      <label className='text-sm' htmlFor="guest3">3 guest</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("guestNo", {required:true})} type="radio" id="guest4" name="guestNo" value="4" />
                                      <label className='text-sm' htmlFor="guest4">4 guest</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("guestNo", {required:true})} type="radio" id="guest5" name="guestNo" value="5" />
                                      <label className='text-sm' htmlFor="guest5">5 guest</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("guestNo", {required:true})} type="radio" id="guest5+" name="guestNo" value="5+" />
                                      <label className='text-sm' htmlFor="guest5+">5+ guest</label>
                                      {errors.guestNo && <span className="text-[red] text-xs">{errors.guestNo.message}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-base font-black my-2'>No of rooms</h1>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("roomNo", {required:true})} type="radio" id="one" name="roomNo" value="1" />
                                      <label className='text-sm' htmlFor="one">1 bedroom</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("roomNo", {required:true})} type="radio" id="two" name="roomNo" value="2" />
                                      <label className='text-sm' htmlFor="two">2 bedroom</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("roomNo", {required:true})} type="radio" id="two+" name="roomNo" value="3" />
                                      <label className='text-sm' htmlFor="two+">2+ bedroom</label>
                                      {errors.roomNo && <span className="text-[red] text-xs">{errors.roomNo.message}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-base font-black my-2'>No of Private Baths</h1>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("privateBathNo", {required:true})} type="radio" id="onebath" name="privateBathNo" value="1" />
                                      <label className='text-sm' htmlFor="onebath">1 private bath</label>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input {...register("privateBathNo", {required:true})} type="radio" id="one+" name="privateBathNo" value="2" />
                                      <label className='text-sm' htmlFor="one+">1+ private bath</label>
                                      {errors.privateBathNo && <span className="text-[red] text-xs">{errors.privateBathNo.message}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Collapsible>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='w-full rounded-lg p-2 border'>
                        <Collapsible trigger="Hotel Filters">
                        <div className='flex flex-col gap-1'>
                            <div className='text-sm font-medium flex flex-col gap-2'>
                                <h1 className='text-base font-semibold'>Deals</h1>
                                <div className='flex flex-col gap-1'>
                                  <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input onChange={handleCancelFree} type="checkbox" id="cancel" name="category" value="freeCancel" />
                                      <label htmlFor="cancel">Free cancellation</label>
                                    </div>
                                  </div>
                                  <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input onChange={handleReserveNow} type="checkbox" id="Reserve" name="category" value="ReserveNow" />
                                      <label htmlFor="Reserve">Reserve now, pay at stay</label>
                                    </div>
                                  </div>
                                  <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-1 items-center'>
                                      <input onChange={handleSpecialOffer} type="checkbox" id="Special" name="category" value="Special" />
                                      <label htmlFor="Special">Properties with special offers</label>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div className='text-sm flex flex-col font-medium'>
                              <div className='py-2 '>
                                <h1 className='text-base font-semibold'>Popular Filters</h1>
                              </div>
                              <div className='flex flex-col gap-1'>
                                  <div className='flex justify-between  items-center'>
                                        <div className='flex gap-1 items-center'>
                                          <input onChange={handleBreakfast} type="checkbox" id="breakfast" name="category" value="breakfast" />
                                          <label htmlFor="breakfast">Breakfast Included</label>
                                        </div>
                                  </div>
                                  <div className='flex justify-between gap-5 items-center'>
                                        <div className='flex gap-1 items-center'>
                                          <input onChange={handleRomantic} type="checkbox" id="romantic" name="category" value="romantic" />
                                          <label htmlFor="romantic">Romantic</label>
                                        </div>
                                  </div>
                                  <div className='flex justify-between gap-5 items-center'>
                                        <div className='flex gap-1 items-center'>
                                          <input onChange={handleAirport} type="checkbox" id="airport" name="category" value="airport" />
                                          <label htmlFor="airport">Airport Transfer</label>
                                        </div>
                                  </div>
                                  <div className='flex justify-between gap-5 items-center'>
                                        <div className='flex gap-1 items-center'>
                                          <input onChange={handleWifi} type="checkbox" id="WiFi" name="category" value="WiFi" />
                                          <label htmlFor="WiFi">WiFi Included</label>
                                        </div>
                                  </div>
                                  <div className='flex justify-between gap-5 items-center'>
                                        <div className='flex gap-1 items-center'>
                                          <input onChange={handleStar} type="checkbox" id="Star" name="category" value="Star" />
                                          <label htmlFor="Star">5 Star</label>
                                        </div>
                                  </div>
                              </div>
                            </div>
                            <div className='text-sm mt-5 font-medium flex flex-col gap-2'>
                                <h1 className='text-base font-semibold'>Hotel Type</h1>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex justify-between gap-5 items-center'>
                                      <div className='flex gap-1 items-center'>
                                        <input {...register("hotelType", {required:true})} type="radio" id="budget" name="hotelType" value="budget" />
                                        <label htmlFor="budget">Budget</label>
                                        {errors.guestNo && <span className="text-[red] text-xs">{errors.guestNo.message}</span>}
                                      </div>
                                    </div>
                                    <div className='flex justify-between gap-5 items-center'>
                                      <div className='flex gap-1 items-center'>
                                        <input {...register("hotelType", {required:true})} type="radio" id="mid-range" name="hotelType" value="mid-range" />
                                        <label htmlFor="mid-range">Mid-range</label>
                                      </div>
                                    </div>
                                    <div className='flex justify-between gap-5 items-center'>
                                      <div className='flex gap-1 items-center'>
                                        <input {...register("hotelType", {required:true})} type="radio" id="luxury" name="hotelType" value="luxury" />
                                        <label htmlFor="luxury">Luxury</label>
                                      </div>
                                    </div>
                                    <div className='flex justify-between gap-5 items-center'>
                                      <div className='flex gap-1 items-center'>
                                        <input {...register("hotelType", {required:true})} type="radio" id="family" name="hotelType" value="family" />
                                        <label htmlFor="family">Family-friendly</label>
                                      </div>
                                    </div>
                                    <div className='flex justify-between gap-5 items-center'>
                                      <div className='flex gap-1 items-center'>
                                        <input {...register("hotelType", {required:true})} type="radio" id="buis" name="hotelType" value="buisness" />
                                        <label htmlFor="buis">Buisness</label>
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
                        <Collapsible trigger="Special Features">
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleDedicated} type="checkbox" id="dedicated" name="special" value="Dedicated workspace" />
                                  <label className='text-sm' htmlFor="dedicated">Dedicated workspace</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleSelfCheck} type="checkbox" id="self" name="special" value="Self check-in" />
                                  <label className='text-sm' htmlFor="self">Self check-in</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleFreeCancelAgain} type="checkbox" id="free" name="special" value="Free Cancellation" />
                                  <label className='text-sm' htmlFor="free">Free Cancellation</label>
                                </div>
                            </div>
                        </div>
                        </Collapsible>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-xs font-bold'>Overview</p>
                    <textarea {...register("overview", {required:true})} className='border h-20 p-2 rounded-md w-80 md:w-96 text-xs'></textarea>
                </div>
                <div className='flex gap-5 flex-col'>
                    <div className='rounded-lg p-2 border'>
                        <Collapsible trigger="Hotel Amenities">
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleWifiAgain} type="checkbox" id="wifi" name="hotel" value="Free wifi 24/7" />
                                  <label className='text-sm' htmlFor="wifi">Wifi</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleBathroom} type="checkbox" id="clean" name="hotel" value="Free clean bathroom" />
                                  <label className='text-sm' htmlFor="clean">Free clean bathroom</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleSmoking} type="checkbox" id="smoking" name="hotel" value="Smoking Zone" />
                                  <label className='text-sm' htmlFor="smoking">Smoking Zone</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleBreakfastAgain} type="checkbox" id="breakfast" name="hotel" value="Breakfast included" />
                                  <label className='text-sm' htmlFor="breakfast">Breakfast included</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleGym} type="checkbox" id="gym" name="hotel" value="Gym facility" />
                                  <label className='text-sm' htmlFor="gym">Gym facility</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleAtm} type="checkbox" id="atm" name="hotel" value="ATM" />
                                  <label className='text-sm' htmlFor="atm">ATM</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleSwimming} type="checkbox" id="pool" name="hotel" value="Swimming pool" />
                                  <label className='text-sm' htmlFor="pool">Swimming pool</label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='flex gap-1 items-center'>
                                  <input onChange={handleCity} type="checkbox" id="city" name="hotel" value="Nearby City" />
                                  <label className='text-sm' htmlFor="city">Nearby city</label>
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

export default Hotel