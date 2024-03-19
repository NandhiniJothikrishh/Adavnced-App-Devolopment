// import React from 'react'
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Formlogin from './components/navbar/Formlogin'
import Signup from './components/navbar/Signup'
import Userpage from './components/navbar/Userpage'
import Bookevent from './components/navbar/Bookevent'

import LoadingIndicator from './components/pages/LoadingIndicator'
import { Suspense } from 'react';
// import './App.css'

function App() {
  return (
    <div>
    <Router>
    <Suspense fallback={<LoadingIndicator/>}>
    <Routes>
      <Route path='/' element={<Formlogin/>}></Route>
      <Route path='/home' element={<Navbar />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
      <Route path='/Userpage' element={<Userpage />}></Route>
      <Route path='/Bookevent' element={<Bookevent/>}></Route>
      
    </Routes>
    </Suspense>
    </Router>
</div>
  );
}

export default App;