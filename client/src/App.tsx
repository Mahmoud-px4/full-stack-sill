import React, { FC, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import axios from 'axios';



const App:React.FC = () => {

  const [user, setUser] = useState(null)

  const [localUser, setLocalUser] = useState(false)

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home localUser={localUser} setLocalUser={setLocalUser} user={user} setUser={setUser} /> }/>
          <Route path='/Login' element={ <Login localUser={localUser} setLocalUser={setLocalUser} user={user} setUser={setUser} /> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
