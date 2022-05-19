import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Cls, Fwd, Bck } from '../components/svgs'

export default ({ edition, next, prev, children }) => {

    const contentRef = useRef();

    const [hide, setHide] = useState(false);

    const offset = useRef(0);


    useLayoutEffect(() => {
        contentRef.current.scrollTo(0, 0);
        console.log("here")
    }
        , [children])

    useEffect(() => {

        const handleScroll = (e) => {
            var new_offset = e.currentTarget.scrollY;

            if (new_offset > offset.current) {
                setHide(true);
            }
            if (new_offset < offset.current) {
                setHide(false);
            }

            offset.current = new_offset;
        }

        window.addEventListener("scroll", handleScroll)


        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [hide])


    return (
        <div className={["article", edition.cls].join(' ')}>
            <div className={`header bckground ${hide ? "hide" : ""}`}>
                <Link to={edition.root}>
                    <h4> Mad House Helsinki <span style={{ fontWeight: 100 }}>Publication</span></h4>
                </Link>
                <Link to={edition.root}><button className="close-button">
                    <Cls></Cls>
                </button></Link>
            </div>
            <div className="content" ref={contentRef}>{children}</div>
            <div className={`footer bckground bckground-bttm ${hide ? "hide" : ""}`}>
                {prev && <Link to={prev}><button className="bck"><Bck /></button></Link>}
                {next && <Link to={next}><button className="fwd"><Fwd /></button></Link>}
            </div>
        </div >)
}
