import React from 'react';
import './mainPage.scss'
import BrowseGames from "./BrowseGames";
import DrawGame from "./DrawGame";
import DecorationElement from "./DecorationElement";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function MainPage() {
    return (
        <>
            <Header/>
            <div className='main__page'>
                <DecorationElement/>
                <section className='main__functions flex'>
                    <BrowseGames/>
                    <DrawGame/>
                </section>
            </div>
            <Footer/>
        </>
    )
};