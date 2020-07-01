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
                    <img src="./img/MHH_Logo.png"></img>
                    <h1>PUBLICATION</h1>
                    <div>
                        <h3>kesä 2020</h3>
                    </div>
                </div>
                <div className="content-field">
                    <div class="article-link">
                        <Link to="/practices-of-love-and-body">
                            <h1>Practices of Love <br /> and Body</h1>
                            <div className="spacer"></div>
                            <Hole1 />
                        </Link>
                    </div>
                    <div class="article-link">
                        <Link to="/rakkaudesta">
                            <h1>Rakkaudesta <br />
– sanasto tuleville vuosikymmenille</h1>
                            <div className="spacer"></div>
                            <Hole4 />
                        </Link>
                    </div>
                    <div class="article-link">
                        <Link to="/cloudbody">
                            <h1>Cloudbody,<br />
an Ecology of Dreams,<br />
osa 3</h1>
                            <div className="spacer"></div>
                            <Hole2 />
                        </Link>
                    </div>
                    <div class="article-link">
                        <Link to="/tunnemylläkkähässäkkä">
                            <h1>Tunnemylläkkähässäkkä</h1>
                            <div className="spacer"></div>
                            <Hole3 />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}