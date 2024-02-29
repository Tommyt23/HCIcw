import React from "react";
import './index.scss';
import Sidebar from '../Sidebar';
import ValorantHero from "../../assets/images/ValorantHero.png";
import cs2hero from "../../assets/images/cs2hero.png";
import { NavLink } from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        };
        this.slideTimeout = null;
    }

    componentDidMount() {
        this.showSlides();
    }

    componentWillUnmount() {
        clearTimeout(this.slideTimeout);
    }

    showSlides() {
        this.slideTimeout = setTimeout(() => {
            this.setState(prevState => ({
                slideIndex: (prevState.slideIndex + 1) % 2 // Assuming you have 2 slides
            }), this.showSlides);
            }, 5000); // Change slide every 7 seconds
    }

    currentSlide(index) {
        // You can define functionality related to selecting a specific slide here
        // For example, you can pause the slideshow or navigate to a specific slide
    }

    render() {
        const { slideIndex } = this.state;

        return (
            <>
            <Sidebar />
            <div className="Topnav">
                <p className="p">SES</p>
            </div>
            <div className="slideshow-container">
                <div className="slideshow" style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
                    <NavLink
                        exact="true"
                        className="Valorant-link"
                        to="/Valorant"
                        >
                        <img src={ValorantHero} alt="valorant esports" />
                    </NavLink>
                </div>
                <div className="slideshow" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
                    <NavLink
                        exact="true"
                        className="CS2-link"
                        to="/CS2"
                        >
                        <img src={cs2hero} alt="cs2" />
                    </NavLink>
                </div>
                <div className="dot-container">
                    <span className="dot" onClick={() => this.currentSlide(0)}></span>
                    <span className="dot" onClick={() => this.currentSlide(1)}></span>
                </div>
            </div>
            </>
            );
    }
}

export default HomePage;
