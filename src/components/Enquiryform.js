import React,{useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import './Enquiryform.css';

const Enquiryform = () => {
    const [username, setUserName] = useState('');
    const [email, setUserEmail] = useState('');
    const [subject, setUserSubject] = useState('');
    const [query, setUserQuery] = useState('');

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handleUserEmail = (e) => {
        setUserEmail(e.target.value)
    }

    const handleUserSubject = (e) => {
        setUserSubject(e.target.value)
    }

    const handleUserQuery = (e) => {
        setUserQuery(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
            axios.post('http://localhost:8000/booking/sendenquiry', {username,email,subject,query})
            .then((res) => {
                sweetAlertSuccess();
                setUserName('');
                setUserEmail('');
                setUserSubject('');
                setUserQuery('');
            })
        .catch (error => {
            console.log(`Error: ${error.message}`);
            sweetAlertError();
        })
    }

    const sweetAlertSuccess = () => {
        Swal.fire({
            title: "Success",
            text: "Thanks for Contacting Us.",
            icon: "success"
        })
    }

    const sweetAlertError = () => {
        Swal.fire({
            title: "Error",
            text: "Oops Error Occured. Please Try Again.",
            icon: "error"
        })
    }

    return (
        <div className='row enguiry-container  mb-2 d-flex justify-content-center'>
            <div className='col-11 col-md-6 col-lg-5 mx-auto form-container  mt-2 p-5 neumorphic-input rounded-2'>
                <h2 className='text-center'>Contact Us...</h2>
                <form>
                    <div className="form-group">
                        <label className='mt-3 neumorphic-label-enquiry'>Name</label>
                        <input type="text" className="neumorphic-input-enguiry form-control mt-1" placeholder="Enter Your Name" value={username} onChange={handleUserName}/>
                    </div>
                    <div className="form-group">
                        <label className='mt-3 neumorphic-label-enquiry' >Email address</label>
                        <input type="email" className="form-control neumorphic-input-enguiry mt-1" placeholder="name@example.com" value={email} onChange={handleUserEmail}/>
                    </div>
                    <div className="form-group">
                        <label className='mt-3 neumorphic-label-enquiry'>Subject</label>
                        <input type="text" className="neumorphic-input-enguiry form-control mt-1" placeholder="Subject" value={subject} onChange={handleUserSubject}/>
                    </div>
                    <div className="form-group">
                        <label className='mt-3 neumorphic-label-enquiry' >Write your query here !</label>
                        <textarea className="neumorphic-input-enguiry form-control mt-1" rows="5" value={query} onChange={handleUserQuery}></textarea>
                    </div>
                    <div className="d-flex justify-content-center  mt-2">
                        <button className="neumorphic" type="submit" onClick={handleSubmit}>SUBMIT</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Enquiryform