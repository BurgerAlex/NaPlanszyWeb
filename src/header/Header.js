import * as React from "react";
import './header.scss'
import SearchForGames from "./SearchDevice";

export default function Header() {
    return (
        <header className="header">
            <div className="container flex">
                <div className="header__name"><a href='/'>OnBoard</a></div>
                <nav className="header__nav"><SearchForGames/></nav>
            </div>
        </header>
    );
}