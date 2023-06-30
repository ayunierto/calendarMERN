import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek,getDay, addHours } from 'date-fns'
import enUS from 'date-fns/locale/en-US'

import { NavBar } from "../components/NavBar"

import "react-big-calendar/lib/css/react-big-calendar.css"

export const CalendarPage = () => {

    const locales = {
        'en-US': enUS,
      }

      const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
      })

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

    return (
        <>
            <NavBar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
            />
        </>
    )
}