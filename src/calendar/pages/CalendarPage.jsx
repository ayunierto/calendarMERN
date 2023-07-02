import { Calendar } from 'react-big-calendar'
import { addHours } from 'date-fns'

import { NavBar } from "../components/NavBar"
import { localizer } from '../../helpers'
import { CalendarEvent } from '../components/CalendarEvent'
import { useState } from 'react'
import { CalendarModal } from '../components/CalendarModal'


export const CalendarPage = () => {

    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'week')

    const events = [{
        title: 'Birthday',
        notes: 'buy kake',
        start: new Date(),
        end: addHours( new Date(), 2 ),
        bgColor: '#fafafa',
        user: {
            _id: 'asd123',
            name: 'Jhon Doe'
        }
    }]

    const eventStyleGetter = ( event, start, end, isSelected ) => {

        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }

        return {
            style
        }
    }

    const onDoubleClick = ( event ) => {
        console.log({ onDoubleClick: event })
    }

    const onSelect = ( event ) => {
        console.log({ click: event })
    }

    const onViewChanged = ( event ) => {
        // console.log({ viewCHanged: event })
        localStorage.setItem('lastView', event)
    }

    return (
        <>
            <NavBar />

            <Calendar
                localizer={ localizer }
                events={ events }
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChanged }
            />

            <CalendarModal />
        </>
    )
}