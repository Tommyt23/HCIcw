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
        <div className = "results">
            <img src={breeze} alt="breeze"></img>
            <div className="Teams">Furia vs NRG</div>
            <div className="Date">16/2/2024</div>
            <div className="Type">Best of 3</div>
            <div className="score">0-2</div>
            <div className="event">vct americas</div>
        </div>
        </>
        )
};
export default Valorant