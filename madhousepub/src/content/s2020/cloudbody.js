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
                <h4>Pohdintoja Grandvillestä ja Cloudbody-teossarjasta keväällä 2020</h4>
                <h5>Liisa Pentti +Co</h5>

                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>
                    <p><b>Cloudbody, an ecology of dreams, osa 3
                    <br />
                    Pohdintoja Grandvillestä ja Cloudbody-teossarjasta keväällä 2020
                    </b>
                    </p>

                    <p>5/2020
<br />
video
</p>
                    <p>Koreografi ja tanssija Liisa Pentti sekä äänisuunnittelija Jouni Tauriainen puhuvat Cloudbody- teossarjan teemoista ennen kuin selviää, että teoksen toisen osan ensi-ilta voidaan järjestää kesäkuussa 2020. Tämä keskustelu yhdessä Fabian Nybergin kuva- ja videomateriaalin kanssa muodostaa lopulta oman, itsenäisen osansa. Olkoon se Cloudbody, an ecology of dreams, osa 3.
                    </p>
                    <p><b>Liisa Pentti +Co</b> on helsinkiläinen tanssiryhmä, jonka keskeiset arvot ovat taiteellinen tinkimättömyys ja omaäänisyys. Vuonna 2000 perustetun ryhmän taiteellinen profiili sijoittuu tanssin, esitystaiteen ja nykyteatterin maisemaan ja sen työskentelyä leimaa kokeellisuus ja uusien ilmaisumuotojen etsiminen.

                    </p>
                    <p>
                        <a href="http://liisapentti.com/">http://liisapentti.com/</a>
                    </p>
                </Modal>
            </div>
        </div>)
}