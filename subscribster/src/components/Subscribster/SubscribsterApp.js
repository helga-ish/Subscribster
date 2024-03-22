import './SubscribsterApp.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './SubMain/SubMain';
import Login from './Login/Login';
import Register from './SubRegister/SubRegister';
import Profile from './SubProfile/SubProfile';
import Footer from './SubFooter/SubFooter';
import Header from "./SubHeader/SubHeader";
import Error404 from '../Error404/Error404';


function SuscribsterApp() {

  const isLoggedIn = true;

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path='/subscribster' element={
          isLoggedIn ? (
            <Navigate to="/subscriptions" replace />
          ) : (
            <Navigate to="/signin" replace />
          )
        } />

        <Route path='/subscriptions' element={
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

export default SuscribsterApp;
