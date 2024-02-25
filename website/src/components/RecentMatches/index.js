import React from 'react';
import './index.scss';

const RecentMatches = ({ onMatchCardClick, recentMatchesData }) => {

    return (
        <div className="recent-matches">
            <h2>Recent Matches</h2>
            <div className="matches-container">
                {recentMatchesData.map((match) => (
                    <div
                        className="match-card"
                        key={match.id}
                        onClick={() => onMatchCardClick(match.id)}
                    >
                        <h3>{match.team1} vs {match.team2}</h3>
                        <p>Result: {match.score}</p>
                        <p>Date: {match.date}</p>
                        <p>Event: {match.event}</p>
                        <p>Type: {match.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentMatches;