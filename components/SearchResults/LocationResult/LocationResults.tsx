"use client"
import React from 'react'
import Properties from './Properties'
import Deals from './Deals'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BsFilterRight } from 'react-icons/bs'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'



const LocationResults = () => {
  const getTourValue = (e:any) => {
    if(e.target.checked === true) {
      
    }
  }
  
  const travelDuration = (e:any) => {
    if(e.target.checked === true) {
      console.log(e.target.value)
    }
  }



  const searchParams = useSearchParams()
  const location = searchParams.get('location')
  const {} = useQuery({    
    queryKey: [`LocationQueryId${searchParams}`],
    queryFn: () =>
      axios
      .get(`/api/searchFeed/location/${location}`)
        .then((res) => res.data),
  });
  return (
    <div className='flex md:flex-row flex-col justify-center gap-5'>
      <Dialog>
        <DialogTrigger><BsFilterRight className="ml-4 md:hidden text-2xl" /></DialogTrigger>
        <DialogContent>
          <div>
      <div className='text-xs font-medium flex p-2 flex-col gap-2'>
        <h1 className='text-sm font-black'>Category Types</h1>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between gap-5 items-center'>
            <div className='flex gap-1 items-center'>
              <input type="radio" onChange={e => getTourValue(e)} id="Tours" name="category" value="Tours" />
              <label htmlFor="Tours">Tours</label>
            </div>
            <p>85</p>
          </div>
          <div className='flex justify-between gap-5 items-center'>
            <div className='flex gap-1 items-center'>
              <input type="radio"  onChange={e => getTourValue(e)} id="Attractions" name="category" value="Attractions" />
              <label htmlFor="Attractions">Attractions</label>
            </div>
            <p>42</p>
          </div>
          <div className='flex justify-between gap-5 items-center'>
            <div className='flex gap-1 items-center'>
              <input type="radio"  onChange={e => getTourValue(e)} id="Day Trips" name="category" value="Day Trips" />
              <label htmlFor="Day Trips">Day Trips</label>
            </div>
            <p>12</p>
          </div>
          <div className='flex justify-between gap-5 items-center'>
            <div className='flex gap-1 items-center'>
              <input type="radio"  onChange={e => getTourValue(e)} id="Outdoor Activities" name="category" value="Outdoor Activities" />
              <label htmlFor="Outdoor Activities">Outdoor Activities</label>
            </div>
            <p>5</p>
          </div>
          <div className='flex justify-between gap-5 items-center'>
            <div className='flex gap-1 items-center'>
              <input type="radio"  onChange={e => getTourValue(e  )} id="Concert and Shows" name="category" value="Concert and Shows" />
              <label htmlFor="Concert and Shows">Concert and Shows</label>
            </div>
            <p>575</p>
          </div>
        </div>
      </div>
      <div className='p-2'>
        <h1 className='text-sm font-black'>Price</h1>
      </div>
      <div className='mt-5 flex flex-col gap-2 p-2'>
        <h1 className='text-sm font-black'>Other</h1>
        <div className='text-xs font-medium flex gap-1 items-center'>
          <input onClick={travelDuration} type="radio" id="Cancel" name="other" value="Cancel" />
          <label htmlFor="Cancel">Free Cancellation</label>
        </div>
      </div>
      <div className='text-xs mt-5 font-medium flex p-2 flex-col gap-2'>
        <h1 className='text-sm font-black'>Travel Duration</h1>
        <div className='flex justify-between gap-5 items-center'>
          <div className='flex gap-1 items-center'>
            <input onClick={travelDuration} type="radio" id="1hour" name="duration" value="1" />
            <label htmlFor="1hour">Up to 1 hour</label>
          </div>
          <p>40</p>
        </div>
        <div className='flex justify-between gap-5 items-center'>
          <div className='flex gap-1 items-center'>
            <input onClick={travelDuration} type="radio" id="DayTour" name="duration" value="DayTour" />
            <label htmlFor="DayTour">Day Tour</label>
          </div>
          <p>70</p>
        </div>
        <div className='flex justify-between gap-5 items-center'>
          <div className='flex gap-1 items-center'>
            <input onClick={travelDuration} type="radio" id="13" name="duration" value="13" />
            <label htmlFor="13">1 day 3 days</label>
          </div>
          <p>35</p>
        </div>
        <div className='flex justify-between gap-5 items-center'>
          <div className='flex gap-1 items-center'>
            <input onClick={travelDuration} type="radio" id="5Days" name="duration" value="5" />
            <label htmlFor="5Days">Up to 5 days</label>
          </div>
          <p>55</p>
        </div>
        <div className='flex justify-between gap-5 items-center'>
          <div className='flex gap-1 items-center'>
            <input onClick={travelDuration} type="radio" id="1Month" name="duration" value="AMonth" />
            <label htmlFor="1Month">Up To 1 Month</label>
          </div>
          <p>15</p>
        </div>
      </div>
          </div>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Filter Selection
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
      <div className='hidden md:block'>
      <Deals />
      </div>
      <Properties />
    </div>
  )
}

export default LocationResults