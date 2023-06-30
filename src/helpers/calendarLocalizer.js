import { dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek,getDay } from 'date-fns'
import enUS from 'date-fns/locale/en-US'

import "react-big-calendar/lib/css/react-big-calendar.css"

const locales = {
    'en-US': enUS,
  }

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})