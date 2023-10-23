import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation} from 'react-router-dom';
import Main from '../Main/Main.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Profile from '../Profile/Profile.js';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import Error404 from '../Error404/Error404';
import Menu from '../Menu/Menu';
import Subscriptions from '../Subscriptions/Subscriptions';

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path='/' element={
          <Main />
        } />

        <Route path='/profile' element={
          <Profile />
        } />

        <Route path='/signin' element={
          <Login />
        } />

        <Route path='/signup' element={
          <Register />
        } />

        <Route path='/404' element={
          <Error404 />
        } />

        <Route path='*' element={
          <Navigate to="/404" replace />
        } />

      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
