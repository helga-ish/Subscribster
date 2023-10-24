import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import Error404 from '../Error404/Error404';


function App() {

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
