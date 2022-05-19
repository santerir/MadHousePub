import React, { useRef, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { LanguageSelector, LanguageContent } from '../../components/language-selector'

import { Inf, Hole9 } from '../../components/svgs'

export const Blade = () => {

    const LANGS = ["FI", "EN"];

    const [lang, setLang] = useState("FI")

    return (
        <div className="blade">
            <div className="title">
                <h1>The blade</h1>
                <h5>Renen Itzhaki</h5>
                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>

                    <LanguageSelector languages={LANGS} setLanguage={setLang} contentID="l-content" initial="FI"></LanguageSelector>

                    <div id="l-content">
                        <LanguageContent language={"EN"} selectedLanguage={lang}>
                            <p><b>The blade</b>
                                <br />
                                Renen Itzhaki
                            </p>

                            <p>2022<br />
                                Video
                            </p>

                            <p>Walking with a camera in their hand, <b>Renen Itzhaki</b> develops a work that insists on the right to linger. The video <i>The blade</i> blends locations, places, faces, and impressions for the potential construction of narrative and affect. With delicacy, Itzhaki remains, questions, delves, moves, zooms in, sinks, goes away from, and follows the things and the way in which they appear.</p>

                            <p><b>Renen Itzhaki</b> is an artist active in the fields of performance, video, and installation. Their work is characterized by reflection on the processes of art making, authorship, institutional critique, and personal memory. They also collaborate as a performer, dramaturge and choreographer, working with different artists, including Jeremy Shaw, Boudry/Lorenz, Maryna Makarenko, Boris Nikitin, Lee Méir, Lia Rodrigues, and many more.</p>


                            <p><a target="_blank" href="http://www.whoisrenen.net">www.whoisrenen.net</a></p>


                        </LanguageContent>
                        <LanguageContent language={"FI"} selectedLanguage={lang}>
                            <p><b>The blade</b>
                                <br />
                                Renen Itzhaki
                            </p>

                            <p>2022<br />
                                Video
                            </p>

                            <p>Kameran kanssa kulkeva <b>Renen Itzhaki</b> rakentaa visuaalisen esseen, joka vaatii oikeutta viipyilyyn. Videoteos The blade yhdistelee paikkoja, kasvoja ja vaikutelmia mahdollistaakseen narratiivin ja vaikutelman rakentamisen Hienovaraisesti Itzhaki jää, kyselee, syventyy, liikkuu, zoomaa, uppoaa, poistuu ja seuraa asioita sekä tapaa, jolla ne ilmestyvät.</p>

                            <p><b>Renen Itzhaki</b> tekee taidetta videon, installaation ja performanssitaiteen parissa. Hänen työtään sävyttää taiteellisen prosessin tarkastelu, tekijyys, institutionaalinen kritiikki sekä henkilökohtainen kokemus. Itzhaki tekee taiteellista yhteistyötä performanssin, dramaturgian ja koreografian parissa. Hän on työskennellyt mm. Jeremy Shawin, Boudry/Lorenzin, Maryna Makarenkon, Boris Nikitinin, Lee Méirin, Lia Rodriguesin ja monen muun kanssa.</p>

                            <p><a target="_blank" href="http://www.whoisrenen.net">www.whoisrenen.net</a></p>


                        </LanguageContent>
                    </div>
                </Modal>
            </div>
            <div className='palsta'>
                <div className='p-wrapper'>
                    <ReactPlayer url="https://vimeo.com/701622331" className="react-player" controls="true"
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
        </div>
    )
}