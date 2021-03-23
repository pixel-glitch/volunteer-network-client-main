import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllRegVolunteer = () => {
    const [register, setRegister] = useState([])

    useEffect(() => {

        fetch('https://stormy-temple-22049.herokuapp.com/allVolunteer')
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
        <div className="container my-3">
            <h2>Volunteer register list</h2>
            <div className="container">
                <Table>
                    <thead>
                        <tr className="text-center">
                            <th>Name</th>
                            <th></th>
                            <th>Email ID</th>
                            <th></th>
                            <th>Registration Date</th>
                            <th>Volunteer List</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </Table>
            </div>
            {
                register.map(reg =>
                    <div className="container" key={reg._id}>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td> {reg.name}</td>
                                    <td>{reg.email}</td>
                                    <td>{reg.registrationDate}</td>
                                    <td>{reg.volunteerEvent}</td>
                                    <td> <img className="img-fluid" onClick={() => deleteEvent(reg._id)} style={{ backgroundColor: 'red', height: '25px' }} src="https://i.ibb.co/xgfms6g/trash-2-9.png" alt="" /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )
            }
        </div>
    );
};

export default AllRegVolunteer;