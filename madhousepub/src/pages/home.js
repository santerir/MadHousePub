import React, { useEffect, useState, createRef } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/modal'
import ModalButton from '../components/modal-button'
import { range } from 'underscore';

import SVGFilters from '../components/svg-filters'
import { Hole1, Hole2, Hole3, Hole4, Inf } from '../components/svgs'


export default ({ }) => {

    const SCROLL_POINTS = 2

    const [current_pane, setCurrent_pane] = useState(0);
    const [known_position, setKnown_position] = useState(0);
    const [break_points, setBreak_points] = useState([0, 0]);

    const content_panes = [{ name: "I" }, { name: "II" }]

    const content_area = createRef();


    const scroll_next = (e) => {
        let element = e.target;
        var diff = element.scrollLeft - known_position;
        setKnown_position(element.scrollLeft)
        var diff = Math.sign(diff);
        var next = Math.max(0, Math.min(SCROLL_POINTS - 1, current_pane + diff))
        setKnown_position(next)
        element.scrollTo(break_points[next], 0)
    }

    const populate_breakpoints = () => {
        var total = content_area.current.scrollWidth;
        var arr = range(SCROLL_POINTS);
        arr = arr.map((n) => ((total / SCROLL_POINTS) * n))
        setBreak_points(arr)
    }


    useEffect(() => {
        populate_breakpoints();
    }, []);


    return (
        <>
            <SVGFilters />
            <div className="homepage s2020">
                <Link to="/about"><button className="info-button">
                    <Inf />
                </button></Link>
                <div className="title-bar">
                    <a href="https://madhousehelsinki.fi/">
                        <img src="./img/MHH_Logo.png"></img>
                    </a>
                    <h1> PUBLICATION </h1>
                    <h3> I </h3>
                </div>
                <div className="content-area" id="content-area" ref={content_area} onScroll={scroll_next}>
                    <div className="content-field">
                        <div class="article-link">
                            <Link to="/practices-of-love-and-body">
                                <h1>Practices of Love <br /> and Body</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <Hole1 />
                        </div>
                        <div class="article-link">
                            <Link to="/rakkaudesta">
                                <h1>Rakkaudesta <br />
– sanasto tuleville vuosikymmenille</h1>
                            </Link>

                            <div s-only="dsk" className="spacer"></div>
                            <Hole4 />
                        </div>
                        <div class="article-link">
                            <Link to="/cloudbody">
                                <h1>Cloudbody,<br />
an Ecology of Dreams,<br />
osa 3</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <Hole2 />

                        </div>
                        <div class="article-link">
                            <Link to="/tunnemylläkkähässäkkä">
                                <h1>Tunnemylläkkähässäkkä</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <Hole3 />

                        </div>
                    </div>
                    <div className="content-field">
                        <div class="article-link">
                            <Link to="/practices-of-love-and-body">
                                <h1>Practices of Love <br /> and Body</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <Hole1 />
                        </div>
                        <div class="article-link">
                            <Link to="/rakkaudesta">
                                <h1>Rakkaudesta <br />
– sanasto tuleville vuosikymmenille</h1>
                            </Link>

                            <div s-only="dsk" className="spacer"></div>
                            <Hole4 />
                        </div>
                        <div class="article-link">
                            <Link to="/cloudbody">
                                <h1>Cloudbody,<br />
an Ecology of Dreams,<br />
osa 3</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <Hole2 />

                        </div>
                        <div class="article-link">
                            <Link to="/tunnemylläkkähässäkkä">
                                <h1>Tunnemylläkkähässäkkä</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <Hole3 />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}