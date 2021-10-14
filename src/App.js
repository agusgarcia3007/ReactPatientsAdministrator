import React, { useState } from 'react';
import Form from './components/form';
import Appointment from './components/Appointment';

const App = () => {

  const [appointments, setAppointments] = useState([]);

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
            <h2>Appointments</h2>
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
