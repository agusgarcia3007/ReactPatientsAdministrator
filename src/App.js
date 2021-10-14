import React, { useState } from 'react';
import Form from './components/form';

const App = () => {

  const [appointments, setAppointments] = useState([]);

  const getAppointment = appointment => {
      setAppointments([
        ...appointments,
        appointment
      ])
  }

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
            
          </div>
        </div>
      </div>
    </>  
  )
}

export default App;
