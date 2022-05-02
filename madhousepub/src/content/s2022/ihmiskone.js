import React, { useRef, useState, useEffect } from 'react'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { LanguageSelector, LanguageContent } from '../../components/language-selector'

import { Inf, Hole9 } from '../../components/svgs'

export const Ihmiskone = () => {

    const LANGS = ["FI", "EN"];

    const [lang, setLang] = useState("FI")

    return (
        <div className="ihmiskone">
            <div className="title">
                <h1>Täydellinen ihmisko(n)e</h1>
                <h5>Venla Ilona Blom</h5>
                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>

                    <LanguageSelector languages={LANGS} setLanguage={setLang} contentID="l-content" initial="FI"></LanguageSelector>

                    <div id="l-content">
                        <LanguageContent language={"FI"} selectedLanguage={lang}>
                            <p><b>Täydellinen ihmisko(n)e</b>
                                <br />
                                Venla Ilona Blom
                            </p>

                            <p>2022<br />
                                teksti & ääni
                            </p>
                            <p><b>Venla Ilona Blom</b> yhdistää työssään monipuolisesti musiikin lisäksi performanssia, tanssia ja ääni- ja liikeimprovisaatiota. Publicationissa Blom jakaa ajatuksiaan tekstin ja äänen muodossa teoksen WOMAN MACHINE taustalta.</p>
                            <p>NoMadHousen ohjelmistossa nähtävä kantaesitys WOMAN MACHINE on poikkitaiteellinen näyttämöteos, joka liikkuu moniulotteisesti konsertin, monologin ja tanssiteatteriesityksen välimaastossa. Teos ottaa voimakkaasti kantaa jatkuvasti uudistuvan ja kehittyvän teknologian ja informaatiotulvan vaikutukseen ihmisten mielenterveydelle. Erityisessä keskiössä on milleniaalien sukupolvi.</p>
                            <p><b>Venla Ilona Blom</b> on EMMA-palkittu muusikko ja säveltäjä. Blom on laulaja ja yksi Suomen harvoista ammattibeatboxaajista. Blom on toiminut päätoimisena esiintyvänä taiteilijana, muusikkona ja säveltäjänä vuodesta 2007 ja on Suomessa myös kysytty kouluttaja ja tuottaja. Blom on esiintynyt yli 30 maassa ja hänen lauluaan on kuultu mm. Game of Thrones -sarjan trailerissa.</p>


                        </LanguageContent>
                        <LanguageContent language={"EN"} selectedLanguage={lang}>
                            <p><b>The rise (and fall) of a perfect Woman Machine </b>
                                <br />
                                Venla Ilona Blom
                            </p>

                            <p>2022<br />
                                text & sound
                            </p>

                            <p>In her artistic practice, <b>Venla Ilona Blom</b> combines the dimensions of performance, dance, and improvisational movement along with music. In Publication Blom introduces us to her studies and contemplations on the making of the piece WOMAN MACHINE.</p>

                            <p>WOMAN MACHINE is a multidisciplinary stage performance experimenting widely through the concepts of concert, monology and performing arts. The piece is a remarkable statement contemplating ever changing digitality and information access and their impact on our mental health. The emphasis is especially on the millennial generation.</p>

                            <p>Venla Ilona Blom is an award winning musician and composer. Blom is a singer and one of the few professional beatboxing artists in Finland. She has been working as a performance artist, musician, and composer since 2007 and works as a claimed educator and producer. Blom has performed in over thirty countries and her singing can be heard in the trailer of the Game of thrones, among other projects.</p>



                        </LanguageContent>
                    </div>
                </Modal>
            </div>
            <div className="hole_ hole_9 hole-path">
                <Hole9></Hole9>
            </div>
        </div>


    )
}