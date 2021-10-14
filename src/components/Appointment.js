import React from 'react'

const Appointment = ({appointment, delAppointment}) => (
    <div className="appointment">
        <p>Patient: <span>{appointment.patient}</span></p>
        <p>Email: <span>{appointment.email}</span></p>
        <p>Date: <span>{appointment.date}</span></p>
        <p>Time: <span>{appointment.time}</span></p>
        <p>Number: <span>{appointment.number}</span></p>
        <p>appointmentReason: <span>{appointment.appointmentReason}</span></p>
        <button 
        className="button eliminar u-full-width"
        onClick={() => delAppointment(appointment.id)}
        >Delete &times;</button>

    </div>
)
export default Appointment;