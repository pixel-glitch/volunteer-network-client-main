import React, { useEffect, useState } from 'react';

const RegisterVolunteerInfo = (props) => {

    const { volunteerEvent, registrationDate } = props.totalRegisters;
    const [img, setImg] = useState([])

    useEffect(() => {
        fetch('https://stormy-temple-22049.herokuapp.com/allEvents')
            .then(response => response.json())
            .then(data => {
                const registerEventImg = data.find(eventImg => eventImg.name.toLowerCase() === volunteerEvent.toLowerCase())
                setImg(registerEventImg)
            })
    }, [])

    return (
        <div className="col-md-6">
            <div className="my-4">
                <div className="card mb-3" style={{ border: 'none' }} >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={img.img} alt="" className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8 ">
                            <div className="card-body">
                                <h5 className="card-title">{volunteerEvent}</h5>
                                <p className="card-text">{registrationDate}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button onClick={() => props.deleteEvent(props.totalRegisters._id)} type="button" className="btn btn-light">Cancel</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default RegisterVolunteerInfo;