
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
          <NavBar />
          <Routes>
          
          <Route path="/" element={<News size={12} cat="sports" />} />
          <Route path="/business" element={<News size={12} cat="business" />} />
          <Route path="/health" element={<News size={12} cat="health" />} />
          <Route path="/entertainment" element={<News size={12} cat="entertainment" />} />
          <Route path="/science" element={<News size={12} cat="science"/>} />
          <Route path="/general" element={<News size={12} cat="general"/>} />
          <Route path="/technology" element={<News size={12} cat="technology"/>} />
          </Routes>
         </BrowserRouter>
      </div>
    )
  }
}
