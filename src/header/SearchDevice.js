import * as React from "react";
import {useState} from "react";
import TextField from "@mui/material/TextField";
import {GiMagnifyingGlass} from 'react-icons/gi';
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import './searchPopper.scss';
import SearchGame from "./SearchGame";

export default function SearchForGames(){
    const [isSearching, setIsSearching] = useState(false)
    const [title, setTitle] = useState('')
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    function handleClick(){
        setIsSearching((prevState) => !prevState)
    }

    const handleSearch = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    function handleSubmit(e){
        e.preventDefault()
        console.log(title)
        setAnchorEl(anchorEl ? null : e.currentTarget);
    }

    function handleChange(event) {
        setTitle(event.target.value)
    }

    if (isSearching) {
        return (
            <div className="nav__search">
                <button className="btn search__btn flex" onClick={handleClick}><GiMagnifyingGlass/></button>
                <form className="search__form flex" onSubmit={handleSubmit}>
                    <TextField
                        placeholder="Title"
                        id="outlined-size-small"
                        size="small"
                        color="warning"
                        onChange={handleChange}
                    />
                    <input className='btn form__submit' type="submit" value="Search"/>
                </form>
                <Popper className='popper' id={id} open={open} anchorEl={anchorEl}>
                    <Box className='search__box' sx={{ border: 1, p: 1 }}>
                        <div className='flex close__btn__element'>
                            <button className='btn close__btn flex' onClick={handleSearch}>X</button>
                        </div>
                        <SearchGame title={title}/>
                    </Box>
                </Popper>
            </div>
        )
    }
    return (
        <div className="nav__search">
            <button className="btn search__btn" onClick={handleClick}><GiMagnifyingGlass/></button>
        </div>
    )
}