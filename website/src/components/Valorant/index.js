// import statment add the necessary componets to the page
import React, {useState} from 'react';
import Sidebar from "../Sidebar";
import "./valorant.scss";
import ValorantHero from "../../assets/images/ValorantHero.png";
import breeze from "../../assets/images/breeze.png";
import ValoArena from "../../assets/images/ValoArena.png";
import Header from "../Header";
import HeroBanner from "../HeroBanner";
import RecentMatches from "../RecentMatches";
import MatchDetailsOverlay from "../MatchDetailsOverlay";

const Valorant = () => {
    const title = 'Valorant';
    //title of the page

    const [selectedMatch, setSelectedMatch] = useState(null);
    const handleMatchCardClick = (matchId) => {
        setSelectedMatch(matchId);
    };

    // Recent Match Data to be fed into the Recent Matches Component
    const recentMatchesData = [
        {
            team1: 'Furia',
            team2: 'NRG',
            date: '16-02-2024',
            type: 'Best of 3',
            event: 'VCT Americas',
            score: '0-2',
            id: 1
        },
        {
            team1: 'FNATIC',
            team2: 'Team Vitality',
            date: '23-02-2024',
            type: 'Best of 3',
            event: 'VCT EMEA',
            score: '2-0',
            id: 2
        },
        {
            team1: 'SEN',
            team2: '100 thieves',
            date: '20-02-2024',
            type: 'Best of 3',
            event: 'VCT Americas',
            score: '2-1',
            id: 3
        },
        {
            team1: 'SEN',
            team2: 'NRG',
            date: '03-03-2024',
            type: 'Best of 3',
            event: 'VCT Americas',
            score: '2-1',
            id: 3
        }
    ];

    return(
        <>
        <div className="scroll">
            {/* Gabe: Removed the sidebar component here because it is embedded inside the Header component */}
            <Header title={title} />
            {/*this recives the title Valorant and adds it to the top of the page*/}
            {/* Gabe: removed the surrounding div, it isn't needed */}
            <main>
                <HeroBanner banner={ValorantHero} altText={"Valorant"}/>
                {/* --- Replacing this code below with the hero component --- */}
                {/*<div className="valo">*/}
                    {/*this is the hero image. this is displayed at the top of the page*/}
                    {/*<img src={ValorantHero} alt="valorant esports" />*/}
                {/*</div>*/}
                {/* --- End of comment block --- */}

                <RecentMatches
                    onMatchCardClick={handleMatchCardClick}
                    recentMatchesData={recentMatchesData} backgroundImage={ValoArena} cardImage={breeze}
                />
                {selectedMatch && (
                    <MatchDetailsOverlay match={recentMatchesData.find(
                        (match) => match.id === selectedMatch
                        )}
                        onClose={() => setSelectedMatch(null)}
                    />
                )}
                {/* --- Gabe: Commenting out Josh's old code to replace it with the RecentMatches component --- */}
                {/*<div className = 'background'>*/}
                    {/*this is background div where the containers sit. the main part of this are in css in the valorant.scss*/}
                    {/*<div className = "container">*/}
                        {/*this is container 1 this is where the left image text is found and the background image*/}
                        {/*<img src={breeze} alt="breeze"></img>*/}
                        {/*<div className="Teams">Furia vs NRG</div>*/}
                        {/*<div className="Date">Date: 16/2/2024</div>*/}
                        {/*<div className="Type">Type: Best of 3</div>*/}
                        {/*<div className="score">Score: 0-2</div>*/}
                        {/*<div className="event">Event: vct americas</div>*/}
                    {/*</div>*/}
                    {/*<div className = "container2">*/}
                        {/*this is container2 where the content for the right container is found*/}
                        {/*<img src={sunset} alt="sunset"></img>*/}
                        {/*<div className="Teams">FNATIC vs Team Vitality</div>*/}
                        {/*<div className="Date">Date: 23/2/2024</div>*/}
                        {/*<div className="Type">Type: Best of 3</div>*/}
                        {/*<div className="score">Score: 2-0</div>*/}
                        {/*<div className="event">Event: VCT EMEA</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/* --- End of comment block --- */}
            </main>
            </div>
        </>
        )
};
export default Valorant