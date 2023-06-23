import React from 'react'
import { Button, Form, FormLabel } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../css/edit_data.css'

const EditData = () => {
    // declaring variables that will be holding information about the user:
    const [firstname, setFirstname] = useState(localStorage.getItem(`firstname`))
    const [lastname, setLastname] = useState(localStorage.getItem(`lastname`))
    const [email, setEmail] = useState(localStorage.getItem(`email`))
    const [phone, setPhone] = useState(localStorage.getItem(`phone`))
    // declaring navigate using useNagivate() function:
    const navigate = useNavigate();
    // setting editItem function:
    const editItem = () => {

        axios.put(`http://localhost:4000/users/${localStorage.getItem(`id`)}`, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone
        })
            .then(response => {
                return response
            }).then(response => {
                response.status === 200 ? alert(`Updated Successfull`) : alert(`Failure to update record`)
            })
        navigate(`/view-data`)
    }
    return (
        <div className='container mt-5'>
            <div className=' w-50 m-auto fs-6'>
                <table className='table table-strip'>
                    <tr><td>First Name</td><td>{firstname}</td></tr>
                    <tr><td>Last Name</td><td>{lastname}</td></tr>
                    <tr><td>Email Address</td><td>{email}</td></tr>
                    <tr><td>Phone Number</td><td>{phone}</td></tr>
                </table>
            </div>
            <Form className='form-edit-data'>
                <FormLabel>First Name:</FormLabel>
                <Form.Control className='mb-3' type='text' id='firstname' onChange={(e) => setFirstname(e.target.value)}></Form.Control>
                <FormLabel>Last Name:</FormLabel>
                <Form.Control className='mb-3' type='text' id='lastname' onChange={(e) => setLastname(e.target.value)}></Form.Control>
                <FormLabel>Email:</FormLabel>
                <Form.Control className='mb-3' type='email' id='email' onChange={(e) => setEmail(e.target.value)}></Form.Control>
                <FormLabel>Phone:</FormLabel>
                <Form.Control className='mb-3' type='number' id='phone' onChange={(e) => setPhone(e.target.value)}></Form.Control>
                <Button onClick={editItem} className='btn btn-success'>Edit</Button>
            </Form>
        </div>
    )
}

export default EditData
