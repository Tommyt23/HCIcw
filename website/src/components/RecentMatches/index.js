import React from 'react';
import './index.scss';

const RecentMatches = ({ onMatchCardClick, recentMatchesData, backgroundImage, cardImage }) => {
    const containerStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}') center/cover`,
    }

    return (
        <div className="recent-matches" style={containerStyle}>
            <h2>Recent Matches</h2>
            <div className="matches-container">
                {recentMatchesData.map((match) => (
                    <div
                        className="match-card"
                        key={match.id}
                        onClick={() => onMatchCardClick(match.id)}
                        style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${cardImage}') center/cover`,
                        }}
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