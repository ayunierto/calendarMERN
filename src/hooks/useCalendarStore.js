import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store/calendar/calendarSlice"

export const useCalendarStore = () => {
    
    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector( state => state.calendar)
    
    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = ( calendarEvent ) => {
        // todo: llegar al backend

        // if good
        if ( calendarEvent._id ) {
            // update
        } else {
            // store 
            dispatch( onAddNewEvent({
                ...calendarEvent,
                _id: new Date().getTime()
            }) )
        }
    }
    
    return {
        //* Propietes
        events,
        activeEvent,

        //* Methods
        setActiveEvent,
        startSavingEvent,
    }
}
