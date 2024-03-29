"use client"
import React from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Button } from '../ui/button'

const Transportation = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isSecondOpen, setIsSecondOpen] = React.useState(false)
  const [isThirdOpen, setIsThirdOpen] = React.useState(false)
  return (
    <div className='flex gap-5 flex-col'>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] border rounded-md space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
            Can I rent a car without a credit card?
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md px-4 py-2  text-sm ">
            The best time to book a flight depends on a variety of factors, including the destination, time of year, and how flexible your travel dates are.In general, it is best to book flights at least a few weeks in advance to get the best deals.
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          open={isSecondOpen}
          onOpenChange={setIsSecondOpen}
          className="w-[350px] border rounded-md space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
            Can i return the car?
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md px-4 py-2  text-sm ">
            The best time to book a flight depends on a variety of factors, including the destination, time of year, and how flexible your travel dates are.In general, it is best to book flights at least a few weeks in advance to get the best deals.
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          open={isThirdOpen}
          onOpenChange={setIsThirdOpen}
          className="w-[350px] border rounded-md space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
            What happens if i need to checkout early?
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md px-4 py-2  text-sm ">
            The best time to book a flight depends on a variety of factors, including the destination, time of year, and how flexible your travel dates are.In general, it is best to book flights at least a few weeks in advance to get the best deals.
            </div>
          </CollapsibleContent>
        </Collapsible>
    </div>
  )
}

export default Transportation