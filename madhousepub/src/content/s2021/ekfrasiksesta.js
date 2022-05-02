import React, { useRef, useState, useEffect } from 'react'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { Inf, Hole5, Hole6, Hole7, Hole8 } from '../../components/svgs'

export const Ekfrasiksesta = () => {

    const [w_parity, setW_parity] = useState(0);
    const c = useRef();

    const resize = () => {
        setW_parity(Math.abs(c.current.offsetWidth) % 3);
    }


    useEffect(() => {
        setW_parity(Math.abs(c.current.offsetWidth) % 3);
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        }

    }, [])

    return (
        <div className="ekfrasiksesta">
            <div className="title">
                <h1>Ekfrasiksesta osa 2.</h1>
                <h2>Esityksen kuvittelemisesta ja muistamisesta</h2>
                <h5>seassa-kollektiivi</h5>
                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>
                    <p><b>Ekfrasiksesta osa 2.<br />
                        seassa-kollektiivi
                    </b></p>

                    <p><b>4/2021<br />
                        teksti</b>
                    </p>

                    <p>

                        <b>seassa-kollektiivi</b> kirjoittaa runomuotoisia tulkintoja kuva- ja esitystaiteen teoksista hyödyntäen ekfrasis-keinoa.
                    </p>
                    <p>
                        Kreikan kielen sana <i>ekfrasis</i> tarkoittaa kuvausta (<i>ek</i> > ulos, <i>phrazein</i> > puhua, kertoa). Lajityyppinä se merkitsee taideteoksen kirjallista kuvausta, kuten esityksen tai maalauksen sanallista selostusta.
                    </p>
                    <p>
                        <b>seassa-kollektiivin</b> muodostavat dramaturgi-kirjoittaja <b>Tarleena Laakko</b>, dramaturgi-runoilija <b>Milka Luhtaniemi</b> ja kuvataiteilija-kirjoittaja <b>Maarit Mustonen</b>. Kollektiivia kiinnostaa taidekirjoittaminen, joka korostaa kehollisen kokemuksen, monitulkintaisuuden ja assosiaation merkitystä. seassa-kollektiivi on perustettu syksyllä 2020 ja julkaisutoiminta aloitettu helmikuussa 2021.
                    </p>
                    <p><a href="https://seassakollektiivi.wordpress.com/">https://seassakollektiivi.wordpress.com/</a></p>
                    <p>
                        —
                    </p>
                    <p>
                        <i>seassa = among, amongst</i>

                    </p>
                    <p>
                        <b>seassa collective</b> writes about artworks in the field of performance and visual arts using the poetic method of ekphrasis.
                    </p>
                    <p>
                        The Greek word <i>ekphrasis</i> translates as description (<i>ek</i> > out, <i>phrazein</i> > tell). As a literary genre it refers to a written description of an artwork, such as a verbal depiction of a painting or a dance piece.
                    </p>
                    <p>
                        The members of the <b>seassa collective</b> are dramaturge, writer <b>Tarleena Laakko</b>, dramaturge, poet <b>Milka Luhtaniemi</b> and visual artist, writer <b>Maarit Mustonen</b>. They share an interest in art writing that acknowledges the significance of corporeality, ambiguity and the associations of the spectator-writer. The collective was formed in autumn 2020 and the website was launched in February 2021.
                    </p>
                    <p><a href="https://seassakollektiivi.wordpress.com/">https://seassakollektiivi.wordpress.com/</a></p>
                    <p>
                        The collectively written essay <i>"On ekphrasis part 2: Rembembering and imagining a performace"</i> deals with the notion of imperfect recollection of a performance and ties it together with what it is to imagine and fantasize about performances.
                    </p>
                </Modal>
            </div>
            <div ref={c} data-w-p={w_parity} className="hole_ hole_5 hole-path">
                <Hole5></Hole5>
            </div>
            <div className="palsta grid grid--3w grid--less-gap grid--mb-3h">
                <div className="orb-thing"> <span className="blue">Tarleena Laakko</span></div>
                <div className="orb-thing"> <span className="brown">Milka Luhtaniemi</span></div>
                <div className="orb-thing"> <span className="teal">Maarit Mustonen</span></div>
            </div>
            <div className="palsta">
                <p>Alan ajatella esitystä, jota en ole ikinä nähnyt. Se oli Teatterikorkeakoulussa ollut <b>Jarkko Partasen</b> esitys <i>Mudbody</i>, jonka esitystila oli täynnä mutaa. Vuosi oli loppumassa, oli 2019. Näin silloin päivittäin, miten esiintyjät tulivat ulos studiosta mutaisina, ja miten he menivät takaisin sisälle.</p>
                <p>Ekfrasis on taiteesta kirjoittamisen muoto, joka kumpuaa alkujaan antiikin Kreikasta. Sen juuret ovat sanassa <i>ekphrazein</i>, joka merkitsee kirjaimellisesti ulospuhumista. Ekfrasis-muoto jakautuu vähintään kolmeen alatyyppiin, joista eräs on niin kutsuttu <i>notional ekphrasis</i>, eli kuvitteellinen ekfrasis.</p>
                <p>Kuvitteellinen ekfrasis avaa uomia taiteen kokemuksen tarkasteluun laveammin. Se ei tarkoita, että todellista teosta ei tarvittaisi, sillä teokset ovat koko ajan ja kiistämättä kokijoilleen tarpeellisia. <b>Mutta voisiko katsomistapahtuma olla vain yksi vaihe koko teoksen kokemisessa? </b>Loput on sitä, kun kuvittelee, valmistautuu, otaksuu, ottaa selville, tyhjentää mielen. Kun mieli on tyhjänä, siellä on viimein paikka johon teos saapuu.</p>
                <p>Kuvittelen <i>Mudbodya</i>. Kuvittelen miten valo kiilsi lihaksella, joka oli mutavuoren päällä. Kuvittelen valon olleen yksiväristä, keltaista tai metallia. Kun kuvittelen <i>Mudbodya</i>, siitä tulee muisto, valemuisto tai melkein totta. Kuvittelen liikkuvaa lihasta, metallin ja keltaisen kajoa. Lihaksessa kajo, mudassa liukkaus, keltaisessa kajo, lihaksessa reaktionopeus ja toisaalta, niin, myös, hidastumisen kaikki laadut.</p>
                <p>Miltä muistaminen tuntuu energeettisellä tasolla?</p>
                <p>Jos en näe esitystä, mutta ajattelen sitä, mihin ajatusteni käyttövoima menee?</p>

                <p className="color-teal">Tämän esseen kirjoittamisen kautta muistan pitkästä aikaa ensimmäisen näkemäni tanssiteoksen ja miten itselleni täysin odottamatta itkin sen läpi. Paljoa muuta en muista, näyttämöllä oli pimeää ja pimeässä liikkuvia kehoja, istuin katsomossa – toisin kuin nykyään – melko takana.</p>

                <p className="color-teal">Voiko olla, että kun esityksen hetkellisyyttä ja katoavaisuutta pystyy katsojana todistamaan ja tuntemaan, niin esitys kutsuu näin muistamaan itseään, pyytää kantamaan yhteistä vastuuta sen muistamisesta? Toisin sanoen, onko eroa vaikkapa kivestä veistetyn objektin ja tanssijan liikesarjan muistamisessa? Jään kaivamaan kokemuksestani esityksiä, jotka olen unohtanut.<br /><span style={{ float: "right" }}>Tuntuu kuin kääntäisin maata keväällä.</span></p>

            </div>
            <div data-w-p={w_parity} className="hole_ hole_7 hole-path">
                <Hole7></Hole7>
            </div>
            <div className="palsta">
                <p className="color-teal"><b>Kun muistan jotain, koitan tehdä sitä jälleen eläväksi itselleni.</b></p>
                <p className="color-blue">Haastattelin ystävää taiteellisen lopputyöni <i>Hukassa</i> (2019, Teatterikorkeakoulu) jättämästä muistijäljestä vuosi esityksen jälkeen. Hän kuvaili näkemäänsä ihmeen tarkasti ja puhui ruumiiden tavasta olla esillä, niiden välisen kosketuksen suoruudesta ja ahnaudesta. Jossain kohtaa uskaltauduin kysymään, mitä hän ajatteli tekstistä. Ystävän muistikuvissa tekstiä ei ollut esityksessä ollenkaan. Olin tästä aika järkyttynyt. Esityksessä oli valollisesti hämärä osuus, jossa teksti tuli kaiuttimista. Kuitenkin tekstissä olleet asiat olivat selvästi osa ystävän kokemusta, aivan kuin hän olisi nähnyt tekstin, sanat olivat muistissa liudentuneet osaksi näyttämön maisemaa ja sen ruumiita.</p>
                <p className="color-teal">
                    Tein vuonna 2017 taiteilija <b>Anne Naukkarisen</b> kanssa esityksen <i>WATER FALL 1</i>, jonka esitimme Turussa Nykytaidetila Kutomossa. Pari kuukautta esityksen jälkeen pyysimme muutamaa yleisössä ollutta ystäväämme kirjoittamaan meille mitä he muistavat esityksestä, mitä siinä tapahtui. Oli hämmästyttävää lukea, miten katsojat muistivat teoksen keskenään hyvin eri tavoin, miten jotkin asiat olivat pyyhkiytyneet pois, toiset nousseet etualalle. Minä ja Anne esiintyjinä olimme muistikuvissa monesti sekoittuneet keskenämme. Eräässä pitkässä ja yksityiskohtaisessa kuvauksessa esityksen alku ja loppu olivat vaihtaneet paikkaa.
                </p>
                <p><b>Katsomistapahtuma ja siitä puhuminen eivät usein vastaa toisiaan.</b> Usein ne jopa estävät toisiaan. Silti kielen kanssa pitää aina tehdä sopimus, että se täsmää jotensakin kuvaamaansa kohteeseen. Tai solmia sopimus ylipäänsä siitä, millaisessa suhteessa kieli on todellisuuteen. Saa se olla horjuvakin.
                </p><p className="indent">
                    Toisin sanoen, aistisesti välittyvä todellisuus koostuu mahdollisesti muustakin kuin siitä, mitä konkreettisesti tapahtuu: todellisuus on aukkoja muistamisen ja kuvittelemisen välillä. Mietin faktan, fabuloinnin, projisoinnin, muistamisen ja unohtamisen eri kohtaamispintoja. Mahdollisesti kokemuksen sanallistamiseen liittyy nämä kaikki. Sen takia sanallistaminen on niin valtavan tärkeää. On mahdollisesti yhdentekevää, onko sanallistettu asia, sanan kirjaimellisessa merkityksessä, <i>totta</i>.
                </p>

                <p className="color-teal">Millainen dokumentti ekfrasis on? Kysymykseen voi vastata selvittämällä, mitä kirjoittaminen on. Kirjoittaminen on muun muassa keino merkitä muistiin. <b>Kirjoittamalla voi tallentaa kehonsa ulkopuolelle jotain, jonka haluaa muistaa ja johon palata</b>, ja jonka voi näin ajatella olevan tekijälleen tärkeää. Ja näin kirjoitetun voi myös unohtaa, kun jokin toinen materiaali kannattelee muistamisen tekoa.</p>
                <p className="color-teal">Antiikin Kreikassa ekfrasiksella tarkoitettiin alkujaan <i>kuvausta</i><sup>1</sup>. Sanan etymologinen tulkinta <i>ulos puhumisesta</i><sup>2</sup>  sisältää viittauksen aikakauteen, jolloin kirjoitus- ja lukutaito eivät olleet yleisiä. Varhaisimmat ekfrasikset ovat eläneet ääneen kerrottuina, kuunneltuina, ehkä toistettuina ja siten muistettuina. Ekfrasis sanana, tänä päivänä, palauttaa ajatukseni yhä uudelleen kehollisuuteen ja ohimenevyyteen.</p>

                <p className="color-teal"><b>seassa-kollektiivin</b> alkuaikana kirjoitin ekfrasis-sanan englanniksi – <i>ekphrasis</i> – aina väärin, sillä luulin termin viittaavan kaikuun: <i>ēkhō – ekh</i>prasis. Jäin miettimään, <b>voisiko ekfrasis olla teokselle jonkinlainen kumma kaiku? Kun seuraan esitystä, läsnäolollani kaiutan sitä.</b> Koen tämän voimakkaasti myös ollessani itse esiintyjänä: yleisö vuotaa ja heijastaa minulle informaatiota, kierrätämme energiaa välillämme, esitys tapahtuu.</p>
            </div>
            <div data-w-p={w_parity} className="hole_ hole_8 hole-path">
                <Hole8></Hole8>
            </div>
            <div className="palsta">
                <p className="color-blue">
                    Ekfrasiksessa kieli koettaa puhua teoksesta ja teokselle, ei ainoastaan faktisena kuvauksena vaan myös miltä teos tuntui ja mihin tuntu vei. Kieli ja tuntuma voi olla yksityisiäkin. Pohdin havaitsevatko muut samaa, tuntuiko tämä tällaiselta vain minusta, ja kun lukija ei ehkä ole ollut esityksessä, mitä hän lukee kun hän lukee tätä käännöstä.
                </p><p className="color-blue indent">
                    Teos on tekijän tai tekijäjoukon ruumiiden välittämää. Ruumiini tallentaa teoksesta osia, jotka katsojan ruumini kantaa tilanteesta ulos. Joitakin niistä on mahdollista kannatella ja muistaa teoksen kohtaamishetken ulkopuolella. Lihaan tallentunut kokemus yrittää löytää kieltä ja tämä kieli vielä tavoittaa lukijan, kieli menee monen lihan läpi ja niiden kielten värjäämänä jatkuu. Teos tulee kieleksi lihojen läpi. <i>Kun kirjoitan täällä, ehkä sen lukeminen notkauttaa ruumistasi siellä, esityksen tilaan, kuvittelemaan tai kokemaan tuntua</i>. <b>Esitys katoaa, ekfrasiksen kirjoittaminen on jälki. Siitä voi jäljittää esitetyn osia, jotka luovat oman jälkensä, jäävät jäljelle</b>. Olen hyvin kiintynyt joidenkin esitysten jälkiin ruumiissani, ne ovat melkein kuin paikkoja joihin palata.
                </p>
                <p>Kielen täsmäävyyden tai todenpitävyyden skaala on laaja. Minulle oli talvella 2019 annettu tehtäväksi kirjoittaa kritiikki <b>Dana Michelin</b> tanssiesityksestä<i> Cutlass Spring</i>. Purin esityksen siten, että kirjoitin sen kaikki vaiheet ylös ja sitten pureuduin kohtauksiin yksittäisinä ja pääsin jonkinlaiseen loppuun. Nyt tuntuu, kuin olisin ollut kirjaamassa ylös esitystä kuin vaalivirkailija, juuri niin kuin se on, ikään kuin se olisi <i>juurikin</i> jotain tiettyä.</p>

                <p>Silti esityksen katsominen on usein kognitiivisesti kerrostunut ja monisuuntainen tapahtuma, ruuhkainen kokemus. Usein se miten esityksiä kokee, ei kokonaan koostu aikaan jäsentyvistä eli kronologisista kuljetuksista. Sinänsä olisin voinut kirjoittaa <i>Cutlass spring</i> -esityksestä myös aistihavaintojen kautta, esimerkiksi näin: <i>nälkä, heijaus, sulava jää, huohotus, raapiva mikki, maiskahdukset</i>. Sen suhde siihen esityksen todellisuuteen olisi ollut ikään kuin ei-tallentava ja ei-mimeettinen.</p>

                <p>Runoilija <b>Maria Matinmikko</b> puhuu <b>Paavo Mannisen</b> haastattelussa: “Ajattelua itsessään on aktuaalisena tapahtumana mahdotonta kopioida tai konkretisoida sellaisenaan koko laajuudessaan ja monitasoisuudessaan. Koen, että kirjoituksella on kuitenkin pääsy tähän ulottuvuuteen. Poeettinen kieli ja omituiset tarinat tai teokset tavoittavat loogisen ja tavanomaisin lausein strukturoidun ajattelun ”takaa” hämärämmän maaston, joka liittyy läheisesti tiedostamattomaan ja tunteisiin.”<sup>3</sup></p>

                <p>Olisiko siis niin, että kun mieleni ei tahdo tai osaa jäsentää nähtyä esitystapahtumaa kieleksi, ainakaan suoraan kieleksi, annan teoksen liikkua tajunnallisella tasolla juurikin niin hämäränä, outona ja itsestäni erillisenä, kuin se koko ajan on ollutkin? Siten kun annan kielen toimia omassa hämärässä maastossaan, enkä ponnistele saadakseni sitä jäsentymään yhtään miksikään, sekä kielen että teoksen oma erityisyys ja erillisyys korostuvat.</p>
                <p>Kirjoittamisen kautta on mahdollista päästä hyvin yksityiskohtaisella tavalla käsiksi siihen, mitä tapahtuu kun jotakin muuttuu eriksi tai toiseksi. Tämä liittyy <b>Derridan</b> ajatukseen kirjoituksesta “erojen järjestelmänä”<sup>4</sup>. <b>Runouden kautta ajatteleminen herkistää ajattelemaan, että ne erot voivat olla hyvinkin nyansoituneita ja tulla näkyviin ilman ennakkoehtoja.</b></p>
            </div>
            <div data-w-p={w_parity} className="hole_ hole_6 hole-path">
                <Hole6></Hole6>
            </div>
            <div className="palsta">
                <p>
                    Muistelen <b>Emmi Vennan</b> <i>Fabulous muscles</i> -esitystä Mad Housessa helmikuussa 2020. Olin vähällä myöhästyä esityksestä, ja pyöräilin sinne kaatosateessa. Kun tulin läpimärkänä esitystilaan, Emmi juoksi ja liikuskeli tilassa. Musiikki blastasi, tuntui kuin tulisi juhliin parhaaseen mahdolliseen aikaan. Myöhemmin esityksen aikana hän siirtyi lattialle ja taputteli ja hieroi lihaksiaan. Hän kertoi liikepraktiikasta, jonka mukaan energiaa voisi hieroa lihaksista ulos ja siten käyttövoimaksi. Aiemmin, esityksen alussa, lihasten kaikki energia oli ollut koko tilan käytössä, höyrysi katsojien ympärillä ja liikeratojen synnyttämissä näkymättömissä uurteissa. Esityksessä oli ollut kokonaan kyse voiman, lihaksiston ja energian säännöstelystä. Vaatteet kuivuivat päälläni hitaasti ja kuivuttuaan ne olivat taas pehmeitä. Aineenvaihdunta tuntui kestävältä.
                </p>
                <p className="color-blue">
                    Viisi vuotta sitten olin Zodiakilla katsomassa <b>Masi Tiitan</b> ja <b>Hanna Ahtin</b> teosta <i>Flute</i>. Katsomossa oli väljää ja raukeuttani päädyin katsomaan esitystä takariviltä loikoillen. Hitaasti alaspäin, kuin ruumista kiinteämpänä massana, liikkuvat ruumiit vetivät ruumiini mukanaan uneen. Nukuin suurimman osan esitystä. Heräsin muutamia sekunteja ennen näyttämön sivusta loistavan paksun keltaisen valon syttymistä, joka sammui pian syttymisen jälkeen. Näin valon melkein samasta asennosta kuin esiintyvät ruumiit, jostain kyljeltään ja mahaltaan välimaastosta, vain eri suunnasta. Esiintyjät nousivat ylös lattialta kumartamaan ja minä nousin samanaikaisesti istumaan taputtaakseni. Tämä on yksi lempi esityksessä-olo-muistoistani, ajattelen ettei nukkuminen vienyt mitään pois vaan oli tapa olla sen teoksen kanssa siinä tilassa, samaan aikaan ja uskon teoksen vaikuttaneen uneeni, olin sen kanssa unissani. Tunnen sen teoksen ruumiissani yhä.
                </p>
                <p className="color-teal">
                    Esityksen katsomisen jälkeen en haluaisi heti liikkua tai puhua. Tuntuu kuin hiljaisuus ja paikallaanolo auttaisivat säilömään esitystä. Kuitenkin on noustava istumapaikaltaan ja lähdettävä kävelemään, enkä voi loputtomiin kulkea ystäväni vierellä sanomatta mitään, jossain vaiheessa on avattava suu ja alettava puheella vähitellen puhkoa sitä tilaa, jonne olen katsomisen myötä liikkunut, vaivattava esityksen kokemisen materiaalia ensimmäisiksi lauseiksi, äänteiksi<i>…....aimmit…..se…mhh…ä....hei...</i>
                </p>
                <p>
                    <span className="color-teal">On maaliskuun alku 2021. Odotan kevään etenemistä</span>, sipulien ja silmujen uutteraa pitkää ryhtymistä, joka tapahtuu aina erilaisilla rytmeillä ja etenemisen varmuudessa, <span className="color-blue">valoa, joka jatkuu.</span>
                </p>
                <p>
                    <span className="color-teal">Jätämme tähän tilaa tuleville esityksille ja niiden kuvittelulle </span><br />
                    Jätämme tähän tilaa tuleville esityksille ja niiden kuvittelulle<br />
                    <span className="color-blue"> Jätämme tähän tilaa tuleville esityksille ja niiden kuvittelulle  </span>
                </p>
            </div>
            <div className="palsta footnotes">
                <p><b>Lähteet</b></p>
                <p><b>1.</b> Hosiaisluoma, Yrjö 2003. <i>Kirjallisuuden sanakirja</i>. WSOY, Helsinki</p>
                <p><b>2.</b> Silde, Maria & Tervo, Petri: <i>Esitys ja ekphrasis – eli kuinka kuvata esiin luuranko esityksen kaapista</i>. Esitys -lehti 1/2014, 34-38</p>
                <p><b>3.</b> Manninen, Paavo 2020. <i>Poeettisesta kielestä, tarinan hegemoniasta ja vaginaalisuudesta : kirjailija Maria Matinmikon haastattelu</i>. Psykoanalyyttinen psykoterapia, 2020 (16), 32-41 <a href="https://jyx.jyu.fi/bitstream/handle/123456789/71716/Marian%2520haastattelu%2520final.pdf?sequence=1&isAllowed=y">link</a></p>
                <p><b>4.</b> Tieteen termipankki 5.3.2021. "Kirjallisuudentutkimus: différance". <a href="https://tieteentermipankki.fi/wiki/Kirjallisuudentutkimus:diff%C3%A9rance">link</a></p>

            </div>
        </div>)
}
