import React, {useState} from 'react';
import './AdminLogin.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import DashBoard from './DashBoard';
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from 'react-router-dom';

const AdminLogin=()=>{
    const [username, setUsername] = useState('');
    const [passwordval, setPasswordval] = useState('');

    const navigate = useNavigate();

    // const responseGoogle = (response) => {
    //     axios.post('/auth/google', { token: response.tokenId })
    //       .then((response) => {
    //         console.log(response);
    //         // Handle response from backend, e.g., set user session
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   };

    const handleUserName = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPasswordval(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8000/booking/login`, {username, passwordval})
        .then((res) => {
            console.log(res)
            if(res.data.message == "success"){
                navigate('/DashBoard')
            }else{
                console.log('Failure')
            }
    }).catch(error => errormsg(error.message))
    }

    const errormsg = (msg) => {
        Swal.fire({
            title: "Error",
            text: {msg},
            icon: "error"
        }) 
    }

    return(
        <>
            <div className='dummy-line'></div>
            <div className='main-wrapper'>
            <div className='second-wrapper'>
            <div className='header-wrapper graduate-regular'>
                    <h2>Welcome Admin</h2>
                </div>
                <div className='wrapper-sideways'>
                <div className='image-container'>
                </div>
                <div className='login-wrapper alegreya-sans-regular'>
                    <form className='form-controls'>
                        <label className='label-text' htmlFor="email">Email</label><br/>
                        <input className='emailInput' placeholder='Enter your email' name='email' value={username} onChange={handleUserName}/><br/>
                        <label className='label-text' htmlFor="password">Password</label><br/>
                        <input className='passwordInput' placeholder='Enter your Password' name='password' value={passwordval} onChange={handlePassword}/>
                        <br/>
                        {/* <h4 className='forgot-pwd'><a>Forgot Password?</a></h4> */}
                        <button className='btn-signin' type="submit" onClick={handleSubmit}>Login</button>
                        {/* <div className='google-btn'>
                                <GoogleLogin
                                    className='google-inner'
                                    clientId="809120775150-ht60064l706empcs0fh5o8i739lnhm22.apps.googleusercontent.com"
                                    buttonText="Login with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                        </div> */}
                    </form>
                </div>
                </div>
            </div>
            </div>
            <div className='dummy-line'></div>
        </>
    )
}
export default AdminLogin;