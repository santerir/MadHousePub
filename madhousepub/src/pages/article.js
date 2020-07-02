import React from 'react'
import { Link } from 'react-router-dom'

import { Cls, Fwd, Bck } from '../components/svgs'

export default ({ edition, next, prev, children }) => {

    return (
        <div className={["article", edition.cls].join(' ')}>
            <div className="header">
                <h4> Mad House Helsinki <span style={{ fontWeight: 100 }}>Publication</span> – {edition.name} </h4>
                <Link to="/"><button className="close-button">
                    <Cls></Cls>
                </button></Link>
            </div>
            <div className="content">{children}</div>
            <div className="footer">
                {prev && <Link to={prev}><button className="bck"><Bck /></button></Link>}
                {next && <Link to={next}><button className="fwd"><Fwd /></button></Link>}
            </div>
        </div>)
}
