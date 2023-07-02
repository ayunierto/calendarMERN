import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const temp = {
    title: 'Birthday',
    notes: 'buy kake',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
        _id: 'asd123',
        name: 'Jhon Doe'
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [ temp ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload } ) => {
            state.activeEvent = payload
        },
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;