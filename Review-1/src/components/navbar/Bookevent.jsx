import React, { useEffect,useState } from 'react';
import './Bookevent.css';
import {Link,useNavigate,useParams } from 'react-router-dom';
import { FaCalendar } from 'react-icons/fa';

const Bookevent = ({addEvent}) => {

  const nav=useNavigate();
  const[eventname,seteventname]=useState('');
  const[name,setname]=useState('');
  const[phone,setphone]=useState('');
  const[date,setdate]=useState('');
  const[nooftickets,setnooftickets]=useState('');
  const navigateTo = useNavigate();
  // const {id} = useParams();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      Eventname: eventname,
      Name:name,
      Phone:phone,
      Date: date,
      Nooftickets:nooftickets
    };
    addEvent(newEvent);
    seteventname('');
    setphone('');
    setdate('');
    setnooftickets('');
    navigateTo('/')
  };
  
  
  return (
    <div className='booktable'>
    <div className="book-container">
    
    <form className="book-form" >
    <h2 className="book-heading">Book Your Event Now !!</h2>
    <h3 className='book-qoute'>"Join us for a feast of Light and Sound"</h3>
        <div className="form-book">
          <label htmlFor="username" className="label">
            Event Name
          </label>
          <input
            type="text"
            id="username"
            className="input"
            onChange={(e)=>seteventname(e.target.value)}
            
            required
          />
        </div><div className="form-book">
          <label htmlFor="username" className="label">
            Name
          </label>
          <input
            type="text"
            id="username"
            className="input"
            onChange={(e)=>setname(e.target.value)}
            
            required
          />
        </div>
        <div className="form-book">
          <label htmlFor="username" className="label">
            Phone Number
          </label>
          <input
            type="text"
            id="username"
            className="input"
            onChange={(e)=>setphone(e.target.value)}
          
            required
          />
        </div>
        <div className="form-book">
          
          <FaCalendar />
            Date
          <input
            type='date'
            id="password"
            className="input"
            onChange={(e)=>setdate(e.target.value)}
            required
          />
          </div>
        
        <div className="form-book">
          <label className="label">
            No of Tickets
          </label>
          <input
            type="number"
            id="password"
            className="input"
            onChange={(e)=>setnooftickets(e.target.value)}
            required
          />
          </div>
          <div id='buttons'>
        <div id='book-btn'>
        <Link to="/home"><button  className="book-button2">
          Cancel
          </button></Link>
          </div>
          <div id='book-btn1'>
        <button  className="book-button1" onClick={handleSubmit}>
          Book
        </button>
        </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Bookevent;