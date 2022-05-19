import React, { useRef, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

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

            <div className="spacer"></div>

            <div className="palsta">
                <h4>Kuuntele teos ääneen luettuna:</h4>
                <ReactPlayer height="140px" width="340px" style={{ margin: "0 auto" }} url="https://soundcloud.com/madhousehelsinki/artikkeli-luettuna"></ReactPlayer>
            </div>

            <div className="spacer"></div>

            <div className='palsta'>
                <p>
                    Tänään olen niin pohjamutia myöten surullinen, pettynyt ja häpeissäni että selviytyäkseni työstäni, minun on puettava robottiasu ylleni ja painettava ON -nappia. Minun on vain suoriuduttava.<br />
                    Minun on lakattava olemasta ihminen.
                </p>
            </div>
            <div className='palsta center-text'>
                <p>LIIKAA</p>
                <ReactPlayer height="140px" width="340px" style={{ margin: "0 auto" }} url="https://soundcloud.com/madhousehelsinki/liikaa-1"></ReactPlayer>
            </div>
            <div className='palsta center-text'>
                <p>***</p>
            </div>
            <div className='palsta'>
                <h3>AJATUKSIA WOMAN MACHINE -TEOKSEN TYÖSKENTELYPROSESSISTA
                    (2020)
                </h3>
                <p>Beatboxaus on rumpukonesoundien imitoimista ihmisäänellä. Vuosikausia olen vienyt äänenkäyttöäni äärimmilleen tavoitellakseni täydellistä illuusiota – ollakseni rumpukoneen ruumiillistuma, osoittaakseni ylivertaisuuteni:</p>

                <p><b>human beats the machine</b></p>

                <p>Ajatus siitä, että on oltava konemaisen tarkka ilmaisussa, tekniikassa ja musiikissa alkoi syöpyä myös ajatteluuni ja asenteisiini suhteessa itseeni ihmisenä. Aloin versioimaan itseäni, ohjelmoimaan käyttäytymistäni ja kategorisoimaan tunteitani. Tein jatkuvaa analyysia itsestäni, jotta saisin lisää informaatiota – miten olla, miten käyttäytyä, miten kontrolloida, miten suoriutua. Opettelin olemaan tekijä, en kokija – oleva, en olija. Ajattelin, että ainoa tapa selvitä elämässä ja saavuttaa mitään, on opetella säätelemään tunteita ja kanavoimaan ajatuksia – eliminoimalla häiriötekijät, tukahduttamalla ahdistus, piilottamalla herkkyys.</p>

                <p>Opettelin olemaan versio, joka uskotteli kaikille olevansa kyvykäs, eloisa, rohkea, taitava ja pidättelemätön, toki myös <i>sopivissa määrin</i> herkkä, empaattinen ja sielukas. Minusta tulikin sellainen – suhtauduin elämääni narratiivisena tutkimuskohteena selittääkseni itselleni ja muille tietynlaiset asenteet, ajattelumallit ja elämässäni toistuvat ilmiöt. Kuvailin itseäni ja elämääni adjektiivein ja puhuin lääketieteellisten termien avulla mielenterveyteeni vaikuttavien tekijöiden olemassaolosta, mikä ”oikeutti” minut välillä suistumaan raiteiltani, menettämään kontrollin, näyttämään haavoittuvaisuuden –</p>

                <p>olemaan hetken ihan <i>oikea ihminen</i>.</p>

                <p>Opettelin kuitenkin pysymään piilossa, samalla kun seisoin työni puolesta kaikkien edessä, jatkuvasti ja koko ajan. Rakensin muurin, jonka taakse paeta. Opettelin pidättämään hengitystä jäätyvän veden pinnan alla, jotta saisin olla rauhassa. Sulloin kokemukseni ja tunteeni syvälle kehooni, josta tuli vankilani. Torjuin häpeän kontrolloimalla, ahdistuksen suorittamalla ja rakkauden piiloutumalla.</p>

                <p>Minusta tuli lopulta aito ihmiskone – <i>well functioning woman machine</i>, jota olen rakentanut koko aikuisikäni.</p>

                <p>Vuonna 2019 se meni epäkuntoon, minä menin epäkuntoon – menin rikki. Lääketieteellisen diagnoosin mukaan ”<i>koneiston osien alta paljastui vioittunut ydin</i>”.</p>

                <p>Mutta mitä tapahtuu, kun ihmiskone vioittuu? Mitä tapahtuu, kun se särkyy kokonaan? Onko koneen kuolema ihmisen uusi elämä?</p>
            </div>
            <div className='palsta center-text'>
                <p>***</p>
            </div>
            <p className='palsta'>
                <i>
                    Tunteeni vyöryvät päälleni jokaisena elämäni hetkenä. Ne johdattavat minut harhaan. Jossain kaikkien noiden tunteiden alla on karttani, intuitioni, joka on hautautunut kauas lapsuuteni, nuoruuteni ja varhaisaikuisuuteni taistelujen alle – muurautunut syvälle erilaisten diagnoosien värittämän omakuvan ja pseudoidentiteetin syvyyksiin. Elämä on kaatanut juurieni päälle niin paljon sementtiä, että en pääse tunteitani ja ajatuksiani pakoon
                    – en vaikka ne ovat kerta toisensa jälkeen lähellä tappaa minut.
                </i>
            </p>
            <div className='palsta center-text'>
                <p>***</p>
            </div>
            <div className='palsta'>
                <h3>
                    KIELESTÄ<br></br>
                    (2021)
                </h3>
                <p>Keväällä 2020 sain Koneen Säätiön apurahan WOMAN MACHINE -teoksen säveltämiseen ja käsikirjoittamiseen. Pandemia oli juuri puhjennut ja jouduin eristämään itseni kotistudiooni kuukausiksi. Noiden kuukausien aikana ei syntynyt sävellyksiä – syntyi tekstiä. Purin paperille kokemuksia, joista olin aiemmin vaiennut. Mitä enemmän kirjoitin, sitä selkeämmin koin tarvetta kirjoittaa. En välittänyt raameista, muodoista tai punaisesta langasta – välitin vain omasta rehellisyydestäni. Kirjoitin paniikkihäiriöstä, kaksisuuntaisen mielialahäiriön diagnoosista ja seksuaalisesta väkivallasta. Kirjoitin abortista. Kirjoitin terapiasta. Kirjoitin siitä, kuinka paljon vihasin terapiaa. Kirjoitin häpeästä, kuolemanpelosta, kuoleman ihannoimisesta, maniasta, työstä, rakkaudesta. Syntyi sekava läjä tekstiä, mistä en saa vielä itsekään kiinni. Teksti poukkoilee, muuttaa muotoaan ja on epätäydellistä, epäselvää ja keskeneräistä. Mutta kaiken tuon alla on tarina, jonka haluan kertoa. Olen kirjoittanut elämässäni paljon; sanoituksia, runoja, artikkeleita. Olen julkaissut paljon mutta sensuroinut sitäkin enemmän. Minulla on pohjattoman syvä kiintymyssuhde tarinankerrontaan, ja muusikkona ja esiintyvänä taiteilijana kerron usein tarinoita sävelten tai liikkeen kautta. Kieli on kuitenkin ensirakkauteni, olen aina kirjoittanut ja oppinut hitaasti nöyrtymään sanojen edessä.
                </p>
            </div>
            <div className='palsta center-text'>
                <p>***</p>
            </div>
            <div className='palsta center-text'>
                <p>PELKO</p>
                <ReactPlayer height="140px" width="340px" style={{ margin: "0 auto" }} url="https://soundcloud.com/madhousehelsinki/pelko"></ReactPlayer>
            </div>
            <div className='palsta center-text'>
                <p>***</p>
            </div>
            <div className='palsta'>
                <h3>
                    LIIKKEESTÄ JA KOSKETUKSESTA<br />
                    (2021)

                </h3>
                <p>Keväällä 2021 kävin Radio Helsingissä vieraana ohjelmassa, jossa keskusteltiin tanssin, liikkeen ja kehossa tapahtuvien impulssien merkityksestä säveltämiseen ja musiikin esittämiseen.</p>

                <p>Tämä keskustelu sai minut myös pohtimaan, miten paljon kosketuksella on merkitystä omassa työssäni. Havahduin taannoin erästä WOMAN MACHINE -teokseen liittyvää sävellystä työstäessäni ajattelemaan, että ”nyt tämä ja tämä melodinen fragmentti kietoutuvat yhteen kuin kaksi ihmistä, joiden välillä on syvä luottamus ja pyhä pyrkimys yhteiseen päämäärään.” Näin päässäni liikkeen, painovoiman ja emotionaalisen tahtotilan synnyttämän sitkeän kudoksen ja sävelet vain loksahtivat paikalleen.</p>

                <p>Olen viime vuosina tehnyt paljon kehollista sävellystyötä ja antanut ulkoisten ja sisäisten impulssien ohjata säveliä, rytmejä ja muotoja. Tajusin, että myös melkein kaikissa bändeissäni ja työryhmissäni työskennellään kirjaimellisesti iholla. Kosketus tuottaa yhteistä liikettä ja kollektiivista äänen värähtelyä, mikä luo parhaimmillaan ikään kuin näkymättömän kuminauhan yhden tai useamman ihmisen välille. Tuo sitkeä yhteys venyy ja paukkuu välillä äärimmilleen, luoden tilaan voimakkaan energioita nostattavan jännitteen, joka manifestoituu juuri siksi, ettei se koskaan purkaannu. Oli kyseessä fyysinen, emotionaalinen, ambivalenttinen tai täysin surrealistinen kosketuksen muoto, etsin ja tarvitsen sen läsnäoloa – sillä tämä teos elää ja hengittää suhteessa yleisöön, suhteessa ihmiseen.</p>

                <p>Loputon inspiraation lähteeni Hanna Brotherus sen sanoittaa kauniimmin kuin kukaan: ”Kosketus on paras ja kaunein tapa poistaa pelon kelmu. Kosketuksella on voima, joka läpäisee kivun, kovuuden ja pelon tasoristeykset. Kosketuksella voin päästä sinne, minne en uskalla yksin mennä. Sisimpääni. Siihen kohtaan, jossa näen syvimpään mustaan ja kirkkaimpaan valoon. Siellä ymmärrän muutoksen ja ymmärrän, että on vain vähän, mihin kontrollini yltää.” (Ainoa Kotini, 2022)</p>
            </div>
            <div className='palsta center-text'>
                <p>***</p>
            </div>
            <p className='palsta'>
                <i>
                    Minulla on omakuva. Tiedän miltä näytän, tiedän mitä näytän. Mutta omakuva ei ole yhtä kuin identiteetti. Identiteetti rakentuu syvemmällä kuin arvot, asenteet, tavat, mieltymykset, toiveet ja tottumukset. Identiteetti on siellä missä tuntuu eniten. Mutta minä tunnen liikaa. Liian usein, liian paljon, koko olemuksellani, koko ajan. Tästä syystä olen hukassa, en tiedä mitä kuunnella, mihin tarttua, mistä päästää irti.
                </i>
            </p>
            <div className='palsta center-text'>
                <p>***</p>
            </div>
            <div className='palsta'>
                <h3> TÄYDELLISYYDESTÄ <br />
                    (2022)
                </h3>
                <p>On talvi 2022. Katselen tietokoneeni työpöytää. Se on täynnä tiedostoja. Tiedostot sisältävät versioita sävellyksistä. Pöytä täynnä bittejä ja koodia, jotka sisältävät luonnoksia, ideoita, tarkkaan hiottuja kokonaisuuksia, pieniä yksityiskohtia, hylättyjä kokeiluja. Työpöydälläni makaa kokonainen maailma. Tuo maailma koostuu sävelistä, harmonioista ja rytmeistä. Tuo maailma on minun luomani, minun synnyttämäni. Tuo maailma soi vielä kuukausia sitten vain ja ainoastaan korvieni välissä, ihoni alla, se sykki syvällä kehossani ja virtasi suonissani. Sävel kerrallaan päästin sen ulos. Jokainen rytmi ja isku, jokainen aksentti ja tauko hengittivät minussa ja nyt ne hengittävät edessäni tiedostoina. Kuinka onnekas olenkaan, että elän ajassa, jossa saan teknologian avulla sävellykseni välittömästi soimaan, hengittämään, elämään. Kuinka paljon nopeammin, tehokkaammin ja tarkemmin pystynkään dokumentoimaan asioita tietokoneeni avulla.</p>
                <p>kuinka paljon <i>nopeammin, tehokkaammin ja tarkemmin</i></p>
                <p>Kuinka älykäs ohjelmistoni onkaan ja kuinka robottimaisella tarkkuudella mielessäni virtaavat melodialinjat ja rytmit tallentuvatkin kovalevylle, hipoen täydellisyyttä.</p>

                <i style={{ textAlign: "center" }}>
                    <p>
                        <span style={{ fontSize: "0.7rem" }}>hipoen täydellisyyttä</span><br />
                        <span style={{ fontSize: "0.7rem" }}>hipoen täydellisyyttä</span>
                    </p>
                    <p>
                        <span style={{ fontSize: "0.7rem" }}>kiitos teknologia,</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos tekoäly,</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos google ja apple</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos instagram, kiitos filtterit</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos cancel -nappi, kiitos follow ja like</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos algoritmit, kiitos playlistit</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos seuraajat,</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos uudet seuraajat, pliis seuraa</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos seuraa jooko seuraa</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos storyt, reelit, snapit ja photoshop</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos kasvojentunnistus ja tiktok</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos että saan olla olemassa</span><br />
                        <span style={{ fontSize: "0.7rem" }}>kiitos että näyn ja kuulun</span><br />
                        <span style={{ fontSize: "0.69rem" }}>kiitos ettet näytä kun sorrun ja murrun</span><br />
                        <span style={{ fontSize: "0.67rem" }}>kiitos kun saan näyttää vain parhaat puolet</span><br />
                        <span style={{ fontSize: "0.65rem" }}>kiitos kun oot peilikuva, joka ei koskaan kuole</span><br />
                        <span style={{ fontSize: "0.63rem" }}>kato peiliin, kato hei peiliin, missä mun peili, mihin katos mun peili</span><br />
                        <span style={{ fontSize: "0.61rem" }}>ei enää tehdä peilejä, ne on liian selkeitä</span><br />
                        <span style={{ fontSize: "0.59rem" }}>ne on turhan raakoja ja old school</span><br />
                        <span style={{ fontSize: "0.57rem" }}>maailma on hei sun peili, insta auki ja siellä on sun freimit</span><br />
                        <span style={{ fontSize: "0.55rem" }}>pysy raamien sisällä ja oot täydellinen</span><br />
                        <span style={{ fontSize: "0.53rem" }}>sä oot hei täydellinen,</span><br />
                        <span style={{ fontSize: "0.51rem" }}>sä oot täydellinen</span><br />
                        <span style={{ fontSize: "0.49rem" }}>sä oot täydellinen</span><br />
                        <span style={{ fontSize: "0.47rem" }}>sä oot täydellinen</span><br />
                        <span style={{ fontSize: "0.45rem" }}>sä oot täydellinen</span><br />
                        <span style={{ fontSize: "0.43rem" }}>sä oot täydellinen</span><br />
                        <span style={{ fontSize: "0.41rem" }}>sä oot täydellinen</span><br />
                        <span style={{ fontSize: "0.39rem" }}>sä oot täydellinen</span>
                    </p>
                </i>
            </div>
            <div className='palsta center-text'>
                <p>***</p>
            </div>
            <div className='palsta'>
                <h3>BLOM: WOMAN MACHINE<br /> (Sooloteos beatboxaajalle, 2022)
                </h3>
                <p><b>
                    on poikkitaiteellinen näyttämöteos, joka liikkuu moniulotteisesti konsertin, monologin ja tanssiteatteriesityksen välimaastossa. Teos ottaa voimakkaasti kantaa jatkuvasti uudistuvan ja kehittyvän teknologian ja informaatiotulvan vaikutukseen ihmisten mielenterveydelle. Erityisessä keskiössä on milleniaalien sukupolvi.
                </b></p>
                <p>
                    <i>”Kyseessä on poikkeuksellinen teos, jonka kautta pyrin näyttämään beatboxauksen muunakin kuin maskuliinisena hip hop -kulttuuriin sidottuna kuriositeettina. Teoksessa tuon beatboxauksen teatterilavalle, osaksi tarinankerrontaa ja haastan instrumentin sukupuoli- ja genresidonnaisuuteen liittyät ennakkoluulot.</i>
                </p>

                <p>
                    <i>Teoksessa pyrin löytämään tieni ulos koneimitaation ja robottimaisella autopilotilla toimivan kontrollifriikin pimeästä maailmasta ja paljastamaan kaiken sen iholla ja pinnan alla tanssivan haurauden, pelokkuuden ja inhimillisyyden, mikä tekee ihmisestä ihmisen.”</i>

                </p>

                <p><b>WOMAN MACHINE saa ensi-iltansa Teatterimuseossa, Helsingissä 1.9.2022 osana NoMad Housen ohjelmistoa.</b>
                </p>

                <p>
                    <b>Teoksen työryhmä</b>:
                    <br />
                    <br />
                    <b>Venla Ilona Blom,</b> Käsikirjoitus, sävellys, sanoitus, dramaturgia
                    <br />
                    <br />
                    <b>Jenni Nikolajeff</b>, ohjaus ja koreografia
                    <br />
                    <br />
                    <b>Joonas Saikkonen</b>, äänisuunnittelu
                    <br />
                    <br />
                    <b>Kim Saarinen</b>, videotaide
                    <br />
                    <br />
                    <span style={{ fontSize: "0.61rem" }}>Teosta on ollut tukemassa</span>
                    <br />
                    <span style={{ fontSize: "0.61rem" }}><b>Koneen Säätiö, Wihurin Rahasto ja Taiteen edistämiskeskus.</b></span>
                </p>

            </div>

        </div>


    )
}