/* 
 *  Copyright (c) 2023 Santtu Räisänen github.com/santerir
 *  
 *  This work is licensed under the terms of the MIT license.  
 *  For a copy, see <https://opensource.org/licenses/MIT>.
 */

import React from 'react'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { Inf } from '../../components/svgs'

export const Cloudbody = () => {
    return (
        <div className="cloudbody">
            <div className="title">
                <h1>Cloudbody, <br />an Ecology of Dreams,<br />
osa 3 </h1>
                <h2>Pohdintoja Grandvillestä ja Cloudbody-teossarjasta keväällä 2020</h2>
                <h5>Liisa Pentti +Co</h5>

                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>

                    <p><b>5/2020
                    <br />
                    video</b>
                    </p>
                    <p>Koreografi ja tanssija <b>Liisa Pentti</b> sekä äänisuunnittelija <b>Jouni Tauriainen</b> keskustelevat <i>Cloudbody</i>-teossarjan teemoista ennen kuin selviää, että teoksen toisen osan ensi-ilta voidaan järjestää kesäkuussa 2020 Mad House Helsingissä. Keskustelu yhdessä <b>Fabian Nybergin</b> kuva- ja videomateriaalin kanssa muodostavat lopulta oman itsenäisen osansa <i>Cloudbody, an Ecology of Dreams, osa 3</i>.
                    </p>
                    <p><b>Liisa Pentti +Co</b> on helsinkiläinen tanssiryhmä, jonka keskeiset arvot ovat taiteellinen tinkimättömyys ja omaäänisyys. Vuonna 2000 perustetun ryhmän taiteellinen profiili sijoittuu tanssin, esitystaiteen ja nykyteatterin maisemaan ja sen työskentelyä leimaa kokeellisuus ja uusien ilmaisumuotojen etsiminen.


                    </p>
                    <p>
                        <a href="http://liisapentti.com/">http://liisapentti.com/</a>
                    </p>
                </Modal>
            </div>
            <div className="palsta">
                <iframe src="https://player.vimeo.com/video/429218014" width="640" height="360" frameborder="0" allow="fullscreen" allowfullscreen mozallowfullscreen webkitallowfullscreen></iframe>
            </div>
        </div>)
}