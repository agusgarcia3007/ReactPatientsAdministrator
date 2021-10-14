import React, { useState }from 'react'


const Form = () => {

    //state para turnos
    const [appointment, setAppointment] = useState({
        patient: '',
        email:'',
        date:'',
        time:'',
        number:'',
        appointment_reason:''
    });

    const [error, setError] = useState(false);

    const {patient, email, date, time, number, appointment_reason} = appointment;

    //validating form
    const appointmentSubmit = e => {
        e.preventDefault();

        if(patient.trim()==='' ||
           email.trim()==='' || 
           date.trim()==='' ||
           time.trim()==='' ||
           number.trim()===''||
           appointment_reason.trim()===''
           ){
               console.log('error');
            setError(true);
            return;
        }
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

            {error ? <p></p> :null}

            <form onSubmit={() => appointmentSubmit()}>
                <label>Patient's Name</label>
                <input
                 type="text" 
                 name='Patient'
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
                 placeholder='Numero de Telefono'
                 onChange={handleChange}
                 />

                <label>Appointment reason</label>
                <textarea cols="30" rows="10" name='appointment_reason' className="u-full-width" placeholder='Motivo de Consulta' onChange={handleChange}></textarea>

                <button
                    type='submit'
                    className="u-full-width button-primary"
                
                >Get Appointment</button>                  
            </form>

        </>
     );
}
 
export default Form;