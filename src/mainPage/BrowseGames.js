import React from 'react';
// import {Link} from 'react-router-dom';

const BrowseGames = () => {


    return (
        <div className='browse__games function__element'>
            <a href="http://localhost:63342/NaPlanszy/na-planszy/public/browseNaPlanszy.html?_ijt=uvkqmrodhheetetajnalt2rnhn&_ij_reload=RELOAD_ON_SAVE" className='browse__btn'>Tu ikonka</a>
            {/*<Link href='../../public/browseNaPlanszy.html' onClick={(e)=> {e.preventDefault();}}>*/}
            {/*    Link?*/}
            {/*</Link>*/}
            <h2 className='browse__title'>Przejrzyj bibliotekę gier</h2>
        </div>
    );
};

export default BrowseGames;