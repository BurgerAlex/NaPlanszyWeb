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
        console.log(randomAPIElement)

        return (
            <div>
                <h2>{randomAPIElement.name}</h2>
                <section className='popper__details flex'>
                    <div>
                        <img className='popper__img' src={randomAPIElement.images.medium}/>
                    </div>
                    <div className='popper__info'>
                        <p>Publisher: {randomAPIElement.primary_publisher.name}</p>
                        <p>Players: {randomAPIElement.min_players}-{randomAPIElement.max_players}</p>
                        <p>Min age: {randomAPIElement.min_age}</p>
                        <p>Playtime: {randomAPIElement.playtime}</p>
                        {randomAPIElement.official_url === null ?
                            <p>Official website unavailable</p> :
                            <p>Official website <a href={randomAPIElement.official_url}>here</a></p>
                        }
                    </div>
                </section>
                <>
                    {gameDescription.length === 0 ?
                        <p>Preview currently unavailable</p> :
                        <p className='popper__text'>{gameDescription}</p>
                    }
                </>
            </div>
        )
    }
}