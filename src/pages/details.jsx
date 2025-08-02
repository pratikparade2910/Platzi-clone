
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Details = () => {
    const { id } = useParams()  // get id through params hook
    const [pdetails, setpdetails] = useState(null) 

    const fetchdetails = async () => {
        try {
            const details = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)   // fetch only selected details 
            setpdetails(details.data)
        } catch (err) {
            console.log(err, 'cannot fetch details server error ')
            alert("cannot get details, try again")
        }
    }

    useEffect(() => {
        fetchdetails()
    }, [])  // call in useEffect inorder to get details as rendered 

    if (!pdetails) return <h3 className='text-center mt-5'>Loading details...</h3>

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <h1 className='bg-dark text-warning p-2 m-2 text-center w-50 rounded shadow '>details of product : {id}</h1>
                <div className="col-md-6">
                    <div className="card shadow border border-success">
                        <img 
                            src={pdetails.images[0]} 
                            alt={pdetails.title} 
                            className="card-img-top" 
                            style={{ height: '400px', objectFit: 'cover' }} 
                        />
                        <div className="card-body">
                            <h3 className="card-title text-success">{pdetails.title}</h3>
                            <p className="card-text text-muted">{pdetails.description}</p>
                            <h4 className="text-danger">Price: ${pdetails.price}</h4>
                            <span className="badge bg-primary">{pdetails.category.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
