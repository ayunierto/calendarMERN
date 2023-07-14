import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice"

export const useCalendarStore = () => {
    
    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector( state => state.calendar)
    
    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = ( calendarEvent ) => {
        // todo: llegar al backend

        // if good
        // eslint-disable-next-line no-extra-boolean-cast
        if ( !!calendarEvent._id ) {
            // update
            dispatch( onUpdateEvent( calendarEvent ) )
        } else {
            // store 
            dispatch( onAddNewEvent({
                ...calendarEvent,
                _id: new Date().getTime()
            }) )
        }
    }

    const startDeleteEvent = () => {
        dispatch( onDeleteEvent() )
    }
    
    return {
        //* Propietes
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //* Methods
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent,
    }
}
