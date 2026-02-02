//The colours and states used here are just for the proce of building. They'll be changed into standard project variables once the section takes shape.
// The states used here wasn't gotten from any context. It's a short term helper to finish the section, after which all the logic and data would be moved to an appropriate context. 

'use client'
import { a } from "motion/react-m"
import { useState } from "react"

export const Events = () => {
    const [isViewAll, setIsViewAll] = useState<boolean>(false)
  return (
    <section className="w-full h-screen bg-[#1E293B] text-white">
        <div className="flex w-full justify-between items-center">
            <h1>Upcoming events</h1>
            {isViewAll && 
                <a>View all Events</a>
            }
        </div>

    </section>
  )
}

