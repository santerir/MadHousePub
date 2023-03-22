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

export const Rakkaudesta = () => {
    return (
        <div className="rakkaudesta">
            <div className="title">
                <h1>Rakkaudesta <br />
                – sanasto tuleville vuosikymmenille</h1>
                <h5>Rakkaudesta-työryhmä</h5>

                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>

                    <p><b>2020<br />
                    teksti</b>
                    </p>

                    <p><i>Rakkaudesta – sanasto tuleville vuosikymmenille</i> on teoskokonaisuus, joka toteutuu kävelyesityksinä eri puolilla Suomea sekä verkossa päivittyvänä sanastona, <i>Utopediana</i>. Teos käsittelee väistämätöntä muutosta fossiilisesta aikakaudesta jälkifossiiliseen.


                    </p>
                    <p>Työryhmä: <b>Minna Haapasalo</b>, <b>Joona Lindberg</b>, <b>Jenny Mansikkasalo</b>, <b>Inari Pesonen</b>, <b>Emma Puikkonen</b>, <b>Heikki Tolin</b> ja <b>Johannes Vartola</b>.
                    Sanoja <i>Utopediaan</i>ovat kirjoittaneet: tutkija <b>Elisa Aaltola</b>, kirjailija Laura Gustafsson, runoilija <b>Pauliina Haasjoki</b>, tutkija <b>Panu Pihkala</b>, kirjailija <b>Matias Riikonen</b>, kirjailija <b>Jukka Viikilä</b>, toimittaja-kirjailija <b>Hanna Nikkanen</b> ja <b>Rakkaudesta</b>-työryhmä.
                    </p>
                    <p>
                        <a href="http://utopedia.fi/">http://utopedia.fi/</a>
                    </p>
                </Modal>
            </div>
            <div className="word palsta">
                <h2>Änky</h2>
                <audio src="/audio/rakkaudesta/anky.mp3" controls></audio>
                <p>Kyvyttömyys todistaa, ettet ole kuten isovanhempasi. Eksyt luennoimaan ”säätyyppien
                muutoksista” yhtä pitkällisesti kuin oma isoisäsi ”sota-aikana käytettyjen häkäpönttöautojen
                toimintaperiaatteista”. Isoisäsi lailla haluat esitellä vanhentuneita kartastoja ja analysoida
                kuolleiden poliitikkojen toimia. Pula-ajan kokeneet ihmiset eivät myöhemminkään heittäneet
                mitään pois, sinä välttelet yhä lihansyöntiä ja lentomatkailua, vaikka kumpikaan ei ole ollut enää
                aikoihin ongelma. Sanot, että luonnon syklit ovat häiriintyneet, ja sinua katsotaan niin kuin itse
                katsoit isoäitiäsi, kun tämä sanoi, että homoseksuaalisuus on sairaus. Isoäitisi menetti Karjalan,
                sinä koko maailman, mutta jossain vaiheessa puhe ”maailmanlopusta” alkoi kuulostaa höpinältä.
                <br />
                    <b>MR (Matias Riikonen)</b></p>
            </div>
            <div className="word palsta">
                <h2>Leikinnäkö</h2>
                <audio src="/audio/rakkaudesta/leikinnako.mp3" controls></audio>
                <p>Käyttäytymisen malli jonka avulla yhteisöt keksivät uudenlaisia ratkaisumalleja ongelmille.
                Kenellä tahansa yhteisön jäsenellä on mahdollisuus alkaa leikki, joka käsittelee ratkaistavaa
                pulmaa, ja muiden yhteisön jäsenten pitää yhtyä tähän leikkiin. Leikinnäön avulla on keksitty mm.
                rivilepo (yleistynyt ruuhka-aikaan julkisessa liikenteessä, kun henkilö painaa pään vieressä
                seisojan olalle) sekä kevyet yhteislämpöpuvut, joihin voi pukeutua jopa viisi ihmistä kerrallaan
                liikkumiskykyä menettämättä. Leikinnäkö on helpottanut monia hallitusneuvotteluja ja
                yhtiökokouksia. Leikki voi löytää uuden ratkaisun ongelmaan, tai olla löytämättä.
                <br />
                    <b>RT (Rakkaudesta-työryhmä)</b></p>
            </div>
            <div className="word palsta">
                <h2>Maarra</h2>
                <audio src="/audio/rakkaudesta/maarra.mp3" controls></audio>
                <p>2030-luvulla kehittyvä sururituaali, vertaa hautajaiset. Suru ja ahdistus, jotka liittyvät
                ilmastonmuutokseen ja luonnon tuhoutumiseen, saavat oman rituaalinsa. Sadattuhannet ihmiset
                saapuvat suremaan eri puolilla maailmaa. Rituaaleja järjestetään tuhansissa kaupungeissa, ja
                rituaalin kesto ja vaiheet vaihtelevat. Maarran ydintä on kuvattu näin: osallistua maarraan on
                luopua siitä kuvitelmasta, että kaikki jatkuu kuten ennen. Luopua itsepetoksesta. Osallistua
                maarraan on katsoa tilannetta rehellisesti ja surra sitä. Hengittää juuri nyt. Toiset uskovat, että
                maarraan osallistuminen palauttaa kyvyn toimia inhimillisesti ja rauhallisesti, suhteessa
                maailmaan ja omaantuntoon.
                <br />
                    <b>RT (Rakkaudesta-työryhmä)</b></p>
            </div>
            <div className="palsta">
                <h3>
                    Sanat luovat todellisuutta
                </h3>
                <p>
                    Aloimme työstää tulevaisuuteen suuntaavaa teosta vuonna 2016.
                    Alunperin ajatuksena oli luoda kirjallisuudessa ja populaarikulttuurissa
                    esiintyville dystopiakuville vastapaino, utopia. Tapasimme eri alojen
                    asiantuntijoita ja pidimme pieniä työpajoja heidän kanssaan. Keskustelimme
                    ilmastonmuutoksen sopeutumisen tutkija <b>Atte Harjanteen</b> kanssa utopioista
                    sekä ilmastonmuutokseen liittyvistä toivon merkeistä, neurofilosofi <b>Valtteri
                    Arstilan</b> kanssa muistin, ihmisen havaintotavan ja utopian suhteista,
                    ympäristöfilosofi <b>Elisa Aaltolan</b> kanssa arvovalintojen yhteisöllisyydestä ja
                    ympäristöteologi <b>Panu Pihkalan</b> kanssa ympäristöahdistuksesta.
                </p>
                <p>
                    Työskentelyn myötä utopia tuntui liikkuvan yhä kauemmaksi. Tuntui siltä,
                    että jos emme yhteisönä pysty analysoimaan ja kohtaamaan rauhassa tämän
                    hetken tosiasioita, perustuu jokainen utopistinen ajatus jo lähtökohdiltaan
                    illuusiolle. Ajatus siitä, että tarvitsemme sanastoa tulevan muutoksen
                    hahmottamiseksi, syntyi. Pyysimme sanoja tutkijoilta ja kirjailijoilta,
                    ja saimme niitä: ristiriitaisia, surullisia, toiveikkaita, kauhistuttavia.
                    Ryhdyimme itse kirjoittamaan sanoja, joilla käsittelimme itsessämme sekä
                    ympäristössämme tapahtuvaa muutosta. Vuodesta 2017 lähtien otimme
                    sanan kerrallaan ja kävelimme sen kanssa näyttämötilaan ja luontopoluille:
                    millainen teko, liike tai kuva tämän kanssa resonoi? Vuonna 2018 teimme
                    teoksen, jonka ensimmäinen puoliaika tapahtui yleisön kanssa Kalasatamassa
                    kävellen ja toinen osa Cirko -Uuden sirkuksen tilassa.
                </p>
                <p>
                    Tällä hetkellä teosprosessi “<i>Rakkaudesta – sanasto tuleville vuosikymmenille</i>”
                    toteutuu utopedia.fi – sanastona sekä kävelyesityksinä eri ympäristöissä.
                    Tähän mennessä olemme kävelyttäneet ihmisiä sanojen kanssa Turun
                    Samppalinnanmäellä, Ärjän saarella Kainuussa sekä Helsingissä.
                </p>
                <p>
                    Ekologisesti kestämättömästä elämäntavasta luopuminen ja ympäristömme
                    muutos herättää valtavasti tunteita ja ajatuksia joilla ei ole nimeä. Usein
                    ihminen pyrkii säilyttämään psyykkisen tasapainonsa selittämällä
                    ympäristötuhon itsestä riippumattomien tekijöiden aiheuttamaksi tai
                    siirtämällä sen aiheuttamia ilmiöitä kokonaan mielestään tietoisuuden
                    laitamille. Kuitenkin säätilojen muutokset tulevat pihoille ja kaduille, myrsky
                    tuulee kasvoihin. Tarvitsemme nimiä surulle, joka liittyy luopumiseen ja
                    elämäntapojen muutokseen, sekä niille ajatuksille, joiden myötä pystymme
                    muuttamaan ympäristösuhdettamme kestävämmäksi kohti jälkifossiilista
                    aikaa.
                </p>
                <p>Sanoista koottu Utopedia kuvaa niitä siirtymiä, joita ilmastonmuutoksen
                ja muiden ympäristönmuutosten aikana tapahtuu sekä maapallolla
                että ihmisten mielissä. Ehkä utopiaksi riittää ensin, että hyväksymme
                ympäristön tuhoutumisen aiheuttaman surun ja kykenemme sanallistamaan
                sen. Utooppinen tila voi syntyä halusta ottaa muutos vastaan yhteisönä
                yksin pärjäämisen sijaan. Olemme huomanneet itsessämme ja
                lähiympäristöissämme, että muutoksen käsittely lisää toimintakykyä,
                tekoja ja valintoja, jotka rakentavat kestävämpää tulevaisuutta. Hämärät,
                epämääräiset tunteet ilmastonmuutokseen ja muihin ekosysteemin
                muutoksiin liittyen on mahdollista käsitteellistää. Sanoin ja teoin kuljemme
                pitkin polkujen verkostoa, jossa luovumme pikkuhiljaa fossiilisesta
elämäntavasta ja valitsemme elää toisin.</p>
            </div>
            <div className="palsta">
                <h3>Kirjoita sana Utopediaan:</h3>
                <ul>
                    <i>
                        <li>Ota valkoinen paperi ja viisitoista minuuttia.</li>
                        <li>Ajattele arkeasi ja sitä, millaiseksi elämä on muuttumassa. Onko arjessasi jotain epämääräistä, toimimatonta tai hähmäistä, jolle ei ole nimeä? Onko joku toimintatapa, ajattelutapa tai henkilö jumissa?</li>
                        <li>Anna ilmiölle nimi.</li>
                        <li>Kirjoita ilmiön kuvaus.</li>
                    </i>
                </ul>
                <p><b>Olemme onnellisia, jos lähetät sanan <a href="http://utopedia.fi/lue/">Utopediaan!</a></b></p>
                <br />
            </div>
        </div>)
}
