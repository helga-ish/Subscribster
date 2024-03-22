import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SuscribsterApp from '../Subscribster/SubscribsterApp';
import Randomizer from '../Randomizer/Randomizer';
import Error404 from '../Error404/Error404';
import AboutMe from '../AboutMe/AboutMe'


function App() {

  return (
    <div className="page">
      <Header />
      <Routes>

        <Route path='/' element={
          <MainPage />
        } />

        <Route path='/landing' element={
          <AboutMe />
        } />

        <Route path='/randomizer' element={
          <Randomizer />
        } />

        <Route path='/subscribster' element={
          <SuscribsterApp />
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
