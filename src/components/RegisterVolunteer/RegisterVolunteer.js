import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import RegisterVolunteerInfo from '../RegisterVolunteerInfo/RegisterVolunteerInfo';

const RegisterVolunteer = () => {
    const [register, setRegister] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://stormy-temple-22049.herokuapp.com/volunteer?email=' + loggedInUser.email)
            .then(response => response.json())
            .then(data => setRegister(data))
    }, [register])

    const deleteEvent = (id) => {
        fetch(`https://stormy-temple-22049.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    console.log(result)
                }

            })
    }

    return (
        <div className="container">
            <div className="row">
                {
                    register.map(totalRegisters => <RegisterVolunteerInfo
                        totalRegisters={totalRegisters}
                        key={totalRegisters._id}
                        deleteEvent={deleteEvent}
                    ></RegisterVolunteerInfo>)
                }
            </div>
        </div>
    );
};

export default RegisterVolunteer;