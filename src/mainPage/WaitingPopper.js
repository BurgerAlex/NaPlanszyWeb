import React from 'react';
import './waiting.scss';

const WaitingPopper = () => {
    return (
        <div className='waiting__element flex'>
            <div className="waiting__animation"></div>
            <h2>Rolling...</h2>
        </div>
    );
};

export default WaitingPopper;