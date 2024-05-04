import React from 'react';
import './Ticketpage.css';
import { Link } from 'react-router-dom';

const Ticketpage = () => {
  return (    
    <div className='container123' style={{'height':'200px'}}>
      <div className="clichere fw-bold text-dark">
        Buy A Ticket!
      </div>
      <Link to="/buy" className="neumorphic-button">
        Click Here
      </Link>
    </div>
  );
}

export default Ticketpage;
