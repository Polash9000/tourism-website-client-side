import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark pt-5 pb-5 mt-5">
            <Link className="fs-3" to="/home">TourBot</Link>
            <p className="text-primary">&copy; The copyright of TourBot 2021</p>
        </div>
    );
};

export default Footer;