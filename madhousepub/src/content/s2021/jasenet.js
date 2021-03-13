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
            <div className="center-text">
                <img className="center w--90" src="/img/jasenet/1.webp"></img>
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
            <div className="grid--3w grid w--80">
                <img className="w--100" src="/img/jasenet/2.webp"></img>
                <img className="w--100" src="/img/jasenet/2.webp"></img>
                <img className="w--100" src="/img/jasenet/4.webp"></img>
            </div>
            <div className="palsta">
                <p>Miksi yhtenäisiä joukkoja on?</p>
                <p>Kirjailija <b>Barbara Ehrenreich</b> spekuloi <i>Dancing in The Streets – A History of Collective Joy</i> -kirjassaan synkronoituvien joukkojen evolutiivisesta merkityksestä.</p>
                <p>Hän ehdottaa ihmisnisäkkäiden kykenevän muodostamaan joukkona illusorisen ison pedon, jotta muut suuret pedot havaitsisivat joukon yhtenä vielä isompana petona.</p>
                <p>Myös historioitsija <b>William McNeill</b> kysyy <i>Keeping Together in Time</i> -kirjassaan aiheesta. Hän näkee rytmisen yhteenliittymisen ennen kaikkea solidaarisuuden tunteen muodostava ryhmäkoheesiotekniikkana. Yhdessä liikkuminen tuottaa erityistä kanssatunnetta ja mahdollistaa sisaruuden kokemisen minkä tahansa tähän tekniikkaan ryhtyvän joukon kesken.</p>
                <p>McNeill kysyy synkronoitumisen fysiologian ja solidaarisuuden tunteen yhteydestä, josta kirjan kirjoittamisen aikaan 1995 aiheesta ei oltu juurikaan tehty tutkimusta. Mitä yhteisessä liikkeessä tapahtuu? Miten yhteisyyden tunne syntyy? Kysymys on tietysti laaja: Miten kehon fysiologiset prosessit ovat yhteydessä tunteisiin? Mitä ovat kollektiiviset tunteet? Miten käyttäymisen synkronoituminen voi luoda jonkin sellaisen fysiologisen vasteen, joka on perustana ryhmäkoheesion luovalle tunteelle?</p>
                <p>Sittemmin fysiologista synkronoitumista on tutkittu. Kehot näyttävät valuvan toisiinsa, imitaatio näyttää olevan hyvin olennaista suhteiden luomisessa ja yhteisesti liikkuvat joukot tuntevat itsensä voimakkaiksi. Sisäpuolet samankaltaistuvat: Sydämien sykkeet, hengitys, näiden arytmia. Aivot aaltoineen. Ulkoinen yhteinen rytmittyminen samankaltaistaa sisäisiä rytmejä.</p>
            </div>
            <div className="w--80 grid grid--3w grid--2h">
                <img style={{ gridArea: "1 / 1 / 2 / 2" }} className="w--100" src="/img/jasenet/5.webp" />
                <img style={{ gridArea: "1 / 3 / 2 / 4" }} className="w--100" src="/img/jasenet/5.webp" />
                <img style={{ gridArea: "2 / 2 / 3 / 3" }} className="w--100" src="/img/jasenet/7.webp" />
            </div>
            <div className="palsta">
                <p>Ehrenreichin pääteesi teoksessaan on (joka on toki eurokeskeinen), että massojen hauska on loppunut. Massat nähdään ensisijassa vaarallisina, kontrolloimattomina, tuhoisina. Niihin liittyy väkivalta, vastuuttomuus, irrationaalisuus, totalitaarinen yksilöhukutus.</p>
                <p>Oma kokemukseni joukoista on yleisesti niiden jonkinlainen kykenemättömyys, jokin vaikeus. Ehkä joukkona luominen, joukon ilo on eräs ruumiin taito ja taipumus, joka joukonpelon ja individuaaliksi kasvattamisen myötä karistetaan tai sitä ei kultivoida. Ehkä individuaaliksi muokkautuminen on affektiivista ja kognitiivista erkaantumista joukkoontumisen taidosta. Ehkä emme osaa olla joukkona.</p>
                <p>Jos länsimainen yhteiskunta ennen kaikkea tuottaa individuaaleja, näiden individuaalien kategorinen suhtautuminen sellaisiin koreografisiin tilanteisiin, jossa tämä individuaali yhdistyessään toisiin muuttuu toisenlaiseksi, on kieltäytyminen. Joukkoihin opitaan olemaan liittymättä, kehollisesti.</p>
                <p>Voisiko massaruumiillisuuden oppia näkemään positiivisena? Joukot luovina? Väen paljona? Miten yhteisyyttä ja joukkoon sulauttavia koreografisia organismeja luodaan, miten ne syntyvät? Miten näihin koreografisiin tilanteisiin suhtaudutaan? Miten joukkona luodaan? Minkälaisia ruumiin vaikuttumisen ja kommunikoimisen kykyjä joukoksi tuleminen vaatii? Miten joukkona olemisen kehollisuuteen saa tukea kanssaihmisiltä? Missä määrin yhteisössä on joukkoontumiseen liittyvää tietoa tai miten sitä luodaan?</p>
            </div>
            <div className="palsta grid grid--2w">
                <img className="w--100" src="/img/jasenet/8.webp"></img>
                <img className="w--100" src="/img/jasenet/9.webp"></img>
            </div>
            <div className="palsta">
                <p>Yhteiset liikkeet yhteisen ryhmän ja yhteisen todellisuuden luojana on sosiologian klassikon <b>Émile Durkheimin</b> perusajatuksia. Kun liikumme samalla tavoin, tunnemme että ajattelemme samoin. Yhteisyys tuottaa erityistä emotionaalista energiaa, jota säilötään ryhmän energiaa edustaviin symboleihin, esim. eleisiin.</p>
                <p>Ajatusta tahollaan on kehitellyt myös sosiologi <b>Randall Collins</b>. Collins artikuloi neljä kohtaa onnistuneen vuorovaikutusrituaalin (minkä tahansa ihmistenvälisen kanssakäynnin) osatekijöiksi: yhteisen kehollisen läsnäolon, yhteisen fokuksen, yhteisen tunnelman, rajan ulkopuoleen. Mikrorytmeissään vastavuoroisesti synkronoituvat kehot luovat merkityksellistä emotionaalista energiaa, joka on ensisijainen moraalivaateisiin ja symboleihin nähden. Yhteiset liikkeet ja yhteiset käytänteet luovat jaetun todellisuuden. Se muuntuu, hajoaa, unohtuu, jos vuorovaikutuksen rituaaleja, yhteistä toimintaa ei ole.</p>
            </div>
            <div className="grid--3w grid w--80">
                <img className="w--100" src="/img/jasenet/10.webp"></img>
                <img className="w--100" src="/img/jasenet/11.webp"></img>
                <img className="w--100" src="/img/jasenet/11.webp"></img>
            </div>
            <div className="palsta">
                <p>Collins kirjoittaa:</p>
                <p><i>”The central mechanism of interaction ritual theory is that occasions that combine a high degree of mutual focus of attention, that is a high degree of intersubjectivity, together with a high degree of emotional entrainment – through bodily synchronisation, mutual stimulation/arousal of participants nervous systems – results in a feeling of membership that are attached to cognitive symbols; and results also in the emotional energy of individual participants, giving them feelings of confidence, enthusiasm and desire for action in what they consider a morally proper path.”</i></p>
                <p>Elämme outoja ja tavallaan olemattomia aikoja. Eristäytyminen ja näkymättömyys kadottaa materiasta, toden tunteesta. Sosiaalinen eristys vähentää vuorovaikutusten määrää, intersubjektiivisuuden hetkiä, jossa materioiden synkronoituessa, ollessamme vuorovaikutteisessa suhteessa, voimme tuntea ajattelevamme samaa asiaa. Tai oikeastaan vain liikkuvamme yhdessä.</p>
                <p>Joukkoontuminen tuntuu kyllä olennaiselta.</p>
                <p>Se antaa energiaa. Energiaa elää ja toimia.</p>
            </div>
            <div className="center-text">
                <img className="w--70" src="/img/jasenet/13.webp"></img>
            </div>
        </div>)
}
