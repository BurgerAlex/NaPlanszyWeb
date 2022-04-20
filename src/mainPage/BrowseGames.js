import React from 'react';
import {GiPokerHand} from 'react-icons/gi';

const BrowseGames = () => {


    return (
        <div className='browse__games function__element flex'>
            <a href="/" className='btn function__btn flex'><GiPokerHand/></a>
            <h2 className='function__title'>Show'em all</h2>
        </div>
    );
};

export default BrowseGames;