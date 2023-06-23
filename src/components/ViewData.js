import React from 'react'
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import NoData from './NoData'
import axios from 'axios'
import "../css/view_data.css"
// importing DeleteData function from DeleteData.js:
import DeleteData from '../CustomFunctions/DeleteData'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ViewData = () => {
    // initializing the navigate using the useNavigate() function:
    const navigate = useNavigate();
    // creating a function that will get the data and fetch them into a useState variable:
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/users`)
            .then((response) => {
                return response
            }).then((response) => {
                setData(response.data)
            })
    }, [])
    // creating a function to take the route
    const routeToEditData = () => {
        navigate(`/edit-data`)
    }
    // calling the edit function here:
    const editItem = (e) => {
        // setting localstorage values:
        localStorage.setItem(`id`, e.target.getAttribute(`id`))
        localStorage.setItem(`firstname`, e.target.getAttribute(`data-first`))
        localStorage.setItem(`lastname`, e.target.getAttribute(`data-last`))
        localStorage.setItem(`email`, e.target.getAttribute(`data-email`))
        localStorage.setItem(`phone`, e.target.getAttribute(`data-phone`))
        routeToEditData();
    }
    // calling the delete function here:
    const deleteItem = ((e) => {
        const url = `http://localhost:4000/users/`;
        DeleteData(url, e.target.id)
        // using the classical window.location.href to update the view-data page.
        window.location.href = `/view-data`
        // navigate(`/add-data`);
        // navigate(`/view-data`)


    })
    return (
        <>
            <div className='container mt-5'>
                {
                    data.length ? (
                        data.map((item) => {
                            return (
                                <div className='card' key={item.id}>
                                    <div className='card-title'>
                                        {item.firstname} {item.lastname}
                                    </div>
                                    <div className='card-body'>
                                        The email address is <b>{item.email}</b> and  phone number is <b>{item.phone}</b>
                                    </div>
                                    <div className='card-footer d-flex justify-content-between'>
                                        <button id={item.id} data-first={item.firstname} data-last={item.lastname} data-email={item.email} data-phone={item.phone} onClick={editItem} className='btn btn-warning'>Edit</button>
                                        <Link to='/view-data'><button id={item.id} onClick={deleteItem} className='btn btn-danger'>Delete</button></Link>
                                    </div>
                                </div>
                            )
                        })
                    ) : (<NoData />)
                }

            </div>
        </>
    )
}

export default ViewData
