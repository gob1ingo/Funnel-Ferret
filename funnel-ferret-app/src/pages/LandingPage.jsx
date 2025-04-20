import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../main.css'
import funnelFerretLogo from '../assets/Start_Screen.png';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="no-scroll-container">
        <img className="landingPageLogo" src={funnelFerretLogo} alt="Funnel Ferret Logo"/>
          <button className="start-button" onClick={() => navigate('/topics')}>Click to continue</button>
      </div>
    </>
  )
  
}

export default LandingPage;
