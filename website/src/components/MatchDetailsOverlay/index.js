import React from 'react';
import './index.scss';

const MatchDetailsOverlay = ({ match, onClose }) => {
    if (!match) return null;

    return (
        <div className="match-details-overlay">
            <div className="match-details-header">
                <div className="team-names">
                    <h3> {match.team1} vs {match.team2}</h3>
                </div>
            </div>
            <div className="match-details-body">
                <p className="result">Result: {match.score}</p>
                <p>Date: {match.date}</p>
                <p>Event: {match.event}</p>
                <p>Type: {match.type}</p>
            </div>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default MatchDetailsOverlay;