import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = ({ tourPlace }) => {
    const { _id, name, description, img } = tourPlace;
    return (
        <div className="place pb-3">
            <img width="400px" height="300px" src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <Link to={`booking/${_id}`}>
                <button className="btn btn-primary">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Place;