import React from 'react';
import '../mainPage/waiting.scss';

const WaitingSite = () => {
    return (
        <div className='waiting__element flex'>
            <div className="waiting__animation"></div>
            <h2>Loading ...</h2>
        </div>
    );
};

export default WaitingSite;