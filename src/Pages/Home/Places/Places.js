import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Places.css';

const Places = () => {
    const [tourPlaces, setTourPlaces] = useState([]);

    useEffect(() => {
        fetch('https://lit-ridge-73515.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setTourPlaces(data));
    }, []);
    return (
        <div id="places">
            <h2 className="text-primary mt-5">Your dream Places</h2>
            <div className="place-container">
                {
                    tourPlaces.map(tourPlace => <Place
                        key={tourPlace.id}
                        tourPlace={tourPlace}
                    ></Place>)
                }
            </div>
        </div>
    );
};

export default Places;