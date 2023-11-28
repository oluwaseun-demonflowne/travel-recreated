import React from 'react';

const Deals = () => {
  return (
    <div className='px-4 md:px-0'>
      <div className='text-sm font-medium flex p-2 flex-col gap-2'>
        <h1 className='text-base font-black'>Deals</h1>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between gap-5 items-center'>
            <div className='flex gap-1 items-center'>
              <input type="checkbox" id="cancel" name="category" value="freeCancel" />
              <label htmlFor="cancel">Free cancellation</label>
            </div>
          </div>
          <div className='flex justify-between gap-5 items-center'>
            <div className='flex gap-1 items-center'>
              <input type="checkbox" id="Reserve" name="category" value="ReserveNow" />
              <label htmlFor="Reserve">Reserve now, pay at stay</label>
            </div>
          </div>
          <div className='flex justify-between gap-5 items-center'>
            <div className='flex gap-1 items-center'>
              <input type="checkbox" id="Special" name="category" value="Special" />
              <label htmlFor="Special">Properties with special offers</label>
            </div>
          </div>
        </div>
      </div>
      <div className='text-sm flex p-2 flex-col font-medium'>
        <div className='py-2 '>
          <h1 className='text-base font-black'>Popular Filters</h1>
        </div>
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between  items-center'>
                  <div className='flex gap-1 items-center'>
                    <input type="checkbox" id="breakfast" name="category" value="breakfast" />
                    <label htmlFor="breakfast">Breakfast Included</label>
                  </div>
                  <p>40</p>
            </div>
            <div className='flex justify-between gap-5 items-center'>
                  <div className='flex gap-1 items-center'>
                    <input type="checkbox" id="romantic" name="category" value="romantic" />
                    <label htmlFor="romantic">Romantic</label>
                  </div>
                  <p>40</p>
            </div>
            <div className='flex justify-between gap-5 items-center'>
                  <div className='flex gap-1 items-center'>
                    <input type="checkbox" id="airport" name="category" value="airport" />
                    <label htmlFor="airport">Airport Transfer</label>
                  </div>
                  <p>40</p>
            </div>
            <div className='flex justify-between gap-5 items-center'>
                  <div className='flex gap-1 items-center'>
                    <input type="checkbox" id="WiFi" name="category" value="WiFi" />
                    <label htmlFor="WiFi">WiFi Included</label>
                  </div>
                  <p>40</p>
            </div>
            <div className='flex justify-between gap-5 items-center'>
                  <div className='flex gap-1 items-center'>
                    <input type="checkbox" id="Star" name="category" value="Star" />
                    <label htmlFor="Star">5 Star</label>
                  </div>
                  <p>40</p>
            </div>
        </div>
      </div>
      <div className='flex mt-5 flex-col gap-2'>
        <h1 className='text-base font-black'>Star Rating</h1>
        <div className='flex justify-between'>
            <button className=' text-blue-700 bg-blue-300 w-9 h-9 rounded-full'>1</button>
            <button className=' text-blue-700 bg-blue-300 w-9 h-9 rounded-full'>2</button>
            <button className=' text-blue-700 bg-blue-300 w-9 h-9 rounded-full'>3</button>
            <button className=' text-blue-700 bg-blue-300 w-9 h-9 rounded-full'>4</button>
            <button className=' text-blue-700 bg-blue-300 w-9 h-9 rounded-full'>5</button>
        </div>
      </div>
      <div className='text-sm mt-5 font-medium flex p-2 flex-col gap-2'>
        <h1 className='text-base font-black'>Hotel Type</h1>
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between gap-5 items-center'>
              <div className='flex gap-1 items-center'>
                <input type="radio" id="budget" name="duration" value="budget" />
                <label htmlFor="budget">Budget</label>
              </div>
              <p>40</p>
            </div>
            <div className='flex justify-between gap-5 items-center'>
              <div className='flex gap-1 items-center'>
                <input type="radio" id="mid-range" name="duration" value="mid-range" />
                <label htmlFor="mid-range">Mid-range</label>
              </div>
              <p>40</p>
            </div>
            <div className='flex justify-between gap-5 items-center'>
              <div className='flex gap-1 items-center'>
                <input type="radio" id="luxury" name="duration" value="luxury" />
                <label htmlFor="luxury">Luxury</label>
              </div>
              <p>40</p>
            </div>
            <div className='flex justify-between gap-5 items-center'>
              <div className='flex gap-1 items-center'>
                <input type="radio" id="family" name="duration" value="family" />
                <label htmlFor="family">Family-friendly</label>
              </div>
              <p>40</p>
            </div>
            <div className='flex justify-between gap-5 items-center'>
              <div className='flex gap-1 items-center'>
                <input type="radio" id="buisness" name="duration" value="buisness" />
                <label htmlFor="buisness">Buisness</label>
              </div>
              <p>40</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
