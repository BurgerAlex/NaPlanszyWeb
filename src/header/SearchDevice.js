import * as React from "react";
import {useState} from "react";
import TextField from "@mui/material/TextField";

export default function SearchForGames(){
    const [isSearching, setIsSearching] = useState(false)
    const [title, setTitle] = useState('')

    function handleClick(){
        setIsSearching((prevState) => !prevState)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("szukam")
        console.log(title)
    }

    function handleChange(event) {
        setTitle(event.target.value)
    }

    if (isSearching) {
        return (
            <div className="nav__search">
                <button className="btn search__btn" onClick={handleClick}>Tu wstaw ikonę</button>
                <form className="search__form" onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        id="outlined-size-small"
                        size="small"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Szukaj"/>
                </form>
            </div>
        )
    }
    return (
        <div className="nav__search">
            <button className="btn search__btn" onClick={handleClick}>Tu wstaw ikonę</button>
        </div>
    )
}