import React, { useState, useEffect } from 'react';
import './Counter.css';
import axios from 'axios';

const Counter = () => {
  const [visitorCount, setVisitorCount] = useState(0); // Initial visitor count
  const [templeCount, setTempleCount] = useState(0); // Initial temple count
  // const [visitor, setVisitor] = useState(0);
  // const [total, setTotal] = useState(0);
  // let idnumber = 1;
  // let one = 2;
  // let two = 4;
  // let three = 3;
  // let sum = 0;
  // let totalPeople = 0;

  // const countTotal = async() => {
  //   let totalPeople=0;
  //   await axios.get('http://localhost:8000/booking/getAll')
  //       .then(res => {
  //           let data = res.data;
  //           data.forEach(data => {
  //               totalPeople++;
  //           });
  //       }).catch((err) => { console.log(err) });
  //       setTotal(totalPeople);
  // }



  // const check = async () => {
  //   let res = await axios.get('http://localhost:8000/booking/getcount');
  //   console.log(res.data);

  //   setVisitor(res.data[0].one);
  // }
  // const checkPut = async () => {

  //   await axios.put('http://localhost:8000/booking/postcount/1', { idnumber, one, two, three }).then(res => console.log(res.data))
  //     .catch(err => console.error(err));
  //   // console.log(res.data);
  // }

  useEffect(() => {
    let currentVisitorCount = 0;
    let currentTempleCount = 0;

    const interval = setInterval(() => {
      currentVisitorCount += 1;
      currentTempleCount += 1;

      // Update visitor count
      if (currentVisitorCount <= 80) {
        setVisitorCount(currentVisitorCount);
      }

      // Update temple count
      if (currentTempleCount <= 10) {
        setTempleCount(currentTempleCount);
      }

      // Clear interval after reaching 200
      if (currentVisitorCount > 200 && currentTempleCount > 200) {
        clearInterval(interval);
      }
    }, 10); // Update every 10 milliseconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="row d-flex align-items-center">
      <div className='card'>
      </div>
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="card column text-center">
          <p><i className="fa fa-user"></i></p>
          <h3 className="fw-bold"><span id="visitors">{visitorCount}</span>+</h3>
          <p className="fs-4">Visitors</p>
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="card column text-center">
          <p><i className="fa fa-user"></i></p>
          <h3 className="fw-bold"><span id="temples">{templeCount}</span>+</h3>
          <p className="fs-4">Temples</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
      {/* <div className="col-12 col-md-4 d-flex justify-content-center">
        <div className="card column text-center">
          <p><i className="fa fa-user"></i></p>
          <h3 className="fw-bold"><span id="visitors">{visitorCount}</span>+</h3>
          <p className="fs-4">Visitors</p>
        </div>
      </div> */}