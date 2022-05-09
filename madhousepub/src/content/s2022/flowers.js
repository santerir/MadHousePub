import React, { useRef, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { Inf } from '../../components/svgs'

import { LanguageSelector, LanguageContent } from '../../components/language-selector'


export const Flowers = () => {

    const LANGS = ["FI", "EN"];

    const [lang, setLang] = useState("FI")

    return (
        <div className="flowers">
            <div className="title">
                <h1>I Only Want To Talk About Flowers</h1>
                <h5>Diana Soria Hernandez</h5>
                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>

                    <LanguageSelector languages={LANGS} setLanguage={setLang} contentID="l-content" initial="FI"></LanguageSelector>

                    <div id="l-content">
                        <LanguageContent language={"EN"} selectedLanguage={lang}>
                            <p><b>I Only Want To Talk About Flowers</b>
                                <br />
                                Diana Soria Hernandez
                            </p>

                            <p>2022<br />
                                Interactive book
                            </p>

                            <p>“<i>I Only Want To Talk About Flowers</i> contains a small selection of works made in the span of 15 years. The starting point was a conversation with Anne Naukkarinen, editor of this digital publication; in which she showed interest in my artistic practice, fluid between mediums and concepts. There is no chronological order in this publication, works have been organized so that the reader can navigate making jumps when suggested, connected through process, concepts and experiences. It hopes to give the reader a brief insight of how it all comes together when looked from a distant perspective.”</p>

                            <p><i>Diana Soria Hernandez</i> is a visual artist mainly working with performance art, live installation, ceramics and drawing. She holds a BA in Fine Arts from La Esmeralda in Mexico City, an MFA in Printmaking from the Academy of Fine Arts Helsinki and is pursuing a MA in Live Art and Performance Studies at the Theatre Academy Helsinki. Her work has been shown internationally.</p>

                            <p><a href="http://dianasoria.net/">http://dianasoria.net/</a></p>

                        </LanguageContent>
                        <LanguageContent language={"FI"} selectedLanguage={lang}>
                            <p><b>I Only Want To Talk About Flowers</b>
                                <br />
                                Diana Soria Hernandez
                            </p>

                            <p>2022<br />
                                Interaktiivinen kirja
                            </p>

                            <p>“<i>I Only Want To Talk About Flowers</i> sisältää pienen määrän erilaisia teoksia, jotka ovat valikoituneet mukaan 15 vuoden ajalta. Alun perin kaikki alkoi keskustelusta Anne Naukkarisen, Publicationin päätoimittajan kanssa; Naukkarinen osoitti kiinnostusta taiteelliseen työhöni, aaltoiluun eri menetelmien ja konseptien välillä. Tässä teoksessa ei ole kronologista järjestystä, osat ovat järjestelty niin, että kokija voi navigoida sen läpi hyppelehtien, yhdistellen prosessia, konsepteja ja kokemuksia. Teos pyrkii antamaan kokijalle oivalluksia siitä, miten kaikki kokoontuu yhteen, etäisestä perspektiivistä katsellen.”</p>

                            <p><b>Diana Soria Hernandez</b> on kuvataiteilija, joka työskentelee performanssitaiteen, live-installaatioiden, keramiikan ja piirustuksen parissa. Hän on valmistunut taiteiden kandiksi La Esmeraldasta, Meksikosta sekä taiteiden maisteriksi Kuvataideakatemiasta Helsingistä. Tällä hetkellä Soria Hernandez suorittaa maisterin tutkintoa Taideyliopiston Teatterikorkeakoulusta. Hänen töitään on ollut esillä maailmanlaajuisesti.</p>

                            <p> <a href="http://dianasoria.net/">http://dianasoria.net/</a> </p>


                        </LanguageContent>
                    </div>
                </Modal>
            </div>
            <div className='palsta'>
                <h3>Tap the cover to open the PDF in a new tab:</h3>
            </div>
            <div className='palsta'>
                <a href="/resources/I_Only_Want_To_Talk_About_Flowers.pdf" target="_blank"><img src="img/flowers/flowers-cover.png" /></a>
            </div>
            <div className='palsta center-text'>
                <a href="/resources/I_Only_Want_To_Talk_About_Flowers.pdf" download>
                    <button className='lozenge larger'>
                        Download PDF here
                    </button>
                </a>
            </div>
        </div>
    )
}