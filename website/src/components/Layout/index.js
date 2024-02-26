import React from "react";
import './index.scss';
import Sidebar from '../Sidebar';
import valorant_esports from "../../assets/images/valorant_esports.png";
import cs2 from "../../assets/images/cs2.png";
import { NavLink } from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.slideTimeout = null;
    }

    componentDidMount() {
        this.showSlides(1);
    }

    componentWillUnmount() {
        clearTimeout(this.slideTimeout);
    }

    showSlides(slideIndex) {
        let i;
        const slides = document.getElementsByClassName("slideshow");
        const dots = document.getElementsByClassName("dot");
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(() => this.showSlides(slideIndex + 1), 7000); // Change slide every 7 seconds
    }

    currentSlide(index) {
        // You can define functionality related to selecting a specific slide here
        // For example, you can pause the slideshow or navigate to a specific slide
    }

    render() {
        return (
            <>
            <Sidebar />
            <div className="Topnav">
                <p className="p">SES</p>
            </div>
            <div className="slideshow-container">
                <div className="slideshow">
                    <NavLink
                        exact="true"
                        className="Valorant-link"
                        to="/Valorant"
                        >
                        <img src={valorant_esports} alt="valorant esports" />
                    </NavLink>
                </div>
                <div className="slideshow">
                    <NavLink
                        exact="true"
                        className="CS2-link"
                        to="/CS2"
                        >
                        <img src={cs2} alt="cs2" />
                    </NavLink>
                </div>
                <div className="dot-container">
                    <span className="dot" onClick={() => this.currentSlide(1)}></span>
                    <span className="dot" onClick={() => this.currentSlide(2)}></span>
                </div>
            </div>
            </>
            );
    }
}

export default HomePage;
