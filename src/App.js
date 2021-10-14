import React, { useState, useEffect } from 'react';
import Form from './components/form';
import Appointment from './components/Appointment';

const App = () => {


  //save appointments in local storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
    if(!initialAppointments){
      initialAppointments = [];
    }

  const [appointments, setAppointments] = useState(initialAppointments);

  useEffect(() => {
    initialAppointments ?
    localStorage.setItem('appointments', JSON.stringify(appointments)) :
    localStorage.setItem('appointments', JSON.stringify([]));
  },[appointments]);

  const getAppointment = appointment => {
      setAppointments([
        ...appointments,
        appointment
      ])
  }

  //delete an appointment
  const delAppointment = id => {
    const newAppointment = appointments.filter(appointment => appointment.id !== id);
    setAppointments(newAppointment);
  };

  //conditional message
  const title = appointments.length === 0 ? 'Not Appointments yet' : 'Appointments';

  return(
    <>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
            getAppointment={getAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment 
                key={appointment.id}
                appointment={appointment}
                delAppointment={delAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>  
  )
}

export default App;
