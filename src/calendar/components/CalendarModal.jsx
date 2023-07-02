import Modal from 'react-modal'

import './CalendarModal.css'
import { useState } from 'react';
import { addHours } from 'date-fns';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState( true )

    const [formValues, setFormValues] = useState({
        title: "John",
        notes: "Doe",
        start: new Date(),
        end: addHours( new Date(), 2 )
    })

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        })
    }
    const onDateChanged = ( date, changing) => {
        setFormValues({
            ...formValues,
            [ changing ]: date
        })
    }

    const onCloseModal = () => {
        // console.log('cerrando modal')
        setIsOpen( false )
    }

    return (
        <Modal
            isOpen={ isOpen }
            onRequestClose={ onCloseModal }
            style={ customStyles }
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label><br />
                    <DatePicker 
                        selected={ formValues.start  } 
                        onChange={ ( date ) => onDateChanged( date, 'start' ) } 
                        dateFormat="Pp"
                        className='form-control d-block w-100'
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label><br />
                    <DatePicker 
                        minDate={ formValues.start }
                        selected={ formValues.end  } 
                        onChange={ ( date ) => onDateChanged( date, 'end' ) } 
                        dateFormat="Pp"
                        className='form-control d-block w-100'
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ formValues.title }
                        onChange={ onInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={ formValues.notes }
                        onChange={ onInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}