import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import SlideShow from './components/SlideShow/SlideShow';

function App() {

  return (
    <>
      <SlideShow />
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
      </>
  );
}

export default App;
