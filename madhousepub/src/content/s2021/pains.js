import React, { useRef, useEffect, useState } from 'react'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { Inf } from '../../components/svgs'


export const Pains = () => {

    const items = [
        <img src="/img/pains/1_.png" />,
        <img src="/img/pains/2_.jpg" />,
        <img src="/img/pains/3_.jpg" />,
        <img src="/img/pains/4_.jpg" />,
        <img src="/img/pains/5_.jpg" />,
        <img src="/img/pains/6_.jpg" />,
        <img src="/img/pains/7_.jpg" />,
        <img src="/img/pains/8_.jpg" />,
        <img src="/img/pains/9_.jpg" />,
        <img src="/img/pains/10_.jpg" />,
        <img src="/img/pains/11_.jpg" />,
        <img src="/img/pains/12_.jpg" />,
        <img src="/img/pains/13_.jpg" />,
        <img src="/img/pains/14_.jpg" />
    ]

    const maxWidth = 300;
    const maxHeight = 300;

    const [size, setSize] = useState([0, 0]);
    const [loading, setLoading] = useState(true);
    const [placedItems, setPlacedItems] = useState(true);

    const canvas = useRef();

    const place = (item, key) => {

        let x = Math.floor(Math.random() * (size[0] - maxWidth));
        let y = Math.floor(Math.random() * (size[1] - maxHeight));

        return (<div className="collage-item" key={key} style={{ position: "absolute", top: y, left: x }} >  {item} </div>)
    }

    const makeCollage = () => {
        let itms = items.map(place);
        setPlacedItems(itms);
        setLoading(false);
    }

    useEffect(() => {
        makeCollage();
    }, [size]);

    useEffect(() => {
        setSize([canvas.current.offsetWidth, canvas.current.offsetHeight]);
    }, []);

    return (
        <div className="pains">
            <div className="title">
                <h1>GROWING PAINS</h1>
                <h5>Renée Van Trier</h5>
                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>
                    <p><b>GROWING PAINS<br />
                        Renée Van Trier
                </b></p>

                    <p><b>4/2021<br />
                    visuals, sound
                    </b>
                    </p>
                    <p>
                        It might give you some tummy ache and bad dreams. Avert your gaze, complete disapproval of unwanted feelings. Van Trier serves as an unconscious narrator of the human psyche, as a mirror of the personality to which it belongs. Actual dialectics of writing, sounds, drawings and paintings. An infinite number of possibilities arise from these numerous interactions. How daring, confused and insane they may seem at first sight it is carefully selected by Van Trier. Sometimes the works offer comfort and reassurance, the next moment they are from a repulsive ugliness. Unrestrained, emerging, the perfect banality to its present time. With great hospitality, Van Trier dares you to wander around. One promise like a Band Aid, Van Trier’s work will soothe your anxieties, heal your torments and make you smile for weeks.

                    </p>
                    <p>
                        <b>Renée van Trier</b> is a musician, performer and painter based in Netherlands.
                        <a href="https://www.reneevantrier.nl/">https://www.reneevantrier.nl/</a>
                    </p>
                </Modal>
            </div>
            <div id="renees-canvas" ref={canvas}>
                {placedItems}
            </div>
        </div>
    )
}