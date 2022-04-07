import React, {useEffect, useState} from 'react';

const DrawGame = () => {
    const API = 'https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&pretty=true&client_id=R6iyDtkxaO';
    const [apiArray, setApiArray] = useState([])

    useEffect(()=>{
        fetch(`${API}`)
            .then(resp => resp.json())
            .then(resp => setApiArray(resp.games))
            .catch(err => console.log(err))
    }, [])

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // function getRandomAPI(){
    //     return apiArray[getRandomNumber(0, apiArray.length)]
    // }

    const randomApi = apiArray[getRandomNumber(0, apiArray.length)]

    console.log(randomApi)

    // console.log(randomApi.id) // ---

    return (
        <div className='draw__game function__element'>
            <button className='draw__btn'>Tu ikonka</button>
            <h2 className='draw__title'>Wylosuj tytuł</h2>
        </div>
    );
};

export default DrawGame;