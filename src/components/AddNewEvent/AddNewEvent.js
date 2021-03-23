import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AddNewEvent.css'

const AddNewEvent = () => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory()

    const onSubmit = data => {
        const newEvent = { name: data.eventName, eventDate: data.date, desicription: data.desicription }

        fetch('https://stormy-temple-22049.herokuapp.com/singleEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Event Added Successfully')
                    history.push('/')
                }
            })
            .catch((error) => {
                alert('Try Again')
            });
    }

    return (
        <div>
            <Card className="card-style" style={{ border: 'none' }}>
                <div className="my-5">
                    <h3>Add Event</h3>
                    <form className="addEvent text-center " onSubmit={handleSubmit(onSubmit)}>

                        <input name="eventName" ref={register({ required: true })} placeholder="Event Title" />
                        {errors.eventName && <span className="error">Event Name is required</span>}

                        <input name="date" placeholder="Date: dd/MM/yyyy" ref={register({ required: true, pattern: /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/i })} />
                        {errors.date && <span className="error">Valid dd/MM/yyyy Format is required</span>}

                        <input name="desicription" ref={register({ required: true })} placeholder="Desicription" />
                        {errors.desicription && <span className="error">Desicription is required</span>}

                        <input className="commonBgColor" type="submit" value="Add Event" style={{ color: '#fff' }} />
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default AddNewEvent;