import React, { useEffect, useState } from 'react'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'
import useTimeout from '../../components/useTimeout'

import { Inf, Cls } from '../../components/svgs'

export const Fluctuants = () => {

    const items = [
        <img src="/img/jasenet/2.webp"></img>
    ]

    const [video, setVideo] = useState(null);

    const placeItem = () => {
        setVideo(0);
    }

    const closeVideo = () => {
        setVideo(null)
    }

    const getItem = () => {
        if (!items[video]) {
            return;
        }
        return Floater(items[video], ["20em", "10em"], closeVideo)
    }

    useEffect(() => {
        if (!video) {
            setTimeout(() => {
                placeItem();
            }, 5000);
        }
    }, [video])

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
                        <b>Conception and creation</b>: Marcela Levi and Lucía Russo<br />
                        <b>Performance</b>: Ícaro Gaya, Lucas Fonseca, Marcela Levi, Martim Gueller, Tamires Costa, Washington Silva <br />
                        <b>Special guests</b>: birds, toucan, turkey and geese<br />
                        <b>Video and drawings</b>: Lucía Russo<br />
                        <b>Edition</b>: Marcela Levi and Lucía Russo<br />
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
            <div className="palsta canvas">
                {getItem()}
                <p>Due to the situation of Covid-19,we had to go to the countryside to work in a kind of collective isolation.</p>
                <p>We are involved in a creation process, working on a group dance piece, with the provisional name of grrRoUNd, to be premiered in May 2020 in Brussels, at the Kunstenfestivaldesarts.</p>
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
        </div>)
}


const Floater = (item, loc, close) => {

    const styles = {
        top: loc[0],
        left: loc[1],
    }



    return (
        <div className="floatie" style={styles}>
            <button onClick={close}><Cls></Cls></button>
            {item}
        </div>
    )
}