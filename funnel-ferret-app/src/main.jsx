import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
// CSS Files:
import './index.css';
// Pages:
import LandingPage from '../src/pages/LandingPage.jsx';
import TopicSelection from './pages/TopicSelection.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/topics" element={<TopicSelection/>}/>
      </Routes>
    </Router>
  </StrictMode>
)
