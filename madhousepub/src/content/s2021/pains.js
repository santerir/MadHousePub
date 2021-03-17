import React, { useRef } from 'react'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { Inf } from '../../components/svgs'


export const Jasenet = () => {

    const items = [

    ]

    const maz

    const [size, setSize] = useState([0, 0]);

    const canvas = useRef();

    const place = (item, key) => {

        let x = Math.floor(Math.random() * size[0]);
        let y = Math.floor(Math.random() * size[1]);

        return (<div key={key} style={{ position: absolute, top: y, left: x }} >  {item} </div>)
    }

    return (
        <div className="jasenet">
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

            </div>
        </div>
    )
}