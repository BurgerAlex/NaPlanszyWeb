import React, {useEffect, useState} from 'react';
import './mainPage.scss'

export default function MainPage() {
    const [backgroundStyle, setBackground] = useState(1)

    useEffect(() => {
        let intervalId = setInterval(()=> {
                if (backgroundStyle===1){
                    setBackground(2)
                } else if (backgroundStyle===2) {
                    setBackground(3)
                } else {
                    setBackground(1)
                }
            },2000)
        return(() => {
            clearInterval(intervalId)
        })
    },[backgroundStyle])

    if (backgroundStyle===1) {
        return (
            <>
                <section className="decoration__container decoration1">One</section>
            </>
        );
    } else if (backgroundStyle===2) {
        return (
            <>
                <section className="decoration__container decoration2">Two</section>
            </>
        );
    } else {
        return (
            <>
                <section className="decoration__container decoration3">Three</section>
            </>
        );
    }
};