import * as React from 'react';
import {useEffect, useState} from "react";
import WaitingPopper from "./WaitingPopper";

export default function SimplePopper() {
    const randomAPI = `https://api.boardgameatlas.com/api/search?ascending=false&pretty=true&client_id=R6iyDtkxaO&random=true`;
    const [randomAPIElement, setRandomAPIElement] = useState(false)
    const gameDescription = randomAPIElement.description_preview;

    useEffect(()=>{
        fetch(`${randomAPI}`)
            .then(resp => resp.json())
            .then(resp => {
               setRandomAPIElement(resp.games[0])
            })
            .catch(err => console.log(err))
    }, [])

    if (randomAPIElement === false) {
        return <WaitingPopper/>
    } else {
        return (
            <div className='popper'>
                <h2>{randomAPIElement.name}</h2>
                <section className='popper__details flex'>
                    <div>
                        <img className='popper__img' src={randomAPIElement.images.small}/>
                    </div>
                    <div className='popper__info'>
                        <p>Publisher: {randomAPIElement.primary_publisher.name}</p>
                        <p>Players: {randomAPIElement.min_players}-{randomAPIElement.max_players}</p>
                        <p>Min age: {randomAPIElement.min_age}</p>
                        <p>Playtime: {randomAPIElement.playtime}</p>
                    </div>
                </section>
                <>
                    {gameDescription.length === 0 ?
                        (<p>Preview currently unavailable</p>) :
                        <p className='popper__text'>{gameDescription}</p>
                    }
                </>
            </div>
        )
    }
}

// const API = 'https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&pretty=true&client_id=R6iyDtkxaO';
// const [apiArray, setApiArray] = useState([])
//
// useEffect(()=>{
//     fetch(`${API}`)
//         .then(resp => resp.json())
//         .then(resp => setApiArray(resp.games))
//         .catch(err => console.log(err))
// }, [])
//
// function getRandomNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// // function getRandomAPI(){
// //     return apiArray[getRandomNumber(0, apiArray.length)]
// // }
//
// const randomApi = apiArray[getRandomNumber(0, apiArray.length)]
//
// console.log(randomApi)
//
// // console.log(randomApi.id) // ---