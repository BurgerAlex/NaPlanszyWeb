import React, {useEffect, useState} from 'react';
import './browsePage.scss';
import GameElement from "./GameElement";
import WaitingSite from "./WaitingSite";

const BrowseElements = () => {
    const API = 'https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&pretty=true&client_id=R6iyDtkxaO&limit=50';
    const [apiArray, setApiArray] = useState([])

    useEffect(()=>{
        fetch(`${API}`)
            .then(resp => resp.json())
            .then(resp => setApiArray(resp.games))
            .catch(err => console.log(err))
    }, [])

    console.log(apiArray)

    if (apiArray.length === 0) {
        return <WaitingSite/>
    } else {
        return (
            <>
                <h1 className="web__title">Games sorted by rank</h1>
                <div className="browse__all flex">
                    {apiArray.map(el => {
                        return <GameElement game={el}/>
                    })}
                </div>
            </>
        );
    }
};

export default BrowseElements;