import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
