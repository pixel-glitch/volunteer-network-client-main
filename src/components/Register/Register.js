import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Register.css';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
import RegisterVolunteer from '../RegisterVolunteer/RegisterVolunteer';


const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { registerId } = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [volunteerInfo, setVolunteerInfo] = useState([])

    const history = useHistory()


    useEffect(() => {
        fetch('https://stormy-temple-22049.herokuapp.com/allEvents')
            .then(response => response.json())
            .then(data => {
                const registerEvent = data.find(event => event._id === registerId)
                setVolunteerInfo(registerEvent)
            })
    }, [registerId])


    const onSubmit = data => {

        const volunteerDetails = { ...loggedInUser, volunteerEvent: data.event, registrationDate: data.date, desicription: data.desicription }

        fetch('https://stormy-temple-22049.herokuapp.com/addVolunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerDetails)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Registration succeeded')
                    history.push('/registerVolunteer')
                }
            })
    }

    return (
        <div>

            <img className="icon-img" src="https://i.ibb.co/vJ36rM4/Group-1329.png" alt="" />
            <Card className="card-style" >

                <div className="my-5">
                    <h3>Register as a Volunteer</h3>
                    <form className="volunteer-form text-center" onSubmit={handleSubmit(onSubmit)}>

                        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                        {errors.name && <span className="error">Name is required</span>}

                        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="UserName or Email" />
                        {errors.email && <span className="error">Email is required</span>}

                        <input name="date" placeholder="Date: dd/MM/yyyy" ref={register({ required: true, pattern: /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/i })} />
                        {errors.date && <span className="error">Valid dd/MM/yyyy Format is required</span>}

                        <input name="desicription" ref={register({ required: true })} placeholder="Desicription" />
                        {errors.desicription && <span className="error">Desicription is required</span>}

                        <input name="event" defaultValue={volunteerInfo.name} ref={register({ required: true })} placeholder="Event Name" />
                        {errors.event && <span className="error">Event is required</span>}

                        <input className="commonBgColor" type="submit" value="Registration" style={{ color: '#fff' }} />
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default Register;