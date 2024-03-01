// import statment add the necessary componets to the page
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
    //title of the page
    return(
        <>
        <Sidebar />
        {/* this adds the side bar to the page*/}
        <div>
            <Header title={title} />
            {/*this recives the title Valorant and adds it to the top of the page*/}
        </div>
        <div className="valo">
            {/*this is the hero image. this is displayed at the top of the page*/}
            <img src={ValorantHero} alt="valorant esports" />
        </div>
        <div className = 'background'>
            {/*this is background div where the containers sit. the main part of this are in css in the valorant.scss*/}
            <div className = "container">
                {/*this is container 1 this is where the left image text is found and the background image*/}
                <img src={breeze} alt="breeze"></img>
                <div className="Teams">Furia vs NRG</div>
                <div className="Date">Date: 16/2/2024</div>
                <div className="Type">Type: Best of 3</div>
                <div className="score">Score: 0-2</div>
                <div className="event">Event: vct americas</div>
            </div>
            <div className = "container2">
                {/*this is container2 where the content for the right container is found*/}
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