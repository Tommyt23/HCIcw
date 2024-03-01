import React, {useState} from 'react';
import Header from '../Header';
import HeroBanner from '../HeroBanner';
import RecentMatches from '../RecentMatches';
import MatchDetailsOverlay from '../MatchDetailsOverlay';

import cs2hero from '../../assets/images/cs2hero.png';
import csArena from '../../assets/images/csArena.png';
import nuke from '../../assets/images/nuke.png';

import '../../index.css';
import './index.scss';

const CS2 = () => {
    const title = 'Counter-Strike 2';
    const [selectedMatch, setSelectedMatch] = useState(null);

    const handleMatchCardClick = (matchId) => {
        setSelectedMatch(matchId);
    };

    // Temporary static data for recent pro matches
    const recentMatchesData = [
        {
            team1: 'HEROIC',
            team2: 'GamerLegion',
            date: '22-02-2024',
            type: 'Best of 3',
            event: 'PGL CS2 Major Copenhagen 2024 Europe RMR B',
            score: '2-0',
            id: 1
        },
        {
            team1: 'ECSTATIC',
            team2: 'Guild Eagles',
            date: '22-02-2024',
            type: 'Best of 3',
            event: 'PGL CS2 Major Copenhagen 2024 Europe RMR B',
            score: '2-1',
            id: 2
        },
        {
            team1: 'ENCE',
            team2: 'Astralis',
            date: '22-02-2024',
            type: 'Best of 3',
            event: 'PGL CS2 Major Copenhagen 2024 Europe RMR B',
            score: '2-0',
            id: 3
        },
        {
            team1: 'Natus Vincere',
            team2: 'G2 Esports',
            date: '22-02-2024',
            type: 'Best of 3',
            event: 'PGL CS2 Major Copenhagen 2024 Europe RMR B',
            score: '2-1',
            id: 4
        }
    ];

    return (
        <div>
            <Header title={title} />
            <main>
                <HeroBanner banner={cs2hero} altText={"CS2"} />
                <RecentMatches
                    onMatchCardClick={handleMatchCardClick}
                    recentMatchesData={recentMatchesData}
                    backgroundImage={csArena}
                    cardImage={nuke}
                />
                {selectedMatch && (
                    <MatchDetailsOverlay match={recentMatchesData.find(
                        (match) => match.id === selectedMatch
                    )}
                    onClose={() => setSelectedMatch(null)}
                />
                )}
                {/*
                    <Stats />
                    <News />
                    <Footer />
                */}
            </main>
        </div>
    );
};

export default CS2;