import { useState } from 'react';
import './App.css';

// Fourth Interfaces
function StoryOne({ goBack }) {
  return (
    <div>
      <h2>Cozy Evening Tale</h2>
      <p>Immerse yourself in a heartwarming story to unwind.</p>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

function StoryTwo({ goBack }) {
  return (
    <div>
      <h2>High School Chronicles</h2>
      <p>Embark on an exciting journey filled with twists and turns.</p>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

function StoryThree({ goBack }) {
  return (
    <div>
      <h2>why so much homewoek</h2>
      <p>Immerse yourself in a heartwarming story to unwind.</p>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

// Third Interface: Casual Reading
function CasualReading({ goBack, goToStory }) {
  return (
    <div>
      <h2>Casual Reading</h2>
      <p>Select a story to begin your journey:</p>
      <div className="rect-button-container">
        <button className="rect-button" onClick={() => goToStory('cozyEveningTale')}>Cozy Evening Tale</button>
        <button className="rect-button" onClick={() => goToStory('adventureChronicles')}>High School Chronicles</button>
        <button className="rect-button" onClick={() => goToStory('why so much homewoek')}>Why so much Homework</button>
      </div>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

function History({ goBack }) {
  return (
    <div>
      <h2>History</h2>
      <p>Pick a chapter to delve into the past.</p>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

function Science({ goBack }) {
  return (
    <div>
      <h2>Science</h2>
      <p>Explore fascinating discoveries and concepts.</p>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Tracks which page to display

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="home-container">
            
            <button className="start-button" onClick={() => setCurrentPage('detox')}>Click to Start</button>
          
          </div>
        );
      case 'detox':
        return (
          <div>
            <h2>Choose Your Path</h2>
            <div className="oval-container">
              <div className="oval" onClick={() => setCurrentPage('casualReading')}>Casual Reading</div>
              <div className="oval" onClick={() => setCurrentPage('history')}>History</div>
              <div className="oval" onClick={() => setCurrentPage('science')}>Science</div>
            </div>
            <button onClick={() => setCurrentPage('home')}>Back</button>
          </div>
        );
      case 'casualReading':
        return (
          <CasualReading
            goBack={() => setCurrentPage('detox')}
            goToStory={(story) => setCurrentPage(story)}
          />
        );
      case 'history':
        return <History goBack={() => setCurrentPage('detox')} />;
      case 'science':
        return <Science goBack={() => setCurrentPage('detox')} />;
      case 'cozyEveningTale':
        return <StoryOne goBack={() => setCurrentPage('casualReading')} />;
      case 'adventureChronicles':
        return <StoryTwo goBack={() => setCurrentPage('casualReading')} />;
      case 'why so much homewoek':
        return <StoryThree goBack={() => setCurrentPage('casualReading')} />;
    
      default:
        return <div>404 Page Not Found</div>;
    }
  };

  return <div className="app">{renderPage()}</div>;
}

export default App;
