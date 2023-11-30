"use client"
import React from 'react'
import Deals from './Deals'
import Cars from './Cars'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { BsFilterRight } from 'react-icons/bs'

const HotelResult = () => {

  const searchParams = useSearchParams()
  const location = searchParams.get('location')
  const {} = useQuery({    
    queryKey: [`HotelSearchId${location}`],
    queryFn: () =>
      axios
      .get(`/api/searchFeed/car/${location}`)
        .then((res) => res.data),
  });  

  return (
        <div className='flex md:flex-row flex-col justify-center gap-5'>
          <Dialog>
            <DialogTrigger><BsFilterRight className="ml-4 md:hidden text-2xl" /></DialogTrigger>
            <DialogContent>
              <div>
                <div className='text-xs font-medium flex p-2 flex-col gap-2'>
                    <h1 className='text-sm font-black'>Deals</h1>
                    <div className='flex flex-col gap-1'>
                      <div className='flex justify-between gap-5 items-center'>
                        <div className='flex gap-1 items-center'>
                          <input type="radio" id="airport" name="category" value="airport" />
                          <label htmlFor="airport">Airport (meet & greet)</label>
                        </div>
                      </div>
                      <div className='flex justify-between gap-5 items-center'>
                        <div className='flex gap-1 items-center'>
                          <input type="radio" id="shuttle" name="category" value="shuttle" />
                          <label htmlFor="shuttle">Airport (shuttle)</label>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='text-xs flex p-2 flex-col font-medium'>
                  <div className='py-2 '>
                    <h1 className='text-sm font-black'>Car Category</h1>
                  </div>
                  <div className='flex flex-col gap-1'>
                      <div className='flex justify-between  items-center'>
                            <div className='flex gap-1 items-center'>
                              <input type="radio" id="small" name="categorysize" value="Small" />
                              <label htmlFor="small">Small</label>
                            </div>
                            <p>40</p>
                      </div>
                      <div className='flex justify-between gap-5 items-center'>
                            <div className='flex gap-1 items-center'>
                              <input type="radio" id="medium" name="categorysize" value="Medium" />
                              <label htmlFor="medium">Medium</label>
                            </div>
                            <p>40</p>
                      </div>
                      <div className='flex justify-between gap-5 items-center'>
                            <div className='flex gap-1 items-center'>
                              <input type="radio" id="large" name="categorysize" value="Large" />
                              <label htmlFor="large">Large</label>
                            </div>
                            <p>40</p>
                      </div>
                      <div className='flex justify-between gap-5 items-center'>
                            <div className='flex gap-1 items-center'>
                              <input type="radio" id="premium" name="categorysize" value="Premium" />
                              <label htmlFor="premium">Premium</label>
                            </div>
                            <p>40</p>
                      </div>
                      <div className='flex justify-between gap-5 items-center'>
                            <div className='flex gap-1 items-center'>
                              <input type="radio" id="suv" name="categorysize" value="SUV" />
                              <label htmlFor="suv">SUV</label>
                            </div>
                            <p>40</p>
                      </div>
                  </div>
                </div>
                 <div className='text-xs mt-5 font-medium flex p-2 flex-col gap-2'>
                    <h1 className='text-sm font-black'>Mileage/Kilometres</h1>
                    <div className='flex flex-col gap-1'>
                      <div className='flex justify-between gap-5 items-center'>
                        <div className='flex gap-1 items-center'>
                          <input type="radio" id="limited" name="duration" value="Limited" />
                          <label htmlFor="limited">Limited</label>
                        </div>
                        <p>40</p>
                      </div>
                      <div className='flex justify-between gap-5 items-center'>
                        <div className='flex gap-1 items-center'>
                          <input type="radio" id="unlimited" name="duration" value="Unlimited" />
                          <label htmlFor="unlimited">Unlimited</label>
                        </div>
                        <p>40</p>
                      </div>
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
          <Cars />
        </div>
  )
}

export default HotelResult