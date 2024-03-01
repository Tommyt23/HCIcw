import React from 'react';
import './index.scss';

const HeroBanner = ({ banner, altText }) => {
    /* Because I can't feed the image URL into the scss file */
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    /* Display hero text and image */
    return (
        <div className="hero-banner" style={bannerStyle}>
        </div>
    );
};

export default HeroBanner;