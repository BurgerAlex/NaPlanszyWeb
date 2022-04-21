import React from 'react';
import './browsePage.scss';

const GameElement = (props) => {
    const game = props.game;

    return (
        <div className='game__element flex'>
            <div className='game__details flex'>
                <img src={game.images.small}></img>
                <div className='game__info'>
                    <h2>{game.name} ({game.year_published})</h2>
                    <p>
                        Publisher: {game.primary_publisher.name}<br/>
                        Players: {game.min_players}-{game.max_players}<br/>
                        Min age: {game.min_age}<br/>
                        Playtime: {game.playtime}<br/>
                        {game.cs_rating === undefined ?
                            <p>Critics didn't bother to rate this game</p> :
                            <p>Critics rating: {game.cs_rating}/5</p>
                        }
                        {game.official_url === null ?
                            <p>Official website unavailable</p> :
                            <p>Official website <a href={game.official_url}>here</a></p>
                        }
                    </p>
                </div>
            </div>
            {game.description_preview.length === 0 ?
                <p>Preview currently unavailable</p> :
                <p className="game__description">{game.description_preview}</p>
            }
        </div>
    );
};

export default GameElement;