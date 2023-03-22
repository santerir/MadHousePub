/* 
 *  Copyright (c) 2023 Santtu Räisänen github.com/santerir
 *  
 *  This work is licensed under the terms of the MIT license.  
 *  For a copy, see <https://opensource.org/licenses/MIT>.
 */

import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'

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
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/10a58a27-cadd-48bd-8c97-d5712ec4e4f7.gif?ClientID=vimeo-core-prod&Date=1616087955&Signature=b57b498555a00e63fa079d57e0662d30ced7ce2f"></img>, <iframe src="https://player.vimeo.com/video/525468896?autoplay=1&amp;background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/04bd30c4-852c-4442-9df9-8605aa1215e1.gif?ClientID=vimeo-core-prod&Date=1616088112&Signature=e0d927175fe61b74d81208847519a14efb8c4f32" />, <iframe src="https://player.vimeo.com/video/525468749?autoplay=1&amp;background=1" width="640" height="917" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/79741a5f-ea8a-4c3c-a9f4-e7ec9b3c0f6f.gif?ClientID=vimeo-core-prod&Date=1616088149&Signature=14b0440bfa6067d5c002e8a70c93e3676ac2e6b0"></img>, <iframe src="https://player.vimeo.com/video/525463068?autoplay=1&amp;background=1" width="640" height="879" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/eb71bfc3-560b-43fa-9320-0ed84a95a38b.gif?ClientID=vimeo-core-prod&Date=1616088212&Signature=bed40fc0b36502ab8230fe9d352fe40eb0158efe"></img>, <iframe src="https://player.vimeo.com/video/525463009?autoplay=1&amp;background=1" width="640" height="895" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/e45d9714-a934-4659-8233-7fa55fab08d3.gif?ClientID=vimeo-core-prod&Date=1616088240&Signature=0b08859e79b55f95b83a37407ccc3a9419dada45"></img>, <iframe src="https://player.vimeo.com/video/525462969?autoplay=1&amp;background=1" width="640" height="539" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/7ad9254a-6b4a-45ba-b6c1-54f8b4a6dc91.gif?ClientID=vimeo-core-prod&Date=1616088311&Signature=9d04b8b1c0780eb30cc18c20785afe9b9724141f"></img>, <iframe src="https://player.vimeo.com/video/525462827?autoplay=1&amp;background=1" width="640" height="850" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/41a2318d-181d-40a8-9829-03f392c13e8a.gif?ClientID=vimeo-core-prod&Date=1616070004&Signature=c1b9aa81b9c42ec636c9ed88bcbf55e832baa7ed"></img>, <iframe src="https://player.vimeo.com/video/525462710?autoplay=1&amp;background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/a64d4513-91fa-456d-bdcf-249c060e8d49.gif?ClientID=vimeo-core-prod&Date=1616088536&Signature=fcd661d29c190f2fbe53d247c9ccbba8a86bf9fc"></img>, <iframe src="https://player.vimeo.com/video/525462402?autoplay=1&amp;background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f2c7d6c2-7d80-456e-bb8f-74503625a8a4.gif?ClientID=vimeo-core-prod&Date=1616088611&Signature=239234fc08b2f4a9e54d3a61d6b2663a1502ea1c"></img>, <iframe src="https://player.vimeo.com/video/525462649?autoplay=1&amp;background=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/d3f5f847-aa43-4b2d-b2df-abadbbd30519.gif?ClientID=vimeo-core-prod&Date=1616088670&Signature=089f09ed31afa58789fa9b24bc7860960b64adec"></img>, <iframe src="https://player.vimeo.com/video/525462280?autoplay=1&amp;background=1" width="640" height="914" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/7b2aca87-d2be-4cf6-9904-5cfd913451be.gif?ClientID=vimeo-core-prod&Date=1616088702&Signature=9e56a1aaee9655316b49227fef55c45c3e95bbba"></img>, <iframe src="https://player.vimeo.com/video/525461993?autoplay=1&amp;background=1" width="640" height="827" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/1e64d5ba-a818-482e-a20c-2b86153e8e8a.gif?ClientID=vimeo-core-prod&Date=1616088727&Signature=0afa0a30e3c392a15251e4c8fa5952990442acde"></img>, <iframe src="https://player.vimeo.com/video/525462055?autoplay=1&amp;background=1" width="640" height="821" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b46e3a9b-a8d8-482a-9386-5bb6a437d4cd.gif?ClientID=vimeo-core-prod&Date=1616088761&Signature=4ab62ba2fcb2d3045923db72b57474f46de689ae"></img>, <iframe src="https://player.vimeo.com/video/525462096?autoplay=1&amp;background=1" width="640" height="878" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/e8fdee12-30fc-444c-9619-515cfd6718bc.gif?ClientID=vimeo-core-prod&Date=1616088799&Signature=827d1ee7aaf1010a69ebae355cd5d7396d525104"></img>, <iframe src="https://player.vimeo.com/video/525462166?autoplay=1&amp;background=1" width="640" height="958" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/4523f14a-e6fb-4697-bcfd-424c1fef9f93.gif?ClientID=vimeo-core-prod&Date=1616088842&Signature=e3e46a8d5193eeaf8adb57d94098a80cc3ec1a79"></img>, <iframe src="https://player.vimeo.com/video/525462223?autoplay=1&amp;background=1" width="640" height="804" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/dd8be5d0-f27f-4626-a5de-0e2a593bb313.gif?ClientID=vimeo-core-prod&Date=1616088873&Signature=d7090f78346b280a558f5c23becb8b4f77982f7e"></img>, <iframe src="https://player.vimeo.com/video/525461717?autoplay=1&amp;background=1" width="640" height="882" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>],
        [<img src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/1ff1b7bc-78d6-421e-b341-4c5b491c38ad.gif?ClientID=vimeo-core-prod&Date=1616088917&Signature=8637891eae7d2545e90def9b83fd10e9198d162d"></img>, <iframe src="https://player.vimeo.com/video/525461919?autoplay=1&amp;background=1" width="640" height="1138" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>]
    ]

    const audios = [
        "/audio/renee/1_.mp3",
        "/audio/renee/2_.mp3",
        "/audio/renee/3_.mp3",
        "/audio/renee/4_.mp3",
        "/audio/renee/5_.mp3",
        "/audio/renee/6_.mp3",
        "/audio/renee/7_.mp3",
        "/audio/renee/8_.mp3",
        "/audio/renee/9_.mp3",
        "/audio/renee/10_.mp3",
        "/audio/renee/11_.mp3",
        "/audio/renee/12_.mp3",
        "/audio/renee/13_.mp3",
        "/audio/renee/14_.mp3",
        "/audio/renee/15_.mp3",
        "/audio/renee/16_.mp3",
        "/audio/renee/17_.mp3",
        "/audio/renee/18_.mp3"
    ]


    const maxWidth = 0.3;
    const maxHeight = 0.3;

    const audMaxWidth = 0.05;
    const audMaxHeight = 0.2;

    const [size, setSize] = useState([0, 0]);
    const [loading, setLoading] = useState(true);
    const [placedItems, setPlacedItems] = useState(true);
    const [selected, setSelected] = useState(null);

    const canvas = useRef();

    const place = (item, key) => {

        let x = Math.floor(Math.random() * (size[0] * (1 - maxWidth)));
        let y = Math.floor(Math.random() * (size[1] - (size[0] * maxHeight)));

        return (<button onClick={() => { setSelected(key) }}><div className="collage-item" key={key} style={{ position: "absolute", top: y, left: x }} >  {item[0]} </div></button>)
    }

    const placeAudio = (item, key) => {

        let x = Math.floor(Math.random() * (size[0] * (1 - audMaxWidth)));
        let y = Math.floor(Math.random() * (size[1] - (size[0] * (audMaxHeight))));

        return (<AudioThing src={item} key={`audio_${key}`} loc={{ top: y, left: x }} />)
    }

    const mod = (n, m) => {
        return (((n % m) + m) % m)
    }

    const makeCollage = () => {
        let itms = items.map(place);
        let itms2 = itms.concat(audios.map(placeAudio));
        setPlacedItems(itms2);
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
                        It might give you some tummy ache and bad dreams. Avert your gaze, complete disapproval of unwanted feelings. Van Trier serves as an unconscious narrator of the human psyche, as a mirror of the personality to which it belongs. Actual dialectics of writing, sounds, drawings and paintings. An infinite number of possibilities arise from these numerous interactions. How daring, confused and insane they may seem at first sight they are carefully selected by Van Trier. Sometimes the works offer comfort and reassurance, the next moment they are from a repulsive ugliness. Unrestrained, emerging, the perfect banality to its present time. With great hospitality, Van Trier dares you to wander around. One promise like a Band Aid, Van Trier’s work will soothe your anxieties, heal your torments and make you smile for weeks.

                    </p>
                    <p>
                        <b>Renée van Trier</b> is a musician, performer and painter based in Netherlands.
                        <br></br>
                        <br></br>
                        <br></br>
                        <a href="https://www.reneevantrier.nl/">https://www.reneevantrier.nl/</a>
                    </p>
                </Modal>
            </div>
            {selected != null && items[selected] && <div className="lightbox">
                <div>
                    <button id="cls_btn" onClick={() => { setSelected(null) }}><Cls></Cls></button>
                    <h1>Loading...</h1>
                    {items[selected][1]}
                    <button id="nxt_btn" onClick={() => { setSelected(mod(selected + 1, items.length)) }}><Fwd></Fwd></button>
                    <button id="prev_btn" onClick={() => { setSelected(mod(selected - 1, items.length)) }}><Bck></Bck> </button>
                </div>
            </div>}
            <div id="renees-canvas" ref={canvas}>
                {placedItems}
                <img className="credit" src="/img/pains/Logo-VanTrier.png"></img>
                <img className="title" src="/img/pains/title.gif"></img>
            </div>
        </div>
    )
}


export const AudioThing = ({ src, loc, key }) => {

    const [playing, setPlaying] = useState(false);
    const p = useRef();

    const toggle = () => {
        setPlaying(!playing);
    }

    useLayoutEffect(() => {
        let method = playing ? "play" : "pause";
        p.current[method]();
    }, [playing])

    return (
        <button className={playing ? "active audio-player" : "not-active audio-player"} onClickCapture={toggle} style={loc}>
            <audio ref={p}>
                <source src={src} type="audio/mp3" />
            </audio>
        </button>
    )
}