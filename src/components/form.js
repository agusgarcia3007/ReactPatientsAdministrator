import React, { useState }from 'react'
import uuid from 'react-uuid';

const Form = () => {

    //state for appointments
    const [appointment, setAppointment] = useState({
        patient: '',
        email:'',
        date:'',
        time:'',
        number:'',
        appointment_reason:''
    })

    const [error, setError] = useState(false)

    //input value changes
    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name] : e.target.value,
        })
    }


    const {patient, email, date, time, number, appointment_reason} = appointment

    //submiting form
    const appointmentSubmit = e => {
        e.preventDefault()

        //form validation 
       if(patient.trim() === '' || email.trim() === '' || date.trim() === '' || time.trim() === '' || number.trim() === '' || appointment_reason.trim() === ''){
           setError(true);
       }}

       
    // setError(false);

       //get an id
       appointment.id = uuid();
    //    console.log(appointment);

    return ( 
        <>
            <h2>Get an Appointment</h2>

                {error ? <p className='alerta-error'>All fields are required</p> : null}

            <form
                onSubmit={() => appointmentSubmit()}
            >
                <label>Patient's Name</label>
                <input
                 type="text" 
                 name='Patient'
                 className='u-full-width'
                 placeholder="Patient's Name"
                 onChange={handleChange}
                 value={patient}
                 />

                <label>Email</label>
                <input
                 type="email" 
                 name='email'
                 className='u-full-width'
                 placeholder='Email'
                 onChange={handleChange}
                 value={email}
                 />

                <label>Date</label>
                <input
                 type="date" 
                 name='date'
                 className='u-full-width'
                 onChange={handleChange}
                 value={date}
                 />

                <label>Time</label>
                <input
                 type="time" 
                 name='time'
                 className='u-full-width'
                 onChange={handleChange}
                 value={time}
                 />

                <label>Phone Number</label>
                <input
                 type="number" 
                 name='number'
                 className='u-full-width'
                 placeholder='Numero de Telefono'
                 onChange={handleChange}
                 value={number}
                 />

                <label>Appointment reason</label>
                <textarea cols="30" rows="10" name='appointment_reason' className="u-full-width" placeholder='Motivo de Consulta' onChange={handleChange} value={appointment_reason}></textarea>

                <button
                    type='submit'
                    className="u-full-width button-primary"
                >Get Appointment</button>                  
            </form>

        </>
     );
}
 
export default Form;