import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { placeId } = useParams();
    const [place, setPlace] = useState({});

    useEffect(() => {
        fetch(`https://lit-ridge-73515.herokuapp.com/places/${placeId}`)
            .then(res => res.json())
            .then(data => setPlace(data));
    }, [])
    return (
        <div>
            <h4>{placeId}</h4>
            <img src={place.img} alt="" />
            <h3>{place.name}</h3>
            <h5>{place.location}</h5>
            <p>{place.details}</p>
        </div>
    );
};

export default Booking;