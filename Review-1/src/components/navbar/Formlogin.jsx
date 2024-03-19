import React, { useEffect,useState } from 'react';
import './Formlogin.css';
import {Link,useNavigate } from 'react-router-dom';


function Formlogin ()  {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if(formData.username==="nandhini"&& formData.password==="nandhini123"){
      navigate("/Userpage")
    }
    else{
      navigate("/home");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};
const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // You can submit the form data to your server or perform other actions here.
      setIsSubmitted(true);
    }
  };
const handleNavigate= () => {
    navigate("/signup");
  };
  
//   const nav=useNavigate();
//   const[username,setUsername]=useState('');
//   const[password,setpassword]=useState('');
//   const[user,setUser]=useState('');
//   const fetchData = () => {
//     return fetch("http://localhost:8080/userlogin/get")
//     .then((response) => response.json())
//     .then((data) => setUser(data));
//   }
//   useEffect(() => {
//     fetchData();
//   },[])
//   const authenticate=(e)=>{
//     e.preventDefault();
//   const usercheck = user.find(user => (user.username === username && user.password === password));
//  if(username.length===0){
//   alert("Enter Username")
//  }
//  else if(password.length===0){
//   alert("Enter password")
//  }
//   else if(!usercheck){
//     alert("Wrong Username or Password!")
//   }
//   else {
//     nav("/home")
//   }
// }



  return (
    <div id='App1'>
    <div className="login-container">
    
   
    <form className="login-form" onSubmit={handleSubmit}>
    <h2 className="login-heading">Login</h2>
    <h3 className='login-qoute'>"Welcome back, let's get started!"</h3>
        <div className="form-group">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="input"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        {errors.username && <p className="error">{errors.username}</p>}
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
          <div>
          <p>Create New Account <Link to="/signup" id='sign-to'>Signup Now!</Link></p>
          </div>
        <div id='log-btn'>
        <button id='log'>Login</button>
        
        </div>
      </form>
    </div>
    </div>
  );
};

export default Formlogin