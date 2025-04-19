//import { useNavigate } from 'react-router-dom';

function TopicSelection() {

    //navigate = useNavigate();

    const paddingStyle = {
        padding:'10px 20px',
    }

    return (
        <div>
            <h1>
                Which topic would you like to cover?
            </h1>
            <ul>
                <button className="topic-button" onClick={() => console.log("Hello!")}>Math</button>
                <button className="topic-button">Science</button>
                <button className="topic-button">English</button>
                <button className="topic-button">History</button>
            </ul>
        </div>
    )
};

export default TopicSelection;