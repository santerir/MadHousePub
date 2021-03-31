import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { range, debounce, reduce, noop, map, some } from 'lodash';

import ScrollSnap from 'scroll-snap'

import SVGFilters from '../components/svg-filters'
import { Hole1, Hole2, Hole3, Hole4, Hole5, Hole6, Hole7, Hole8, Inf } from '../components/svgs'


export default ({ }) => {

    const CONTENT_PANES = [{ name: "I", info_url: "/about" }, { name: "II", info_url: "/about-II" }]

    const { edition } = useParams();

    const starting_pane = reduce(CONTENT_PANES, (v, item, key) => item.name === edition ? key : v, 0);

    const SCROLL_POINTS = CONTENT_PANES.length

    const [current_pane, setCurrent_pane] = useState(starting_pane);
    const [break_points, setBreak_points] = useState([0, 0]);
    const [sizeChanged, setsizeChanged] = useState(false);
    const [resizing, setResizing] = useState(false);
    const [snapped, setSnapped] = useState(false);

    const content_area = useRef();
    const snapper = useRef();

    const history = useHistory();

    const getWidth = () => content_area.current.scrollWidth;

    const isMobile = () => { return ('ontouchstart' in document.documentElement); }

    const on_snapped = () => {
        setSnapped(false);
        let scroll_pos = content_area.current.scrollLeft
        let pane_size = break_points[1]
        let pos = Math.round(scroll_pos / pane_size) - 1;
        if (pos < 0) {
            content_area.current.scrollLeft = break_points[SCROLL_POINTS];
            setCurrent_pane(SCROLL_POINTS - 1);
            return;
        }
        if (pos > (SCROLL_POINTS - 1)) {
            content_area.current.scrollLeft = break_points[1];
            setCurrent_pane(0);
            return
        }
        setCurrent_pane(pos);
    }

    const on_snap = () => {
        setSnapped(true);
    }

    // const on_intersect = (entries) => {
    //     let is_snapped = reduce(entries, (acc, entry) => {
    //         // Each entry describes an intersection change for one observed
    //         // target element:
    //         //   entry.boundingClientRect
    //         //   entry.intersectionRatio
    //         //   entry.intersectionRect
    //         //   entry.isIntersecting
    //         //   entry.rootBounds
    //         //   entry.target
    //         //   entry.time
    //         if (entry.isIntersecting) {
    //             return true;
    //         }
    //         return acc;
    //     }, false);

    //     if (is_snapped) {
    //         return setSnapped(true);
    //     }
    // }

    const populate_breakpoints = () => {
        var total = getWidth();
        var arr = range(SCROLL_POINTS + 2);
        let x = 0;
        arr = arr.map((n) => ((total / (SCROLL_POINTS + 2)) * (n) + x));
        setBreak_points(arr)
    }

    const getOn_scroll = () => {
        if (isMobile()) {
            return debounce(on_scroll, 50);
        }
        return noop;
    }

    const on_scroll = () => {

        let scroll_pos = content_area.current.scrollLeft;

        let pane_size = break_points[1]
        let pos = Math.round(scroll_pos / pane_size) - 1;


        if (pos < 0) {
            content_area.current.scrollTo({ left: break_points[SCROLL_POINTS], top: 0 });
            setCurrent_pane(SCROLL_POINTS - 1);
            return;
        }
        if (pos > (SCROLL_POINTS - 1)) {
            content_area.current.scrollTo({ left: break_points[1], top: 0 });
            setCurrent_pane(0);
            return
        }

        setCurrent_pane(pos);
    }

    const go_to = (i) => {
        return () => {
            content_area.current.scrollTo({ left: break_points[i + 1], top: 0, behavior: "smooth" })
        }
    }


    const scrollHorizontally = (e) => {
        e.preventDefault();
        var delta = Math.min(1, Math.max(-1, (- e.deltaX - e.deltaY))) * 17;
        content_area.current.scrollLeft -= delta
    }


    useEffect(() => {

        history.push(`/${CONTENT_PANES[current_pane].name}`)

    }, [current_pane])

    useEffect(() => {
        populate_breakpoints()
        setsizeChanged(false)
    }, [sizeChanged]);

    useEffect(() => {

        content_area.current.scrollTo({ left: break_points[current_pane + 1], top: 0 })

    }, [break_points])

    useEffect(() => {

        if (snapped) {
            on_snapped();
        }

    }, [snapped])

    useEffect(() => {

        populate_breakpoints();

        if (!isMobile()) {
            bindScrollSnap()
            content_area.current.addEventListener('wheel', scrollHorizontally);

            let handle_resize = () => {
                setResizing(false);
                setsizeChanged(true);
            }

            window.addEventListener("resize", debounce(() => { setResizing(true) }, 300, {
                'leading': true
            }
            ));
            window.addEventListener("resize", debounce(handle_resize, 500));

            return (() => {
                content_area.current.removeEventListener('wheel', scrollHorizontally)
            })
        }


        // if (isMobile) {
        // let options = {
        //     root: document.querySelector('#content-area'),
        //     rootMargin: '0px',
        //     threshold: .7
        // }

        // intersector.current = new IntersectionObserver(on_intersect, options);
        // intersector.current.observe(frame1.current);
        // intersector.current.observe(frame2.current);
        // intersector.current.observe(frame3.current);
        // intersector.current.observe(frame4.current);

        // content_area.current.addEventListener('touchmove', throttle(on_scroll, 200)); }

    }, [])

    const bindScrollSnap = () => {
        const snapElement = new ScrollSnap(content_area.current, {
            snapDestinationX: '100%',
            snapStop: false,
            duration: 100,
            timeout: 100,
            threshold: 0.4,
            easing: t => t * (2 - t)
        });
        snapper.current = snapElement;
        snapper.current.bind(on_snap)
    }

    return (
        <>
            <div className="homepage">
                <Link to={CONTENT_PANES[current_pane].info_url}><button className="info-button">
                    <Inf />
                </button></Link>
                <div className="title-bar">
                    <a href="https://madhousehelsinki.fi/">
                        <img src="./img/MHH_Logo.png"></img>
                    </a>
                    <img className="pub-logo" src="/img/MHPLogo.svg" />
                    <h3> {CONTENT_PANES[current_pane].name} </h3>
                </div>
                <div className="content-area" id="content-area" ref={content_area}
                    onScroll={getOn_scroll()}

                >
                    <div className="dots">
                        {range(SCROLL_POINTS).map((i) => (<label onClick={go_to(i)} className={current_pane == i ? "active" : "inactive"}></label>))}
                    </div>
                    <div className="content-field s2021">
                        <div class="article-link">
                            <Link to="/fluctuants">
                                <h1>FLUCTUANTS</h1>
                            </Link>

                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole5 /> */}
                                <img className="hole" id="hole5" src="./img/holes/MHPhole1_1.png"></img>
                            </div>
                        </div>
                        <div class="article-link">
                            <Link to="/ryhman-jasenet">
                                <h1>Ryhmän jäsenet</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole6 /> */}
                                <img className="hole" id="hole6" src="./img/holes/MHPhole2_1.png"></img>
                            </div>
                        </div>
                        <div class="article-link">
                            <Link to="/growing-pains">
                                <h1>GROWING <br></br> PAINS</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole7 /> */}
                                <img className="hole" id="hole7" src="./img/holes/MHPhole3_1.png"></img>
                            </div>
                        </div>
                        <div class="article-link ekfrasis-link">
                            <Link to="/ekfrasiksesta-osa-2">
                                <h1>Ekfrasiksesta osa 2<br></br>
                                    <h2 className="smaller">Esityksen kuvittelemisesta  <br></br> ja muistamisesta</h2></h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole8 /> */}
                                <img className="hole" id="hole8" src="./img/holes/MHPhole4_1.png"></img>
                            </div>
                        </div>

                    </div>
                    <div className="content-field s2020">
                        <div class="article-link">
                            <Link to="/practices-of-love-and-body">
                                <h1>Practices of Love <br /> and Body</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole1 /> */}
                                <img className="hole" id="hole1" src="./img/holes/Hole1.png"></img>
                            </div>
                        </div>
                        <div class="article-link">
                            <Link to="/rakkaudesta">
                                <h1>Rakkaudesta <br />
– sanasto tuleville vuosikymmenille</h1>
                            </Link>

                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole4 /> */}
                                <img className="hole" id="hole4" src="./img/holes/Hole4.png"></img>

                            </div>
                        </div>
                        <div class="article-link">
                            <Link to="/cloudbody">
                                <h1>Cloudbody,<br />
an Ecology of Dreams,<br />
osa 3</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole2 /> */}
                                <img className="hole" id="hole2" src="./img/holes/Hole2.png"></img>
                            </div>

                        </div>
                        <div class="article-link">
                            <Link to="/tunnemylläkkähässäkkä">
                                <h1>Tunnemylläkkähässäkkä</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole3 /> */}
                                <img className="hole" id="hole3" src="./img/holes/Hole3.png"></img>
                            </div>

                        </div>
                    </div>
                    <div className="content-field s2021">
                        <div class="article-link">
                            <Link to="/fluctuants">
                                <h1>FLUCTUANTS</h1>
                            </Link>

                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole5 /> */}
                                <img className="hole" id="hole5" src="./img/holes/MHPhole1_1.png"></img>
                            </div>
                        </div>
                        <div class="article-link">
                            <Link to="/ryhman-jasenet">
                                <h1>Ryhmän jäsenet</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole6 /> */}
                                <img className="hole" id="hole6" src="./img/holes/MHPhole2_1.png"></img>
                            </div>
                        </div>
                        <div class="article-link">
                            <Link to="/growing-pains">
                                <h1>GROWING <br></br> PAINS</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole7 /> */}
                                <img className="hole" id="hole7" src="./img/holes/MHPhole3_1.png"></img>
                            </div>
                        </div>
                        <div class="article-link ekfrasis-link">
                            <Link to="/ekfrasiksesta-osa-2">
                                <h1>Ekfrasiksesta osa 2<br></br>
                                    <h2 className="smaller">Esityksen kuvittelemisesta  <br></br> ja muistamisesta</h2></h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole8 /> */}
                                <img className="hole" id="hole8" src="./img/holes/MHPhole4_1.png"></img>
                            </div>
                        </div>

                    </div>
                    <div className="content-field s2020">
                        <div class="article-link">
                            <Link to="/practices-of-love-and-body">
                                <h1>Practices of Love <br /> and Body</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole1 /> */}
                                <img className="hole" id="hole1" src="./img/holes/Hole1.png"></img>
                            </div>
                        </div>
                        <div class="article-link">
                            <Link to="/rakkaudesta">
                                <h1>Rakkaudesta <br />
– sanasto tuleville vuosikymmenille</h1>
                            </Link>

                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole4 /> */}
                                <img className="hole" id="hole4" src="./img/holes/Hole4.png"></img>

                            </div>
                        </div>
                        <div class="article-link">
                            <Link to="/cloudbody">
                                <h1>Cloudbody,<br />
an Ecology of Dreams,<br />
osa 3</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole2 /> */}
                                <img className="hole" id="hole2" src="./img/holes/Hole2.png"></img>
                            </div>

                        </div>
                        <div class="article-link">
                            <Link to="/tunnemylläkkähässäkkä">
                                <h1>Tunnemylläkkähässäkkä</h1>
                            </Link>
                            <div s-only="dsk" className="spacer"></div>
                            <div className="hole-container">
                                {/* <Hole3 /> */}
                                <img className="hole" id="hole3" src="./img/holes/Hole3.png"></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}