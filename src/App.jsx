import React from 'react';
import Navbar from './components/NavBar/NavBar';
import SlideShow from './components/Slide_Show/Slide_Show';
import { rightArrow, leftArrow, currIcon, nonCurrIcon } from './components/Slide_Show/assets/Slide_Show_Index';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import * as data from './App'; 

function App() {
  return (
    <>
      <SlideShow rightArrowIcon={rightArrow} leftArrowIcon={leftArrow} currIcon={currIcon} non_currIcon={nonCurrIcon} />
      <Navbar />
    </>
  );
}

export default App;