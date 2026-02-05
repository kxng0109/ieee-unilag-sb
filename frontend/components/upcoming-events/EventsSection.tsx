'use client'
import { useState, useContext } from "react";
import EventCard from "./EventCard";
import { EventCardType } from "@/lib/types";

export const EventsSection = () => {
    const handleViewMore = () => {}
    // test data
    const eventsArray: EventCardType[] = [
        {
            id: '1',
            image: '/Events/images/event1.png',
            title: 'AI & Machine Learning Workshop',
            description: 'Dive deep into neural networks, deep learning frameworks, and practical AI applications with industry experts from leading tech companies.',
            location: 'Engineering complex, Unilag'
        },
        {
            id: '2',
            image: '/Events/images/event2.png',
            title: 'IoT Innovation Challenge',
            description: '48-hour hackathon focused on building smart city solutions using IoT sensors, edge computing, and cloud platforms.',
            location: 'Innovation Hub, Unilag'
        },
        {
            id: '3',
            image: '/Events/images/event3.png',
            title: 'Career Tech Fair ',
            description: '48-hour hackathon focused on building smart city solutions using IoT sensors, edge computing, and cloud platforms.',
            location: 'Engineering Auditorium'
        }
    ]
    
  return (
    <section className= 'font-space w-full py-20 lg:pt-8 px-6 md:px-12 lg:px-17 bg-[#1E293B] text-white flex flex-col gap-y-15 lg:gap-y-24 justify-between items-center'>
        <div className = 'flex w-full justify-center lg:justify-between items-center'>
            <h1 className="font-bold text-3xl">Upcoming Events</h1>
            <button 
            type="button"
            className= 'font-space font-medium hidden lg:block lg:text-[20px] text-[#00D9FF]'
            onClick={handleViewMore}>
                View all Events
            </button>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-y-11.25 lg:gap-x-11.25 ">
            {eventsArray.map((event) => (
                <EventCard
                key={event.id}
                data={event}
                />
            ))}
        </div>
        
        <button 
        type="button"
        className= 'font-space font-medium lg:hidden text-[#00D9FF]'
        onClick={handleViewMore}>
            View all Events
        </button>
        

    </section>
  )
}

