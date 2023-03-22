/* 
 *  Copyright (c) 2023 Santtu Räisänen github.com/santerir
 *  
 *  This work is licensed under the terms of the MIT license.  
 *  For a copy, see <https://opensource.org/licenses/MIT>.
 */

import React, { useEffect, useState } from 'react'
import _ from 'lodash'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'


import { Inf, Cls } from '../../components/svgs'

export const Fluctuants = () => {

    const items = [
        <iframe src="https://player.vimeo.com/video/523902082?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="haiku_33"></iframe>
        ,
        <iframe src="https://player.vimeo.com/video/523903377?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="haiku_sometimes"></iframe>
        ,
        <iframe src="https://player.vimeo.com/video/523903228?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="haiku_questions collection" wmode="Opaque"></iframe>
        ,
        <iframe src="https://player.vimeo.com/video/523902457?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="haiku_go slow"></iframe>
        ,
        <iframe src="https://player.vimeo.com/video/523902163?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="haiku_a throwing to the world"></iframe>
        ,
        <iframe src="https://player.vimeo.com/video/523901887?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="haiku_ forget about your troubles"></iframe>
        ,
        <iframe src="https://player.vimeo.com/video/523902805?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="haiku_i think you might like to hear something from us"></iframe>

    ]


    const locs = [
        [{ top: "20%" }, { left: "12%" }],
        [{ top: "40%" }, { right: "15%" }],
        [{ top: "56%" }, { left: "0%" }],
        [{ top: "67%" }, { right: "10%" }],
        [{ top: "12%" }, { left: "17%" }],
        [{ top: "68%" }, { right: "0%" }],
        [{ top: "34%" }, { right: "18%" }],
    ]


    const [index, setIndex] = useState(0);
    const [order, setOrder] = useState(_.shuffle(_.range(0, items.length)));
    const [savedTimeout, setSavedTimeout] = useState(null);
    const [playing, setPlaying] = useState(false);


    const nextItem = () => {
        setIndex((index + 1) % items.length);
    }

    const closeVideo = () => {
        setPlaying(false);
        nextItem();
        setSavedTimeout(null);
    }

    const getItem = () => {
        if (!playing) {
            return null;
        }
        return Floater(items[order[index]], locs[index], closeVideo)
    }

    useEffect(() => {
        if (!savedTimeout) {
            setSavedTimeout(setTimeout(() => {
                setPlaying(true);
            }, 5000));
        }
    }, [savedTimeout])

    return (
        <div className="fluctuants">
            <div className="title">
                <h1>FLUCTUANTS
</h1>
                <h5>Marcela Levi & Lucía Russo</h5>
                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>
                    <p><b>FLUCTUANTS<br />
                    Marcela Levi & Lucía Russo


</b></p>

                    <p><b>4/2021<br />
                    video, text</b>
                    </p>

                    <p>
                        It's a series of <b>HAIKUS: CUTTING WORDS</b>.
This collection of cutting words and cutting images was taken from the private archive of choreographers <b>Marcela Levi</b> and <b>Lucía Russo</b>. Archive of images and notes of rehearsals that took place throughout 2020 at the Espaço Cultural Sítio Canto da Sabiá, in the state of Rio de Janeiro.


                    </p>
                    <p>
                        A collection of moments, questions<br />
In between acts<br />
Residues of work in the studio, at the office<br />
Non-sewn remnants<br />
Do not try to glue them <br />
Let them fluctuate<br />
                    </p>
                    <p>
                        <b>Concept and created by</b>: Marcela Levi and Lucía Russo<br />
                        <b>Performance</b>: Ícaro Gaya, Lucas Fonseca, Marcela Levi, Martim Gueller, Tamires Costa, Washington Silva <br />
                        <b>Special guests</b>: birds, toucan, turkey and geese<br />
                        <b>Video and drawings</b>: Lucía Russo<br />
                        <b>Editing</b>: Marcela Levi and Lucía Russo<br />
                        <b>Artistic realization and production</b>: Improvável Produções<br />

                    </p>
                    <p>
                        <b>Improvável Produções</b> is an independent space for training, research and creation, founded 11 years ago by <b>Marcela Levi</b> (Brazil) and <b>Lucía Russo</b> (Argentina).
                    </p>
                    <p>
                        <a href="http://marcelalevi.com/">http://marcelalevi.com/</a><br />
                        <a href="https://www.instagram.com/improvavelproducoes">https://www.instagram.com/improvavelproducoes</a><br />
                        <a href="https://vimeo.com/improvavelproducoes">https://vimeo.com/improvavelproducoes</a><br />

                    </p>
                </Modal>
            </div>
            <div className="container">
                <div className="canvas">
                    {getItem()}
                </div>
                <div className="palsta">
                    <p>Due to the Covid-19 situation, we had to go to the countryside to work in a kind of collective isolation.</p>
                    <p>We are involved in a creative process, working on a group dance piece, with the provisional name of <i>grrRoUNd</i>, to be premiered in May 2020 in Brussels, at the Kunstenfestivaldesarts.</p>
                    <p>It is the first time that we have embarked on a creation process outside the urban perimeter.</p>
                    <p>For a year now, our bodies are not crossed by the street.</p>
                    <p>For a year now, we have not had the possibility of having a chance, unplanned, inopportune, deviating encounter when walking in the street.</p>
                    <p>When walking in the street, we enter briefly into the "frame" of strangers and we are crossed by small frames of other presences.</p>
                    <p>For a year now, these "brief and unexpected visitors" have not impacted our bodies and senses.</p>
                    <p>We read and listen to news "from outside" through newspapers and television channels.</p>
                    <p>For a year our bodies have not encountered the world.</p>
                    <p>They do not experience being among others in the street.</p>
                    <p>How does the lack of this experience affect/shake/shock our cognition, our articulation?</p>
                    <p>These clips, HAIKUS, are a collection of what happened "out of frame" during the rehearsals so far.</p>
                    <p>A collection of chance encounters with our unexpected visitors: geese, toucans, turkeys and birds.</p>
                    <p>They interrupted us, diverted us, suspended us.</p>
                    <p>They are some "others" for this new creation.</p>
                    <p>We decided to share, on the screen, in the frame, what is for us out of frame.</p>
                    <p>What finally, when we go on stage, will not be there visible, but will perhaps sensitively permeate our presence.</p>
                    <p>These brief and unexpected visitors will appear at any moment on your screen.</p>
                    <p>Please do not try to glue them on.</p>
                    <p>Let them float.</p>
                    <p>Let them be brief and incomplete.</p>
                </div>
            </div>
        </div>)
}


const Floater = (item, loc, close) => {


    return (
        <div className="floatie-container" style={loc[0]}>
            <div className="floatie" style={loc[1]}>
                {item}
                <button onClick={close}><Cls></Cls></button>
            </div>
        </div>
    )
}