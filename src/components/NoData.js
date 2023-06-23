import React from 'react'
import { Alert } from 'react-bootstrap'

const NoData = () => {
    return (
        <>
            <Alert className='alert-warning mt-3'>
                <h3>No Data to display</h3>
            </Alert>
        </>
    )
}

export default NoData
