import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import SlideShow from './components/Slide_Show/Slide_Show';
import {rightArrow, leftArrow, currIcon, nonCurrIcon}  from './components/Slide_Show/Slide_Show_Index'
import SignUp from './Pages/Sign Up/Sign Up';
import Clothing from './Pages/Clothing/Clothing';
import Trending from './Pages/Trending/Trending';
import Events from './Pages/Events/Events';



function App() {

  return (
    <>
      <SlideShow rightArrowIcon={rightArrow} leftArrowIcon={leftArrow} currIcon={currIcon} non_currIcon={nonCurrIcon} />
      <Navbar />
      </>
  );
}

export default App;
