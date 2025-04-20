import { useNavigate } from 'react-router-dom';

function TopicSelection() {

    const navigate = useNavigate();

    const paddingStyle = {
        padding:'10px 20px',
    }

    return (
        <div>
            <h1>
                Subjects
            </h1>
            <ul>
                <button className="selection-button" disabled={true}>Math</button>
                <button className="selection-button" disabled={true}>Science</button>
                <button className="selection-button" onClick={() => navigate('/english')}>English</button>
                <button className="selection-button" disabled={true}>History</button>
            </ul>
        </div>
    )
};

export default TopicSelection;