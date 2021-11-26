import React from 'react';
import notFound from '../../Images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>Oops!</h1>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;