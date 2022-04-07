import * as React from "react";
import './header.scss'
import SearchForGames from "./SearchDevice";

export default function Header() {
    // fetch('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&pretty=true&client_id=R6iyDtkxaO').then( response => response.json()).then(resp => {
    //     console.log( resp );
    // });

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__name"><a href='../../public/index.html'>Na Planszy</a></div>
                <nav className="header__nav"><SearchForGames/></nav>
            </div>
        </header>
    );
}