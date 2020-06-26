import React from 'react'
import { Link } from 'react-router-dom'

import { Cls } from '../components/svgs'

export default ({ edition, next, prev, children }) => {

    return (
        <div className={["article", edition.cls].join(' ')}>
            <div className="header">
                <h4> {edition.name} </h4>
                <Link to="/"><button className="close-button">
                    <Cls></Cls>
                </button></Link>
            </div>
            <div className="content">{children}</div>
            <div className="footer">
                {prev && <Link to={prev.url}>{prev.text}</Link>}
                {next && <Link to={next.url}>{next.text}</Link>}
            </div>
        </div>)
}
