import { useNavigate } from 'react-router-dom';
import '../main.css';
import '../index.css';
import '../assets/Ferret Head.svg';

function TopicSelection() {

    const navigate = useNavigate();

    const paddingStyle = {
        padding:'10px 20px',
    }

    return (
        <>
            <div
                style={{
                    background:"#FFFFFF",
                    padding:"10px",
                    borderRadius:"40px",
                }}
            >
                <h1>
                    Subjects
                </h1>
                <ul>
                    <button 
                        className="selection-button" 
                        disabled={true}
                        style={{opacity:0.5}}
                    > Math
                    </button>
                    <button
                        className="selection-button"
                        disabled={true}
                        style={{opacity:0.5}}
                    > Science
                    </button>
                    <button 
                        className="selection-button" 
                        onClick={() => navigate('/english')}
                    > English
                    </button>
                    <button
                        className="selection-button"
                        disabled={true}
                        style={{opacity:0.5}}
                    > History
                    </button>
                </ul>
            </div>
        </>
    )
};

export default TopicSelection;