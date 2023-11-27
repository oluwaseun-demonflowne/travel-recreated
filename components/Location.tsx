"use client"
import React, { useState } from 'react'
import Stay from './ChooseFeed/Stay'
import { BiSearch } from 'react-icons/bi'
import Hotel from './ChooseFeed/Hotel'
import Flight from './ChooseFeed/Flight'
import Cars from './ChooseFeed/Cars'

const Location = () => {
  const [hotelCity ,setHotelCity] = useState("")
  const [stay, setStay] = useState(true)
  const [flight, setFlight] = useState(false)
  const [cars, setCars] = useState(false)
  const [hotel, setHotel] = useState(false)

  


  const showStays = () => {
    setStay(true)
    setFlight(false)
    setCars(false)
    setHotel(false)
  }
  const showFlight = () => {
    setFlight(true)
    setStay(false)
    setCars(false)
    setHotel(false)
  }
  const showCars = () => {
    setCars(true)
    setFlight(false)
    setStay(false)
    setHotel(false)
  }

  const showHotel = () => {
    setHotel(true)
    setCars(false)
    setFlight(false)
    setStay(false)
  }

  // const [searchLocation, setSearchLocation] = useState('')

  // const goToLocation = () => {
  //   if(stay){
  //       Router.push(`/location/search?location=${searchLocation}`)   
  //   }
  //   if(flight){
  //       Router.push('/flight')   
  //   }
  //   if(cars){
  //       Router.push('/car/q')   
  //   }
  //   if(hotel){
  //       Router.push('/hotel/q')   
  //   }
  // }


  return (
    <div className='flex w-[80%] xl:w-[1000px] justify-center'>
        <div className='bg-white flex flex-col gap-3 w-full border rounded-lg'>
            <div className='flex px-4  items-center text-xs border-b-2 '>
                <button onClick={showStays}  className={`text-sm border-black w-20 py-4 ${stay ? 'px-4 border-b-2' : ''} text-slate-500 cursor-pointer`}>Stays</button>
                <button onClick={showFlight} className={`text-sm border-black w-20 py-4 ${flight ? 'px-4 border-b-2' : ''} text-slate-500 cursor-pointer`}>Flights</button>
                <button onClick={showCars}   className={`text-sm border-black w-20 py-4 ${cars ? 'px-4 border-b-2' : ''} text-slate-500 cursor-pointer`}>Cars</button>
                <button onClick={showHotel}   className={`text-sm border-black w-20 py-4 ${hotel ? 'px-4 border-b-2' : ''} text-slate-500 cursor-pointer`}>Hotel</button>
            </div>
            <div className='flex justify-between items-center'>
              {stay && <Stay />}
              {flight && <Flight />}
              {cars && <Cars />}
              {hotel &&<Hotel hotelCityName={setHotelCity} />}
            <button  className='pointer bg-blue-600 mr-5 w-10 h-10 text-lg flex justify-center items-center rounded-full p-2'><BiSearch className='text-white' /></button>
            </div>
        </div>    
    </div>
  )
}

export default Location