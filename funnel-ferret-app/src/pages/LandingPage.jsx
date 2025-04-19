import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>
          Welcome to Funnel Ferret!
        </h1>
        <h2>
          This is a simple demo of what the concept would look like!
        </h2>
        <button onClick={() => navigate('/topics')}>Click to continue</button>
      </div>
    </>
  )
  
}

export default LandingPage;
