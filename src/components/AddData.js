import React from 'react'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import "../css/add_data.css";
import { useNavigate } from 'react-router-dom';
const AddData = () => {
    const navigate = useNavigate();
    // creating a function that will post data of the form into users local API:
    const postData = () => {
        axios.post(`http://localhost:4000/users`, {
            firstname: document.getElementById(`firstname`).value,
            lastname: document.getElementById(`lastname`).value,
            email: document.getElementById(`email`).value,
            phone: document.getElementById(`phone`).value
        }).then((response) => {
            return response
        }).then((response) => {
            if (response.status === 201) {
                alert(`Post is successfull`);
                navigate(`/view-data`)
            }
            else {
                alert(`Failure`);
            }

        })
    }
    return (
        <>
            <div className='container'>
                <h1>Adding Data</h1>
                <hr />
                <Form autoComplete='off' className='form-add-data' method='POST'>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='firstname' id='firstname' placeholder="Enter First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" name='lastname' id='lastname' placeholder="Enter Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name='email' id='email' placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" name='phone' id='phone' placeholder="Enter Phone Number" />
                    </Form.Group>

                    <Button variant="primary" onClick={postData}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default AddData
