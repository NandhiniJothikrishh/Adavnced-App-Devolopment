import React, { useEffect,useState } from 'react';
import './Signup.css';
import {Link,useNavigate } from 'react-router-dom';
import validator from 'validator'


function Signup ()  {
  
const nav=useNavigate();
const[username,setusername]=useState('');
const[email,setemail]=useState('');
  const[phone,setphone]=useState('');
  const[password,setpassword]=useState('');
  const senddb=(e)=>{
    e.preventDefault()
    const details={email,phone,password,username}
    if(email.length===0||password.length===0||username.length===0||phone.length===0){
      alert("Enter All fields")
    }
    else if (!validator.isEmail(email)) {
        alert('Enter Valid Email!')
      } 
      
      else{
      fetch("http://localhost:8080/Usersignup/post",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(details)
      }
      ).then(()=>{
        console.log("New Detail Added");   
        console.log(JSON.stringify(details));
        console.log(e);
        nav("/")
      })
    }
  }
 


  return (
    <div id='App2'>
    <div className="signup-container">
    <form className="signup-form" >
    <h2 className="login-heading">Sign Up</h2>
    <h3 className='login-qoute'>Yes, sign me up! ...</h3>
        <div id="form-group1">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="input"
            onChange={(e)=>setusername(e.target.value)}
            
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="username" className="label">
            Email
          </label>
          <input
            type="email"
            id="username"
            className="input"
            onChange={(e)=>setemail(e.target.value)}
            
            required
          />
        </div>
        <div className="form-group1">
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
        <div className="form-group1">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input"
            onChange={(e)=>setpassword(e.target.value)}
            required
          />
          </div>
          
        <div id='log-btn'>
       

       <button type="submit" className="login-buttn" onClick={senddb}>
          Signup
        </button>
       
       <Link to="/">
        <h3 class="cancle">Cancel</h3>
       </Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default  Signup;