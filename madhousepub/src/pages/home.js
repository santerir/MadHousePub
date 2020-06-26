import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/modal'
import ModalButton from '../components/modal-button'

import SVGFilters from '../components/svg-filters'
import { Hole1, Hole2, Hole3, Hole4, Inf } from '../components/svgs'


export default ({ }) => {

    // const SCROLL_POINTS = 2

    // const [known_position, setKnown_position] = useState(0);


    // const scroll_next = () => {
    //     var diff = window.scrollY - known_position;
    //     setKnown_position(window.scrollY)
    //     var f_height = window.innerHeight;
    //     var next = Math.min(Math.max(known_position + Math.sign(diff) * f_height, 0), f_height * (SCROLL_POINTS - 1));
    //     window.scrollTo(next)
    // }


    // useEffect(() => {

    //     function watchScroll() {
    //         window.addEventListener("scroll", scroll_next);
    //     }
    //     watchScroll();
    //     // Remove listener (like componentWillUnmount)
    //     return () => {
    //         window.removeEventListener("scroll", scroll_next);
    //     };
    // }, []);


    return (
        <>
            <SVGFilters />
            <div className="homepage s2020">
                <Link to="/about"><button className="info-button">
                    <Inf />
                </button></Link>
                <div className="title-bar">
                </div>
                <div className="content-field">
                    <div class="article-link">
                        <Link to="/article-1">
                            <h1>Bad House</h1>
                            <Hole1 />
                        </Link>
                    </div>
                    <div class="article-link">
                        <Link>
                            <h1>Bad House</h1>
                            <Hole2 />
                        </Link>
                    </div>
                    <div class="article-link">
                        <Link>
                            <h1>Bad House</h1>
                            <Hole3 />
                        </Link>
                    </div>
                    <div class="article-link">
                        <Link>
                            <h1>Bad House</h1>
                            <Hole4 />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}