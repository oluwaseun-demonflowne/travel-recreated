"use client"
import React, { useState } from 'react'
import General from './General'
import Booking from './Booking'
import Transportation from './Transportation'
import Destination from './Destin'



const Question = () => {
  const [showGeneral, setShowGeneral] = useState(true)
  const [showBooking, setShowBooking] = useState(false)
  const [showDestin, setShowDestin] = useState(false)
  const [showTransportation, setShowTransportation] = useState(false)
  const showOnlyGeneral = () => {
    setShowGeneral(true)
    setShowBooking(false)
    setShowDestin(false)
    setShowTransportation(false)
  }
  const showOnlyBooking = () => {
    setShowBooking(true)
    setShowGeneral(false)
    setShowDestin(false)
    setShowTransportation(false)
  }
  const showOnlyDestin= () => {
    setShowDestin(true)
    setShowBooking(false)
    setShowGeneral(false)
    setShowTransportation(false)
  }
  const showOnlyTransportation = () => {
    setShowTransportation(true)
    setShowBooking(false)
    setShowGeneral(false)
    setShowDestin(false)
  }
  // if(showGeneral){
  //   {!showGeneral && setShowGeneral(true)}
  //   {showBooking && setShowBooking(false)}
  //   {showDestin && setShowDestin(false)}
  //   {showTransportation && setShowTransportation(false)}
  // }
  // if(showBooking){
  //   {!showBooking && setShowBooking(true)}
  //   {showGeneral && setShowGeneral(false)}
  //   {showDestin && setShowDestin(false)}
  //   {showTransportation && setShowTransportation(false)}
  // }
  // if(showDestin){
  //   {showGeneral && setShowGeneral(false)}
  //   {showBooking && setShowBooking(false)}
  //   {showTransportation && setShowTransportation(false)}
  // }
  // if(showTransportation){
  //   {showGeneral && setShowGeneral(false)}
  //   {showBooking && setShowBooking(false)}
  //   {showDestin && setShowDestin(false)}
  // }
  return (
    <div className='px-4 md:px-24'>
      <div className='flex flex-wrap gap-5 mb-4'>
        <button className={`tracking-wider ${showGeneral ? 'bg-blue-700 text-white' : ''}  border text-xs font-medium py-2 px-3 rounded-full`} onClick={showOnlyGeneral}>General Questions</button>
        <button className={`tracking-wider ${showBooking ? 'bg-blue-700 text-white' : ''}  border text-xs font-medium py-2 px-3 rounded-full`} onClick={showOnlyBooking}>Booking and Payment</button>
        <button className={`tracking-wider ${showDestin ? 'bg-blue-700 text-white' : ''}  border text-xs font-medium py-2 px-3 rounded-full`} onClick={showOnlyDestin}>Destination</button>
        <button className={`tracking-wider ${showTransportation ? 'bg-blue-700 text-white' : ''}  border text-xs font-medium py-2 px-3 rounded-full`} onClick={showOnlyTransportation}>Transportation</button>
      </div>
      <div className='w-100% mb-10'>
        <div className={`${showGeneral ? 'flex' : 'hidden'}`}>
          <General />
        </div>
        <div className={`${showBooking ? 'flex' : 'hidden'}`}>
          <Booking />
        </div>
        <div className={`${showDestin ? 'flex' : 'hidden'}`}>
          <Destination />
        </div>
        <div className={`${showTransportation ? 'flex' : 'hidden'}`}>
          <Transportation />
        </div>
      </div>
    </div>
  )
}

export default Question