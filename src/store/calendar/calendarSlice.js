import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const temp = {
    _id: new Date().getTime(),
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
        onAddNewEvent: (state, { payload }) => {
            state.events.push( payload )
            state.activeEvent = null;
        },
        onUpdateEvent: (state, { payload }) => {
            state.events = state.events.map( event => {

                if ( event._id === payload._id ){
                    return payload
                }

                return event
            })
            state.activeEvent = null;
        },
        onDeleteEvent: ( state ) => {
            state.events = state.events.filter( event => event._id !== state.activeEvent._id )
            state.activeEvent = null
        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;