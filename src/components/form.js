import React, { useState }from 'react'
import uuid from 'react-uuid'

const Form = ({getAppointment}) => {

    //state para turnos
    const [appointment, setAppointment] = useState({
        patient: '',
        email:'',
        date:'',
        time:'',
        number:'',
        appointmentReason:''
    });

    const [error, setError] = useState(false);

    const {patient, email, date, time, number, appointmentReason} = appointment;

    
    const appointmentSubmit = e => {
        e.preventDefault();

        //validating form
        if(patient.trim()==='' ||
           email.trim()==='' || 
           date.trim()==='' ||
           time.trim()==='' ||
           number.trim()===''||
           appointmentReason.trim()===''
           ){
            setError(true);
            return;
        }
           
         setError(false);

        //get an ID
        appointment.id = uuid();

        //create the appointment
        getAppointment(appointment);

        //reset te form
        setAppointment({
            patient:'',
            email:'',
            date:'',
            time:'',
            number:'',
            appointmentReason:''
        })
    }




    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name] : e.target.value,
        })
    };

    return ( 
        <>
            <h2>Get an Appointment</h2>
            {error ? <p className='alerta-error'>All fields are required</p> :null}


            <form onSubmit={appointmentSubmit}>
                <label>Patient's Name</label>
                <input
                 type="text" 
                 name='patient'
                 className='u-full-width'
                 placeholder="Patient's Name"
                 onChange={handleChange}
                 />

                <label>Email</label>
                <input
                 type="email" 
                 name='email'
                 className='u-full-width'
                 placeholder='Email'
                 onChange={handleChange}
                 />

                <label>Date</label>
                <input
                 type="date" 
                 name='date'
                 className='u-full-width'
                 onChange={handleChange}
                 />

                <label>Time</label>
                <input
                 type="time" 
                 name='time'
                 className='u-full-width'
                 onChange={handleChange}
                 />

                <label>Phone Number</label>
                <input
                 type="number" 
                 name='number'
                 className='u-full-width'
                 placeholder='phone number'
                 onChange={handleChange}
                 />

                <label>Appointment reason</label>
                <textarea cols="30" rows="10" name='appointmentReason' className="u-full-width" placeholder='appointment reason' onChange={handleChange}></textarea>

                <button
                    type='submit'
                    className="u-full-width button-primary"
                
                >Get Appointment</button>                  
            </form>

        </>
     );
}
 
export default Form;