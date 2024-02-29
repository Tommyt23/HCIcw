import React from 'react';
import Sidebar from "../Sidebar";
import "./valorant.scss";
import ValorantHero from "../../assets/images/ValorantHero.png";
import breeze from "../../assets/images/breeze.png";
import sunset from "../../assets/images/sunset.png";
import ValoArena from "../../assets/images/ValoArena.png";
import Header from "../Header";
const Valorant = () => {
    const title = 'Valorant';
    return(
        <>
        <Sidebar />
        <div>
            <Header title={title} />
        </div>
        <div className="valo">
            <img src={ValorantHero} alt="valorant esports" />
        </div>
        <div className = 'background'>
            <div className = "container">
                <img src={breeze} alt="breeze"></img>
                <div className="Teams">Furia vs NRG</div>
                <div className="Date">Date: 16/2/2024</div>
                <div className="Type">Type: Best of 3</div>
                <div className="score">Score: 0-2</div>
                <div className="event">Event: vct americas</div>
            </div>
            <div className = "container2">
                <img src={sunset} alt="sunset"></img>
                <div className="Teams">FNATIC vs Team Vitality</div>
                <div className="Date">Date: 23/2/2024</div>
                <div className="Type">Type: Best of 3</div>
                <div className="score">Score: 2-0</div>
                <div className="event">Event: VCT EMEA</div>
            </div>
        </div>    
        </>
        )
};
export default Valorant