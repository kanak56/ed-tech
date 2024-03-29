import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Footer from './Home/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='signUp' element={<SignUp></SignUp>} />
      <Route path='login' element={<Login/>} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
