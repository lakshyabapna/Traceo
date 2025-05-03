import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';
import Profile from './Components/Profile/Profile';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
