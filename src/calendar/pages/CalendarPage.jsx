import { Calendar } from 'react-big-calendar'
import { addHours } from 'date-fns'

import { NavBar } from "../components/NavBar"
import { localizer } from '../../helpers'


export const CalendarPage = () => {

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
        console.log({ event, start, end, isSelected })

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

    return (
        <>
            <NavBar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                eventPropGetter={ eventStyleGetter }
            />
        </>
    )
}