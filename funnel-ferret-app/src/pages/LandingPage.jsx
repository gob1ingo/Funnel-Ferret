import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../main.css'

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>
          Funnel
        </h1>
        <h2>
          Hick start attention. Lock in learning.
        </h2>
        <button className="start-button" onClick={() => navigate('/topics')}>Click to continue</button>
        <p>Copyright LakerHack 2025</p>
      </div>
    </>
  )
  
}

export default LandingPage;
