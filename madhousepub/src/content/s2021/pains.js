import React, { useRef, useEffect, useState } from 'react'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { Bck, Cls, Fwd, Inf } from '../../components/svgs'

import { debounce } from 'lodash'


export const Pains = () => {

    const items = [
        [<img src="/img/pains/1_.png" />, <img src="/img/pains/1_.png" />],
        [<img src="/img/pains/2_.jpg" />, <img src="/img/pains/2_.jpg" />],
        [<img src="/img/pains/3_.jpg" />, <img src="/img/pains/3_.jpg" />],
        [<img src="/img/pains/4_.jpg" />, <img src="/img/pains/4_.jpg" />],
        [<img src="/img/pains/5_.jpg" />, <img src="/img/pains/5_.jpg" />],
        [<img src="/img/pains/6_.jpg" />, <img src="/img/pains/6_.jpg" />],
        [<img src="/img/pains/7_.jpg" />, <img src="/img/pains/7_.jpg" />],
        [<img src="/img/pains/8_.jpg" />, <img src="/img/pains/8_.jpg" />],
        [<img src="/img/pains/9_.jpg" />, <img src="/img/pains/9_.jpg" />],
        [<img src="/img/pains/10_.jpg" />, <img src="/img/pains/10_.jpg" />],
        [<img src="/img/pains/11_.jpg" />, <img src="/img/pains/11_.jpg" />],
        [<img src="/img/pains/12_.jpg" />, <img src="/img/pains/12_.jpg" />],
        [<img src="/img/pains/13_.jpg" />, <img src="/img/pains/13_.jpg" />],
        [<img src="/img/pains/14_.jpg" />, <img src="/img/pains/14_.jpg" />],

        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/79ca858c-063c-40d9-b740-cc5940bc9182.gif?ClientID=vimeo-core-prod&Date=1616071471&Signature=1bab104732c3d544b88f61afb1e23b46e2562fa3"></img>, <iframe src="https://player.vimeo.com/video/525471147?autoplay=1&amp;background=1" width="640" height="853" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/e60678be-40b2-4317-8fd4-ae49ab62bec6.gif?ClientID=vimeo-core-prod&Date=1616071528&Signature=2d50e43c864a2aa9e9c036042edd8a8292cb5647"></img>, <iframe src="https://player.vimeo.com/video/525470919?autoplay=1&amp;background=1" width="640" height="879" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/9ac28efe-8ebf-499b-af1f-7d8db643ade8.gif?ClientID=vimeo-core-prod&Date=1616071590&Signature=d95186d49e0f8c9d742072afa5ba744f3956e1ca"></img>, <iframe src="https://player.vimeo.com/video/525470919?autoplay=1&amp;background=1" width="640" height="879" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/6fb708db-c2e5-4d66-a6dd-a278cfa5ea81.gif?ClientID=vimeo-core-prod&Date=1616071647&Signature=963b783fbfd9ba0e49793808ad64095962cddc44"></img>, <iframe src="https://player.vimeo.com/video/525470804?autoplay=1&amp;background=1" width="640" height="853" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/d57dd346-f71d-4d81-9144-09aaff3f4dc7.gif?ClientID=vimeo-core-prod&Date=1616071849&Signature=49e33347addedba2b41021630f37310999731944"></img>, <iframe src="https://player.vimeo.com/video/525470683?autoplay=1&amp;background=1" width="640" height="853" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/4a9e635e-3780-4e0f-ac17-829e9f84a446.gif?ClientID=vimeo-core-prod&Date=1616071921&Signature=09458fc1a25e03cddea41b627ba989e0dbeea01c"></img>, <iframe src="https://player.vimeo.com/video/525470517?autoplay=1&amp;background=1" width="640" height="1018" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/769351fa-0f07-4640-ad68-6510b85bdcb5.gif?ClientID=vimeo-core-prod&Date=1616071978&Signature=b48c59145884e11549742aa700c3a85c584af9c2"></img>, <iframe src="https://player.vimeo.com/video/525469169?autoplay=1&amp;background=1" width="640" height="1138" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/00d31980-3ce9-48b2-82ec-4d5ace70ac76.gif?ClientID=vimeo-core-prod&Date=1616072066&Signature=ee2aaadb4db69dbc519d068c562819da00958489"></img>, <iframe src="https://player.vimeo.com/video/525469100?autoplay=1&amp;background=1" width="640" height="352" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/34b64b8d-7c61-4dba-9f5c-724ae96a491c.gif?ClientID=vimeo-core-prod&Date=1616072211&Signature=0e9266eb54d30827f2e294b3e765d16397e3eab8"></img>, <iframe src="https://player.vimeo.com/video/525469022?autoplay=1&amp;background=1" width="640" height="868" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        // <iframe src="https://player.vimeo.com/video/525468896?autoplay=1&amp;background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>,
        // <iframe src="https://player.vimeo.com/video/525468749?autoplay=1&amp;background=1" width="640" height="917" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>,
        // <iframe src="https://player.vimeo.com/video/525463068?autoplay=1&amp;background=1" width="640" height="879" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>,
        // <iframe src="https://player.vimeo.com/video/525463009?autoplay=1&amp;background=1" width="640" height="895" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>,
        // <iframe src="https://player.vimeo.com/video/525462969?autoplay=1&amp;background=1" width="640" height="539" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>,
        // <iframe src="https://player.vimeo.com/video/525462827?autoplay=1&amp;background=1" width="640" height="850" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>,
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/41a2318d-181d-40a8-9829-03f392c13e8a.gif?ClientID=vimeo-core-prod&Date=1616070004&Signature=c1b9aa81b9c42ec636c9ed88bcbf55e832baa7ed"></img>, <iframe src="https://player.vimeo.com/video/525462710?autoplay=1&amp;background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>]
    ]

    const maxWidth = 300;
    const maxHeight = 300;

    const [size, setSize] = useState([0, 0]);
    const [loading, setLoading] = useState(true);
    const [placedItems, setPlacedItems] = useState(true);
    const [selected, setSelected] = useState(null);

    const canvas = useRef();

    const place = (item, key) => {

        let x = Math.floor(Math.random() * (size[0] - maxWidth));
        let y = Math.floor(Math.random() * (size[1] - maxHeight));

        return (<button onClick={() => { setSelected(key) }}><div className="collage-item" key={key} style={{ position: "absolute", top: y, left: x }} >  {item[0]} </div></button>)
    }

    const mod = (n, m) => {
        return (((n % m) + m) % m)
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

    useEffect(() => {

        let handle_resize = debounce(() => {
            setSize([canvas.current.offsetWidth, canvas.current.offsetHeight]);
        }, 500)

        window.addEventListener("resize", handle_resize);

        return (() => {
            window.removeEventListener("resize", handle_resize);
        }
        )

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
            {selected != null && items[selected] && <div className="lightbox">
                <div>
                    <button id="cls_btn" onClick={() => { setSelected(null) }}><Cls></Cls></button>
                    {items[selected][1]}
                    <button id="nxt_btn" onClick={() => { setSelected(mod(selected + 1, items.length)) }}><Fwd></Fwd></button>
                    <button id="prev_btn" onClick={() => { setSelected(mod(selected - 1, items.length)) }}><Bck></Bck> </button>
                </div>
            </div>}
            <div id="renees-canvas" ref={canvas}>
                {placedItems}
                <img className="title" src="/img/pains/title.gif"></img>
            </div>
        </div>
    )
}