// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Room from './components/Room';
import Header from './components/Header'; // Import Header

const App = () => {
  return (
    <>
      <Header /> {/* Add Header */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/room/:id' element={<Room />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
