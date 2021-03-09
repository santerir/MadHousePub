import React, { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { Cls, Fwd, Bck } from '../components/svgs'

export default ({ edition, next, prev, children }) => {

    const contentRef = useRef();

    useLayoutEffect(() => {
        contentRef.current.scrollTo(0, 0);
        console.log("here")
    }
        , [children])

    return (
        <div className={["article", edition.cls].join(' ')}>
            <div className="header">
                <Link to="/">
                    <h4> Mad House Helsinki <span style={{ fontWeight: 100 }}>Publication</span></h4>
                </Link>
                <Link to={edition.root}><button className="close-button">
                    <Cls></Cls>
                </button></Link>
            </div>
            <div className="content" ref={contentRef}>{children}</div>
            <div className="footer">
                {prev && <Link to={prev}><button className="bck"><Bck /></button></Link>}
                {next && <Link to={next}><button className="fwd"><Fwd /></button></Link>}
            </div>
        </div>)
}
