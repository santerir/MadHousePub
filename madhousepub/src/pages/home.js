import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/modal'
import ModalButton from '../components/modal-button'

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
            <div className="homepage s2020">
                <Modal closable modalId="info-modal">
                    InfoText
            </Modal>
                <div className="title-bar">
                    <ModalButton modalId="info-modal">Info</ModalButton>
                    <Link to="/about">About</Link>
                </div>
                <div className="content-field">
                    <Link to="/article-1">Article 1</Link>
                    <Link>Article 2</Link>
                    <Link>Article 3</Link>
                    <Link>Article 4</Link>
                </div>
            </div>
        </>
    )
}