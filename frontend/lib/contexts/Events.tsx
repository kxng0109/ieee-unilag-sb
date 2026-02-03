'use client'
import { createContext, useState, useContext, type ReactNode  } from "react";
import {  type EventContextType } from '../types/eventTypes';

export const EventsContext = createContext<EventContextType | undefined>(undefined);
export const EventsProvider = ({ children } : { children:ReactNode }) => {
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    return (
        <EventsContext.Provider value={{isDesktop, setIsDesktop}}>
            {children}
        </EventsContext.Provider>
    )
}
export const useEvents = () => {
    const context = useContext(EventsContext);
    if (!context) throw new Error('useEvents must be used inside the Provider.');
    return context;
}