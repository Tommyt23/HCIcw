import React from 'react';
import Sidebar from "../Sidebar";
import "./valorant.scss";
import valorant_esports from "../../assets/images/valorant_esports.png";
import breeze from "../../assets/images/breeze.png";
import Header from "../Header";
const Valorant = () => {
    const title = 'Valorant';
    return(
        <>
        <Sidebar />
        <div>
            <Header title={title} />
        </div>
        {/*<div className="valo">*/}
        {/*    <img src={valorant_esports} alt="valorant esports" />*/}
        {/*    </div>*/}
        <div className = "container">
            <img src={breeze} alt="breeze"></img>
            <div className="Teams">Furia vs NRG</div>
            <div className="Date">Date: 16/2/2024</div>
            <div className="Type">Type: Best of 3</div>
            <div className="score">Score: 0-2</div>
            <div className="event">Event: vct americas</div>
        </div>
        </>
        )
};
export default Valorant