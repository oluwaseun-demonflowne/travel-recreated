"use client"
import React, { useState } from 'react'
import Stay from './ChooseFeed/Stay'
import { BiSearch } from 'react-icons/bi'
import Hotel from './ChooseFeed/Hotel'
import Flight from './ChooseFeed/Flight'
import Cars from './ChooseFeed/Cars'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const Location = () => {
  const Router = useRouter()

  // Hotel picker
  const [hotelCity ,setHotelCity] = useState("")
  const [date, setDate] = React.useState<Date>(new Date())
  
  // Car Picker
  const [pickupLocation , setPickupLocation] = useState("")
  const [noOfPassengers , setNoOfPassengers] = useState(0)

  // Stay Picker
  const [locationCity ,setLocationCity] = useState("")
  const [guestNo ,setGuestNo] = useState(0)
  const [startDate, setStartDate] = React.useState<Date>(new Date())
  const [endDate, setEndDate] = React.useState<Date>(new Date())

  // Flight Picker
  const [flightStartCity ,setFlightStartCity] = useState("")
  const [flightEndCity ,setFlightEndCity] = useState("")
  const [departureMonth ,setDepartureMonth] = useState("")

  const [stay, setStay] = useState(true)
  const [flight, setFlight] = useState(false)
  const [cars, setCars] = useState(false)
  const [hotel, setHotel] = useState(false)
  const [loading, setLoading] = useState(false)
  

  


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

  const goToLocation = () => {
    setLoading(true)
    if(stay){
      if(locationCity.length < 4) {
        toast.error("Please enter a valid city")
        setLoading(false)
      } else {
        Router.push(`/locationQuery/search?location=${locationCity}`)   
      }
    }
    // if(flight){
    //     Router.push('/flight')   
    // }
    if(cars){
      if(pickupLocation.length < 4) {
        toast.error("Please enter a valid city")
        setLoading(false)
      } else {
        Router.push(`/carQuery/search?pickupLocation=${pickupLocation}`)   
      }
    }
    if(hotel){
        if(hotelCity.length < 4) {
          toast.error("Please enter a valid city")
          setLoading(false)
        } else {
          Router.push(`/hotelQuery/search?location=${hotelCity}`)   
        }
    }
  }


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
              {stay && <Stay setLocationCity={setLocationCity} setGuestNo={setGuestNo} startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />}

              {flight && <Flight setFlightStartCity={setFlightStartCity} setFlightEndCity={setFlightEndCity} />}

              {cars && <Cars setPickUpLocation={setPickupLocation} setNoOfPassengers={setNoOfPassengers} />}

              {hotel && <Hotel date={date} setDate={setDate} hotelCityName={setHotelCity} />}
            <button onClick={() => goToLocation()}  className={`pointer ${loading ? 'pointer-events-none opacity-30' : ""} bg-blue-600 mr-5 w-10 h-10 text-lg flex justify-center items-center rounded-full p-2`}><BiSearch className='text-white' /></button>
            </div>
        </div>    
    </div>
  )
}

export default Location