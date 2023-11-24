import React from 'react'


type Props = {}

const General = (props: Props) => {
  return (
    <div className='flex gap-5 flex-col'>
            <div className='rounded-lg p-2 border'>
                <Collapsible trigger="Can I rent a car without a credit card?">
                    <p>The best time to book a flight depends on a variety of factors, including the destination, time of year, and how flexible your travel dates are.In general, it is best to book flights at least a few weeks in advance to get the best deals.</p>
                </Collapsible>
            </div>   
            <div className='rounded-lg p-2 border'>
                <Collapsible trigger="Can i return the car?">
                    <p>The best time to book a flight depends on a variety of factors, including the destination, time of year, and how flexible your travel dates are.In general, it is best to book flights at least a few weeks in advance to get the best deals.</p>
                </Collapsible>
            </div>
            <div className='rounded-lg p-2 border'>
                <Collapsible trigger="What happens if i need to check out early?">
                    <p>The best time to book a flight depends on a variety of factors, including the destination, time of year, and how flexible your travel dates are.In general, it is best to book flights at least a few weeks in advance to get the best deals.</p>
                </Collapsible>
            </div>
    </div>
  )
}

export default General