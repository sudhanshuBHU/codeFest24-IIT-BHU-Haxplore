import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';

import './List.css';

const List = (props) => {
  const [listitems, setlistItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/booking/getData/${props.idnum}`)
    .then(res => setlistItems(res.data))
    .catch(err => console.log(err))
  },[])

  const result = listitems && listitems[0] ? listitems[0].name + "$" + listitems[0].age + "$" + listitems[0].gender + "$" + listitems[0].mobile + "$" + listitems[0].email + "$" + listitems[0].no_of_person : "";

  return (
    <div className="wrapper pt-sans-regular">
      <div>
      <h1 className='ticket-heading'>Online Ticket</h1>
      <div/>
      <div className='ticketmain'>
      <ul className="list-details graduate-regular">
        <li className='list-items'>Name:  {listitems && listitems[0] && listitems[0].name? listitems[0].name : ""}</li>
        <li className='list-items'>Age:  {listitems && listitems[0] && listitems[0].age ? listitems[0].age : ""}</li>
        <li className='list-items'>Gender:  {listitems && listitems[0] && listitems[0].gender ? listitems[0].gender : ""}</li>
        <li className='list-items'>Mobile:  {listitems && listitems[0] && listitems[0].mobile ? listitems[0].mobile : ""}</li>
        <li className='list-items'>Email:  {listitems && listitems[0] && listitems[0].email ? listitems[0].email : ""}</li>
        <li className='list-items'>Number Of Persons:  {listitems && listitems[0] && listitems[0].no_of_person ? listitems[0].no_of_person : ""}</li>
      </ul>
      <div className="qrcode-section">
        <QRCode className='qrcode-img'
        size={256}
        style={{ height: "auto", maxWidth: "75px", width: "75px" }}
        value={result ? result : ""}
        viewBox={`0 0 20 20`}
        />
      </div>
      </div>
    </div>
    <button className=''></button>
    </div>
  )
}

export default List;