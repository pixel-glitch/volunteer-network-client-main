import React, { useEffect } from 'react';
import { useState } from 'react';
import VolunteerType from '../VolunteerType/VolunteerType';

const Volunteer = () => {
    const [volunteer, setVolunteer] = useState([])

    useEffect(() => {
        fetch('https://stormy-temple-22049.herokuapp.com/allEvents')
            .then(response => response.json())
            .then(data => setVolunteer(data))
    }, [])

    return (

        <div className="container">
            <div className="row mt-3">
                {
                    volunteer.map(volunteer => <VolunteerType volunteer={volunteer} key={volunteer._id}></VolunteerType>)
                }
            </div>
        </div>
    );
};

export default Volunteer;