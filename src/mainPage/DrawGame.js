import React, {useState} from 'react';
import SimplePopper from "./Popper";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import {GiRollingDices} from 'react-icons/gi';

const DrawGame = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    return (
        <div className='draw__game function__element'>
            <div className='flex'>
                <button className='btn function__btn flex' aria-describedby={id} type="button" onClick={handleClick}>
                    <GiRollingDices/>
                </button>
                <Popper className='popper' id={id} open={open} anchorEl={anchorEl}>
                    <Box className='popper__box' sx={{ border: 1, p: 1 }}>
                        <div className='flex close__btn__element'>
                            <button className='btn close__btn flex' onClick={handleClick}>X</button>
                        </div>
                        <SimplePopper/>
                    </Box>
                </Popper>
            </div>
            <h2 className='function__title'>Roll'n go</h2>
        </div>
    );
};

export default DrawGame;