import React, { useEffect, useState, createRef } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { range, debounce, reduce } from 'lodash';

import SVGFilters from '../components/svg-filters'
import { Hole1, Hole2, Hole3, Hole4, Inf } from '../components/svgs'


export default ({ }) => {

    const CONTENT_PANES = [{ name: "I", info_url: "/about" }, { name: "II", info_url: "/about-II" }]

    const { edition } = useParams();

    const starting_pane = reduce(CONTENT_PANES, (v, item, key) => item.name === edition ? key : v, 0);

    const SCROLL_POINTS = CONTENT_PANES.length

    const [current_pane, setCurrent_pane] = useState(starting_pane);
    const [break_points, setBreak_points] = useState([0, 0]);
    const [sizeChanged, setsizeChanged] = useState(false);

    const content_area = createRef();

    const history = useHistory();

    const getWidth = () => content_area.current.scrollWidth;

    const on_scroll = (e) => {
        let scroll_pos = content_area.current.scrollLeft
        let pane_size = break_points[1]
        let pos = Math.round(scroll_pos / pane_size);
        setCurrent_pane(pos);
    }

    const populate_breakpoints = () => {
        var total = getWidth();
        var arr = range(SCROLL_POINTS);
        arr = arr.map((n) => ((total / SCROLL_POINTS) * n))
        setBreak_points(arr)
    }


    const go_to = (i) => {
        return () => {
            content_area.current.scrollTo({ left: break_points[i], top: 0, behaviour: "smooth" })
        }
    }


    useEffect(() => {

        let handle_resize = () => {
            setsizeChanged(true)
        }

        populate_breakpoints()
        window.addEventListener("resize", debounce(handle_resize, 200))

    }, []);


    useEffect(() => {

        history.push(`/${CONTENT_PANES[current_pane].name}`)

    }, [current_pane])



    useEffect(() => {

        content_area.current.scrollTo({ left: break_points[current_pane], top: 0 })

    }, [break_points])

    useEffect(() => {
        populate_breakpoints()
        setsizeChanged(false)
    }, [sizeChanged]);


    // TODO: debounce and filter scroll event

    return (
        <>
            <SVGFilters />
            <div className="homepage">
                <Link to={CONTENT_PANES[current_pane].info_url}><button className="info-button">
                    <Inf />
                </button></Link>
                <div className="title-bar">
                    <a href="https://madhousehelsinki.fi/">
                        <img src="./img/MHH_Logo.png"></img>
                    </a>
                    <h1> PUBLICATION </h1>
                    <h3> {CONTENT_PANES[current_pane].name} </h3>
                </div>
                <div className="content-area" id="content-area" ref={content_area} onScroll={debounce(on_scroll, 50)}>
                    <div className="dots">
                        {range(SCROLL_POINTS).map((i) => (<label onClick={go_to(i)} className={current_pane == i ? "active" : "inactive"}></label>))}
                    </div>
                    <div className="content-field s2020">
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
                    <div className="content-field s2021">
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