import React from "react"
import './index.scss';
import Sidebar from '../Sidebar';
import valorant_esports from"../../assets/images/valorant_esports.png"
import cs2 from "../../assets/images/cs2.jpg"

class HomePage extends React.Component {
    render(){
        return(
            <>
            <Sidebar />
            <div className="Header">
                <p>Welcome to Student Esports society </p>
                </div>
            <div className="slideshow-container">
            <div className="slideshow">
                <img src={valorant_esports} alt="valorant esports">
                </img>
                <div class="slideshow">
                    <img src={cs2} alt="cs2">
                    </img>
                    </div>
            </div>
    </div>
            </>

        );
    }
}
export default HomePage;