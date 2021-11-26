import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Banner from '../Banner/Banner';
import News from '../News/News';
import Places from '../Places/Places';
import TouristSays from '../TuristSays/TouristSays';

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <TouristSays></TouristSays>
            <News></News>
        </div>
    );
};

export default Home;