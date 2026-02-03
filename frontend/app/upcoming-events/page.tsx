//The colours and states used here are just for the proce of building. They'll be changed into standard project variables once the section takes shape.
// The states used here wasn't gotten from any context. It's a short term helper to finish the section, after which all the logic and data would be moved to an appropriate context. 

'use client'
import { useState, useContext } from "react";
import { ViewMore } from "./viewMore";
import { useEvents } from "@/lib/contexts"; 

export const Events = () => {
    const {isDesktop, setIsDesktop} = useEvents();
    
    
  return (
    <section className= {`font-space w-full h-screen py-7 bg-[#1E293B] text-white flex flex-col justify-between items-center px-9 lg:px-18`}>
        <div className = {`flex w-full justify-center lg:justify-between items-center`}>
            <h1 className="font-bold text-3xl">Upcoming Events</h1>
            {isDesktop && 
                <ViewMore />
            }
        </div>
        <div className="flex flex-col lg:flex-row gap-y-11.25 lg:gap-x-11.25 ">
            <article className="">Hiii</article>
            <article className="">Hiii</article>
            <article className="">Hiii</article>
            
        </div>
        {!isDesktop && 
            <div className="w-full text-center">
                <ViewMore />
            </div>
        }

    </section>
  )
}

