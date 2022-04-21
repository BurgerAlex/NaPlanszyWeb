import React, {useEffect, useState} from 'react';

const SearchGame = (props) => {
    const gameTitle = props.title;
    const API = `https://api.boardgameatlas.com/api/search?ascending=false&pretty=true&client_id=R6iyDtkxaO&name=${gameTitle}&fuzzy_match=true`;
    const [searchedGame, setSearchedGame] = useState(false)
    const gameDescription = searchedGame.description_preview;

    useEffect(()=>{
        fetch(`${API}`)
            .then(resp => resp.json())
            .then(resp => {
                setSearchedGame(resp.games[0])
            })
            .catch(err => console.log(err))
    }, [])

    if (searchedGame === false) {
        return <h1>Nope</h1>
    } else {
        console.log(searchedGame)

        return (
            <div>
                <h2>{searchedGame.name}</h2>
                <section className='popper__details flex'>
                    <div>
                        <img className='popper__img' src={searchedGame.images.small}/>
                    </div>
                    <div className='popper__info'>
                        <p>Publisher: {searchedGame.primary_publisher.name}</p>
                        <p>Players: {searchedGame.min_players}-{searchedGame.max_players}</p>
                        <p>Min age: {searchedGame.min_age}</p>
                        <p>Playtime: {searchedGame.playtime}</p>
                        {searchedGame.cs_rating === undefined ?
                            <p>Critics didn't bother to rate this game</p> :
                            <p>Critics rating: {searchedGame.cs_rating}/5</p>
                        }
                        {searchedGame.official_url === null ?
                            <p>Official website unavailable</p> :
                            <p>Official website <a href={searchedGame.official_url}>here</a></p>
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
        );
    }
};

export default SearchGame;