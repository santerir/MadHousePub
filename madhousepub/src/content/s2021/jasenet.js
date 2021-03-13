import React from 'react'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { Inf } from '../../components/svgs'

export const Jasenet = () => {
    return (
        <div className="jasenet">
            <div className="title">
                <h1>Ryhmän jäsenet</h1>
                <h5>Sebastian López-Lehto ja Emmi Kaasalainen</h5>

                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>
                    <p><b>Ryhmän jäsenet<br />
Sebastian López-Lehto & Emmi Kaasalainen
</b></p>

                    <p><b>4/2020<br />
                    teksti, gif-tiedostot</b>
                    </p>

                    <p>
                        Teos ajattelee tekstin ja gif-tiedoston mediumin kautta synkronoituvia ruumiinosia yhteisönmuodostuksen bioteknologiana.
                    </p>
                    <p>
                        Teos on osa koreografi <b>Sebastian López-Lehdon</b> ja osteopaatti-muusikko <b>Emmi Kaasalaisen</b> yhteisöllisyyden ja joukon ruumiillisuutta käsittelevää projektia, jossa yhteisön muodostusta tarkastellaan ruumiillisten taitojen ja koreografisten käytänteiden kautta. Projekti kysyy: miten ruumiin kykyä asettua yhteyteen toisten ruumiiden kanssa voi eksplisiittisesti tukea? Millaisista ruumiillisista tapahtumista yhteyden tai eristymisen kokemuksessa on kyse? Millaiset koreografiset käytänteet liittävät ruumiita yhteen ja tuottavat ryhmille ominaisia tunteita ja ajattelua?
                    </p>
                    <p>
                        <a href="https://socialmovements.blog/home/">https://socialmovements.blog/home/</a>
                    </p>
                    <p>
                        —
                    </p>
                    <p>
                        <b>Group members </b>
                    </p>
                    <p>
                        The piece thinks through the media of text and gif-file about synchronizing body parts as community creating biotechnology.
                    </p>
                    <p>
                        The piece is a part of a project from choreographer <b>Sebastian López-Lehto</b> and osteopath-musician <b>Emmi Kaasalainen</b> on the corporeality of community formation and being a crowd. In this project, community formation is looked at as a bodily skill and as a product of choreographic practises. The project asks: How can the body´s ability to connect with other bodies be explicitly supported? What kind of corporeal events are experiences of connection or isolation? What kinds of choreographic practices connect bodies, and produce emotions and thinking specific to groups of people?
                    </p>
                    <p>
                        <a href="https://socialmovements.blog/home/">https://socialmovements.blog/home/</a>
                    </p>
                </Modal>
            </div>
            <div className="palsta">
                <p>Ajattelen massojen nautintoa. Väkijoukkojen jalkojen rasvaa, yhdessä, vanukkaan kiinteydellä hytiseviä, heiluvia reisiä. Taipuvien jalkojen ympäröiviä liharasvakuorrutuksia.
                </p>
                <p>Ajattelen koukistumista, ojentumista. Reisien laskoksia. Reisien rasvaisia nahkakerroksia. Keinuntaa.</p>
                <p>läts läts mutta joustaen. läts läts.</p>
                <p>Ajattelen lantioni rasvaa. Nahan napsumista etureisieni rasvan yläosan kanssa. Reiteni ovat kuorrutetut rasvanahalla, josta voi tarrata ja siirtää koko ruhoa. Reiteni ovat lätisevät, vahvat nauttivat möntit.</p>
                <p>Ajattelen massojen liikkuvia keskuksia, väkijoukon samettisia energioita, niiden tiivistymisiä, reisien ja raajojen yhteistä suhinaa, vartaloiden sykettä yhteisenä limana.</p>
                <p>Ajattelen keskittyneitä älykkäitä muuntuvia massoja. Vastavuoroisesti virtaavia, nauravia ja ilossaan kurinalaisia aistimusvirtojen organismijoukkoja.</p>
                <p>Ajattelen massoja vierelläni, niiden rytmikästä keinuntaa. Ajattelen keinuntaa puolelta toiselle, yhteistä pysähtymistä ja liikkeelle lähtöä. Rytmikkäiden askeleiden tukea vastassani ja sivuillani. Olen merilevää, olen pataljoonan lojaali, olen sivuilta tuettu energia virta. Levenen kun vierelläni olevat huutavat lauluaan.</p>
                <p>Ajattelen joukon iloista kurinalaisuutta. Lihavia paksuja jalkoja aloittamassa liikkeen, lopettamassa liikkeen. Pää kasassa. Laskostuvat rasvaiset reidet. Keinuvat perseet.</p>
                <p>Olen aallossa. Olen aaltoa.</p>

            </div>
        </div>)
}
