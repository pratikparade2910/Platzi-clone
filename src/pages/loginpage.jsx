import React, { useState } from 'react';
import { auth } from '../components/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Loginpage = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState();
    const [pass, setpass] = useState();

    const loginuser = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, pass)
            alert('Login Successfull ')

            navigate('/home') // redirecting user to home page after logging in 
            setemail("")
            setpass("")


        } catch (err) {
            console.log(err)
            alert('invalid credentials please login again')
            setemail("")
            setpass("")
        }
    }
    return (
        <>
            <div className="container  mt-5 ">
                <div className="row  ">
                    <div className="col-md-12 text-center ">
                        <h3 className='bg-info fw-bold p-2 m-2 rounded shadow border '>Welcome to Platzi the 'trusted-store'</h3>

                        <div className="card shadow border  d-flex justify-content-center align-items-center w-25 mx-auto" style={{ height: '300px' }}>

                            <form action="" onSubmit={(e) => loginuser(e)}>
                                <h4 className='bg-light text-danger fw-bold p-2 text-center my-3 mx-auto'>Login To Proceed..</h4>
                                <input type="email" name="useremail" id="" placeholder='Enter Your Email'
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}

                                    className='form-control my-2' />
                                <input type="password" name="userpass" id="" placeholder='Enter Your Password'
                                    value={pass}
                                    onChange={(e) => setpass(e.target.value)}

                                    className='form-control my-2' />
                                <button className='btn btn-sm btn-success mx-auto my-3'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Loginpage
