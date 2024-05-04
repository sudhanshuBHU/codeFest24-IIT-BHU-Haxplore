import React from "react";
import { Link } from "react-router-dom";
import './HeaderBottom.css';

const HeaderBottom = () => {
    return (
        <div className="options">
            <div>
                <Link to="/" className='buy'>Home</Link>
            </div>
            <div>
                <Link to="/enquiryfrom" className='buy'>Contact</Link>
            </div>
            <div>
                <Link to="/viewTicket" className='buy'>View Tickets</Link>
            </div>
            <div>
                <Link to="/buy" className="buy">Buy Tickets</Link>
            </div>
            <div>
                <Link to="Adminlogin" className="buy">Admin Login</Link>
            </div>
        </div>
    );
}

export default HeaderBottom;