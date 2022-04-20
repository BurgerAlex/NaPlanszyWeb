import * as React from 'react';
import {useEffect, useState} from "react";

export default function SimplePopper() {
    const randomAPI = `https://api.boardgameatlas.com/api/search?ascending=false&pretty=true&client_id=R6iyDtkxaO&random=true`;
    const [randomAPIElement, setRandomAPIElement] = useState(false)

    useEffect(()=>{
        fetch(`${randomAPI}`)
            .then(resp => resp.json())
            .then(resp => {
               setRandomAPIElement(resp.games[0])
            })
            .catch(err => console.log(err))
    }, [])

    if (randomAPIElement === false) {
        return <>Wait for it...</>
    } else {
        console.log(randomAPIElement)
        console.log(randomAPIElement.id)
        return (
            <>{randomAPIElement.id}
                {/*<img src={randomAPIElement.thumb_url}></img>*/}
            </>
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