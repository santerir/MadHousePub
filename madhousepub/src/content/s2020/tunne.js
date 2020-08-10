import React from 'react'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { Inf, Hole3, Hole3Clip, Hole3Inv } from '../../components/svgs'


import SVGFilter from '../../components/svg-filters'

export const Tunne = () => {
    return (
        <div className="tunne">
            <div style={{ height: "0" }}>
                <svg>
                    <defs>
                        <pattern id="bkgrnd-pattern" patternUnits="userSpaceOnUse" x="1005" y="0" width="2115" height="2115">
                            <image href="/img/s2020-bkgrnd.jpg" width="2115" height="2115" />
                        </pattern>
                    </defs>
                </svg>
                <SVGFilter />
            </div>
            <div className="title">
                <h1>Tunnemylläkkä&shy;hässäkkä </h1>
                <h5>Anne, Sonja & Elina</h5>

                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>

                    <p>4<b>-5/2020
                    <br />
                    teksti</b>
                    </p>

                    <p><b>Anne Naukkarinen</b> on tanssija, esitystaiteilija ja kuvataiteilija. Hän toimii Mad House Helsingin hallituksessa.</p>
                    <p><b>Elina Pirinen</b> on tanssitaiteilija-musiikintekijä, joka työskentelee myös taidepedagogian ja kuratoimisen alueilla.</p>
                    <p><b>Sonja Jokiniemi</b> on taiteilija ja esiintyjä, joka työskentelee koreografian, esity</p>taiteen, installaation, tekstiilin ja piirroksen materiaalisuuksissa.

                </Modal>
            </div>
            {/* <div className="palsta hole-container">
                <Hole3 />
            </div> */}
            <div className="palsta bckground">
                <div className="hole_">
                    <Hole3Inv />
                </div>
            </div>
            <div className="palsta intro">
                <p>
                    Seuraavassa kirjoituksessa Anne Naukkarinen, Sonja Jokiniemi
                    ja Elina Pirinen keskustelevat poikkeustilan töytäiseminä, mutta
                    lopulta laajemmin havainnoistaan suhteessa mm. taiteeseen.
                    Keskustelu on pitkä. Se ei ole ajallemme tyypillinen “pick and
                    choose and create your own reality fast”, vaan ottaa tilaa ja aikaa
                    sisältöjensä vuoksi. Kirjoitus pitää sisällään kolme erillistä ja
                    toisiinsakin kietoutuvaa vyyhtiä.
                </p>
            </div>
            <div className="palsta dialogue">
                <div><p><span className="ligature">Anne</span>: Haluisin aloittaa tän keskustelun Sonja siun kommentilla, jonka kirjoitit Facebookissa käytyyn keskusteluun, jossa pohdittiin esittävien taiteiden taltiointien jakamista netissä nyt koronan aikana. Kommenttisi oli minusta liikuttava ja olen jäänyt miettimään sitä omassa tämänhetkisessä arjessani.</p>
                    <p></p>
                    <p className="quote">“Minä olen myös miettinyt näinä viikkoina sitä miten tärkeää on tässäkin hetkessä kutsua tilaa IRL esittävälle taiteelle joka nimenomaan voi tapahtua ainoastaan live kohtaamisen edellyttämänä, joka työskentelee sen materiaalisuuden kanssa. Ja olla sen tyhjyyden/ kaipuun kanssa mitä se kuoppa tuottaa. Sekin on tällaisena hetkenä tärkeää, että kaikki ei vaan siirry online, vaan on niitäkin asioita, projekteja ja taidetta joka ei toteudu ennen kuin näyttämöt ja tilat aukeavat taas. Jotkin teokset taas toimivat mahtavasti streamina, videona tai muuten online, eli en ole ollenkaan vastaan näitä muotoja. Mutta jotenkin sen kiireen että kaikki pitäisi siirtyä nyt kulutettavaksi nettiin on jotenkin hämmentävää. Ehkä on myös ok olla tässä tilanteessa vähän pysähtyneenä sekä yksilöinä, instituutioina ja ryhminä. Ehkä on tosiaan ok miettiä sitä mitä teatteri / esitys voi olla nyt, nopean täyttämisen sijaan.” (2.4.2020)</p>
                    <p></p>
                    <p>Tunnistatko Sonja vielä itse nämä ajatukset? Entäpä tunnistaako Elina ajatukset, jotka Sonja kirjoitti? Miten tämä pysähtyneisyys on vaikuttanut teihin ja mitä ajattelette siitä tällä hetkellä? Oletteko kokeneet kaipuuta tai tyhjyyden tunnetta?</p></div>

                <div><p><span className="ligature">Sonja</span>: Uskon, että Korona, siitä aiheutuvat muutokset, sopeutumiset, vaikeudet, tunteet ovat jokaiselle hyvin yksilöllisiä vaikka edustaisimmekin niin sanotusti samaa taidekenttää. Meidän taloudelliset, henkiset ja sosiaaliset tilanteet ovat hyvin erilaisia toisistaan ja siksi se miten tähän tilanteeseen reagoimme, minkälaisia tunteita se herättää ja saa herättää on hyvin moninaiset. Meillä kaikilla on oikeus tuntea juuri niin kuin tunnemme. Se mitä niillä tunteilla teemme, miten suhteutamme niitä ympäristöömme ja toisiin ihmisiin on toinen kysymys ja hyvin monimutkainen sellainen. Toinen vastakaiku tästä tilanteesta on ollut alituinen toisten syyllistäminen ja tuomitseminen. Ehkä tämä on jo laantunut, ( alkuperäisen tekstin kirjoittamisesta on jo aikaa ) mutta joka oli poikkeustilan alkuviikkoina hyvinkin voimakasta.Tämä on Koronasta kumpuavaakin laajempi ilmiö. Se on faktaa että kaikki meistä ei ajattele tästäkään pandemiasta samalla tavalla. Toiset saattavat kielen puuttellisuuden nimissä missata tärkeää informaatiota, toiset eivät välitä tai vastustavat ohjeistuksia syystä tai toisesta. Vastustaminenkin on mielestäni tärkeää demokratian nimissä. Se että me olemme vapaita, meillä on vapaa tahto, vapaa liikkumisoikeus, vapaus toteuttaa itsemääräämisoikeuttamme, vapaus ajatella itsenäisesti. Nämä ovat myös tärkeitä arvoja. Toki olen toivonut että ihmiset toteuttasivat ohjeistuksia ja kunnioittaisivat asiantuntijoiden tietoja. Mutta en lähtisi tuomitsemaan niitä jotka eivät syystä tai toisesta näin ole tehneet.</p>
                    <p></p>
                    <p>Minulle tässä hetkessä taiteen kannalta on ollut läsnä jonkinlainen ratkaisukeskeisyys enemmän kuin kontemplaatio.  Hetki on ollut  nopeaa reagoimista ja täyttämistä monelta suunnalta. Kaikki tavat ovat mahdollisia. Mutta silloin kun paineet tehdä, tuottaa, luoda merkitystä tulevat ulkoa enemmän kuin taiteilijan sisäisyydestä käsin, en ole varma kuinka tähän pitäisi suhtautua ja miten puhua auki myös sen merkityksellisyys että tällaisten ehdotusten ja rakenteiden vastustaminen, uudelleen miettiminen, passiivisesti suhtautuminen voi olla tärkeä taiteilijan position harjoittamisen muoto. Minulle taide ja kulttuuri toimivat eri tavoin suhteessa yhteiskuntaan. Itse olen nauttinut siitä, että esittävien taiteiden kentällä on ollut hyvin hiljaista näinä aikoina. Sekin on kieli suhteeessa vallitsevaan tilanteeseen.</p>
                    <p></p>
                    <p>Mietin myös sitä että taiteilijoiden pitäisi pystyä tässä tilanteessa kunnioittamaan ja kuuntelemaan omaa ääntä, tarpeita, luovuutta ja sen luovuuden toimiijuden reunaehtoja. Taidetta tukevien organisaatioiden pitäisi tukea näitä todennäköisesti hyvinkin toisistaan poikkeavia haluja, tarpeita ja luomisen tapoja. Taiteilijoiden kannalta tässä tilanteessa ongelmalliseksi nousi korona-apurahojen hakemisprosessit, vaikkakin ne varmasti auttoivat monia ja sekin on jo jotain. Hakemisprosessit kääntyivät kuitenkin mielestäni taas uudelleen sen taiteilijoiden todellisuuden todentamiseen mikä on lähtökohtaisesti ongelmallinen. Miksi taas kerran hädässä ja taloudellisissa vaikeuksissa  taiteilijat pistettiin hakemaan sitä paria tonnia ja kilpailemaan keskenään pienten helpotusten toivossa, samaan aikaan  kun instituutiotahot näyttelevät hyväntekijän roolia.</p></div>

                <div><p><span className="ligature">Anne:</span> Miulla meni aikaa sisäistää, että koronatilanne ei ole itseni ulkopuolinen asia vaan, että se on totta ja tapahtuu. Nopeastihan tilanne alkoikin ilmentyä erilaisten ns. oireiden/reaktioiden muodossa kehossa. Oon tunnistanut itsestäni reaktiivisia käyttäytymisiä. Outoja moralisoijan katseita ja tuhahduksia kaupassa liikkuessani, olen kokenut moralisointia, väistänyt ja pysähtynyt, kiertänyt vastaan tulevan kehon ja kehot. Olen ollut tästä ymmälläni - miten nopeasti sitä adaptoitui uuteen tilanteeseen. Toisaalta olen ottanut oman toimijuuteni itselleni mennessäni deiteille tuntemattoman kanssa ja keskittyessäni siihen mitä teen, taidetta ja olen kokenut valtavan antoisaksi työstää tätä verkkojulkaisua, sillä tämä alusta mahdollistaa toisille taiteilijoille heidän taiteellisen ajattelunsa jakamista ja jatkamista tässä poikkeuksellisessa tilanteessa, vaikka esitystoiminta ei juuri nyt jatkukaan. Kun tilanne on tuntematon niin arki ja se tavallisuus alkaakin näyttäytyä toisena – tuttu muuttuukin vieraaksi ja tilanne synnyttää säpsähdyksenomaisia reaktioita. Koen että kaikki nämä maailman laajuiset rajoitukset ovat tuoneet sosiaalisen ja affektiivisen kehon sekä kehojen toisiinsa kytkeytymisen aivan uudelle tavalla esiin. Mitä tapahtuu meissä kun jotakin niin perustavanlaatuista rajoitetaan kuin toisen kosketus, läheisyys, sosiaalisuus jaetuissa tiloissa? Tai kun nesteistä tulee jotain vierasta?</p>
                    <p></p>
                    <p>Tämä tilanne on ollut tuntematon ja aavemainen, yllättävä.</p>
                    <p></p>
                    <p>Tutkijaliitto oli julkaissut kirjoituksen Mattias Lehtiseltä “Affektit pandemian aikana: pelko, ahdistus ja rakkaus”, jossa hän käyttää affektitutkijan Laurent Berlantin määritelmää tilanteesta, joksi hän myös tämä koronapandemian nimeää.</p>
                    <p></p>
                    <p className="quote">Tilanne on sellainen elämisen laji, että siinä kyllä tietää olevansa vaikka sen luonne onkin vielä selvittämättä. Se on tietty olosuhde, joka kuuluu täysin elämään, mutta ei silti ole hallinnassa. Tilanne on häiriö, tunne elähdyttävästä pysähdyksestä – se elähdyttää lakkaamatta. Valokuvan tavoin sillä on punctum: se pakottaa kiinnittämään huomiota, kiinnostumaan potentiaalisista muutoksista tavallisuudessa. Kun tilanne kehittyy, ihmiset yrittävät pysytellä siinä kunnes he keksivät, kuinka sopeutua. - <b>Laurent Berlant</b></p></div>

                <div><p><span className="ligature">Elina:</span> Teidän avaamanne asiat koskettaa minua. Niihin kytkeytyy niin paljon tätä aikaa, eikä vain jotain tätä Korona-aikaa. Niistä voi kyllä vetää analogioita moneen. Eräs ihana Teatterikorkeakoulun maisteriopiskelija sanoi pitämäni etäkurssin alkuun kuulumisten kyselyn aikana, että “ei Korona tehnyt minusta kriittistä vaan Korona avasi ajallisen mahdollisuuden tuntea vielä voimallisemmin ne kohteet mitkä herättävät minussa kriittisiä, kielletyltäkin tuntuvia ajatuksia.”</p>
                    <p></p>
                    <p>Olen tuntenut samoin. Ajattelin miten voisin kontribuoida teidän kirjoitukseenne lisää siitä mitä minun sydämen päällä on suhteessa tähän aikaan ja kirjoitin pitkän, hengästyttävän, kaoottisen ja kriittisen kirjoituksen nykyesitystaidekentän vallitsevasta omituisesta uus-moralismista, polarisaatiosta ja erittäin ovelan uus-binäärisyyden suuresta ristiriidasta suhteessa ihmiskeskeisyydestä poispäin ajattelevan ekofeministisen paradigman ehdottamaan huokoisuuteen ja siitä syntyvään monitodellisuudelliseen subjektiin. Tai sen subjektin skitsofreenisyyteen ja kriisiin siinä.</p>
                    <p>Avasin kuinka tämä vallitseva huokoisuuden ideaali voi juuri kuullostaa lempeälle kaikki aspektit huomioivalle laajennetulle horisontaaliselle ajattelulle, utopia potentiaaliselle ja havaintojeni mukaan taidepoliittisesti erittäin korrektille.</p>
                    <p>Ja korrektiudessaan ehkä myös siveälle, ja siveydessään hyveelliselle ja hyveellisyydessään myös porvarilliselle ja siksi ajattelin kirjoittaen kysyä onko porvarillinen uusi radikaali? Tämä askarruttaa minua. Korona-aika toi lisää tilaa kokea tätä. Tästä olin sitten ajatellut, että ristipölytän huokoisuuden ihanteen sisällä piilevän polarisaation kritiikkini fantasialliseen sisältöön ja havaintooni siitä, että miten se ideaali vaikuttaa sisällöistä puhumiseen? Sitten ajattelin avata siihen linkittyvän syvemmän sublimaation kaipuusta ja kaipuun merkityksestä ja sublimaatiokeskustelun poissaolon dominanssista osana tätä kiihottavaa vyyhtiä ja sitten kun pääsin ristipölytyksessäni kohti fantasiallista kirjoitusta, näiden kaikkien väliset kehät olivat kuin silponeet kieleni eikä minulla ollut enää poeettis-fantasiallisesti, taiteen erikoiskielellisesti, sisällöllisesti mitään annettavaa taiteilijana.</p>
                    <p></p>
                    <p>Jäätävää. Alkoi itkettää. Aivan mahdoton vyyhti. Aivan osaamiseni äärirajoilla. Koska en ole tutkija. Halusin kirjoittaa poeettisemmin. Muistaa siten kuka olen. Olen taiteilija.</p>
                    <p>Jotta voin puhua asioista sillä kielellä, joka tuntuu todelta.</p></div>

                <div>
                    <p><span className="ligature">Anne:</span> Kaipuuta tunnen.</p>
                </div>

                <div><p><span className="ligature">Elina:</span> Minäkin tunnen kaipuuta. Kirjoitukseni, jota tässä ei nyt julkaista, näytti sen missä todellisuudessa omakin sisäinen maailma velloo. Ja siitä liitännäisenä nousi suhteessa tähän aikaan ja kontekstiin tunne, että kaiken rinnalla kaipaan kollegojani. Kaipaan sitä, että voisin luottaa että kenttämme sisällä ihmiset ajattelevat enemmän hyvää kuin kurjaa toisista, toisten praktiikoista ja taideteoksista. Ei aina voi, minkä ymmärrän. Mutta kuinka patriarkaalista on se, että emme luota toisiimme. Meillä on liian vähän rahaa, liian vähän venueita, liian vähän diversiteettiä. Ja valtava osaaminen ja tarve. Vituttaa! Ymmärrän kaiken miksi jengi ei luota. Miksi itsekin olen välillä aivan parkana. Vaikka kuratoin, olen samoissa nöyryyttävissä rahahauissa, tuotantopaikkahauissa, miten minut otetaan vastaan- tosikysymyksissä kiinni freelancetaiteilijana.</p>
                    <p>Koen syvää kaipuuta taiteilijoiden väliseen luottamukseen ja siihen ajatukseen, että kollega on ajatellut jossain jotain ja yrittänyt elää tässä sekavassa ajassa ja elinkustannuksiimme, panostukseemme ja uudismieliseen vaativaan ajatteluumme nähden kohtuuttomissa olosuhteissa jotenkin. Haluan muistella niitä hetkiä - kaiken kielellisen kanssakäymisen rinnalla, mikä myös tässä etä-ajassa on dominanssissa, kun ruumis ja ruumiin live läsnäolo ovat vähemmällä - että liveruumiista voi lukea kunnioitusta, tukea, rakkautta, luottamusta, ymmärrystä, myötätuntoa ja toivoa. Miten välitän sitä itse seuraavan kerran kun näen jengiä, mietin.</p>
                    <p>Toki tämänkin reflektion muoto on kirjoitettu kieli. Mutta tässä se yrittää toimia meidän tämän hetkisten ajatusten avauksena, kunnes tulee uusia ajatusprosesseja.</p></div>

                <div><p><span className="ligature">Anne:</span> Haluaisin kirjoittaa taiteesta/-ssa. Ja kirjoitan tilanteesta, palaan tilanteeseen. Mutta se on niin akuutisti läsnäolevana ruumiissa. Haluaisin kirjoittaa fragmentteja, osia, palasia, välähdyksiä, momentteja, tunteita, tuntemuksia. Luoda kaleidoskooppista tilaa. Jotakin sellaista jossa aukkoisuus asettaa osat suhteeseen toistensa kanssa. Jossa oleminen on ihmetystä ja ymmällään oloa. Monisyistä ruumiillisuutta. Äh ja ah. Pysähtyä yhden lauseen, eleen, liikkeen äärelle. Pidellä sammakonkutua käsissäni ja syödä raakoja karviaisia. Kammata tukkaa. Nuuskaista. Räkäistä.</p>
                    <p></p>
                    <p>Olen jo jonkin aikaan liikkunut jonkinlaisen ristivedossa liittyen taidekentän hybrisluonteeseen. Olen ollut turhautunut apurahasysteemin eriarvoistavasta luonteesta ja siitä että olemme riippuvaisia tämänkaltaisesta epävarmasta toimeentulosta ja olen katsonut jonkilaisessa hämärässä olemuksessa esityksiä ja miettinyt, että mitkä ovatkaan ne todellisuudet joissa elämme – ja olen toivonut auvoisia aikoja ja eetteriä taiteen tekemiselle, taiteelle taiteelle. Samaistuin ajatuksiisi Sonja rahoittajien korona-apuraha eleestä. Minusta se on tuntunut epäoikeudenmukaiselta. Mutta ehkä eniten siksi, että minusta ehdottomasti olisi tässä tilanteessa pitänyt taata perustulo. Eikä kenenkään töiden menetettyä tai siirryttyä toiseen ajankohtaa pitäisi asettua kilpailuasemaan toisten tekijöiden kanssa innovoimalla uusia projekteja pystyäkseen selviytymään menetetyistä töistä ja tuloista. En voi ymmärtää, että vielä tällaisessakaan tilanteessa esimerkiksi perustuloa ei olla otettu vakavana vaihtoehtona. Kun tässä tilanteessa ei ole kyse taiteen tuottamisesta vaan perustoimeentulon turvaamisesta ja siitä että voi maksaa vuokransa, ruokansa ja muut laskut. Että missä sitten, jos ei tämänkaltaisessa tilanteessa, asiaan oltaisiin reagoiduttu totisesti ja vakavamielisesti?</p>
                    <p></p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p></p>
                    <p>Tämä esitystoiminnan pysähdys on itseasiassa palauttanut merkityksellisyyden tunteen suhteessa taiteeseen, varsinki elävää taidetta kohtaan. Kuten edellisessä kappaleessa kirjoitin, että olen jo jonkin aikaan tuntenut taideindustryssa hmm mikä olisikaan oikea sana, hmmm huoh tuota öööh äh noh, voimattomuutta ja sen sellaisia tunteita. Ja nyt tämä taideindustryn pysähdys on tuonut näkyville sen mikä on poissa. Toisaalta, kuten Sonja mainitsi jo aiemmin, on tilalle tullut industryltä muita toimintaa korvaavia eleitä, osittain paineestakin. Se mihin viittaan tällä pysähdyksellä on esitystoiminta joka tapahtuu in the real life. Kun jokin on poissa syntyy kaipaus ja tarve – taidetta ja sen tekijöitä me tarvitsemme! Enkä ehkä siksi ole itse kokenut tyhjyyden tunnetta, kun on tämä tarve ollut voimakas.</p>
                    <p></p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p></p>
                    <p>Mutta tällä indystryn pysähdyksellä on seuraamuksensa jotka näkyvät sitten tulevaisuudessa… pelottaaa</p></div>

                <div><p><span className="ligature">Sonja:</span> Tyhjyys on mielenkiintoinen.</p>
                    <p></p>
                    <p>Elämme manifestien, fake newsien ja tarinoiden manipulaation aikaa. Yritämme löytää kieltä aina, nopeasti ja tyhjyyttä täyttäen. Tämä on varmasti luonnollinen, inhimillinen tendenssi-luoda merkitystä sinne, missä sitä on vaikea nähdä. Itse olen enemmän kiinnostunut siitä mitä on tämä ei tietäminen ja mikä on sen ei-kielellinen kokemus. Miten olla siinä aukossa, joka avautuu arjen uudelleen järjestämisen, ihmiskontaktin häivyttämisen, monen asian poistumisen kautta. Tieteilijät, asiantuntijat ja poliitikot selittävät pandemia tilannetta, mutta toisaalta pandemiaa on myös käytetty demokratian vastaisena välineenä.</p>
                    <p></p>
                    <p></p>
                    <p>Taiteilijana haastan itseäni kuuntelemaan sitä että haluan tehdä taidetta tästä eteenpäinkin vain taiteeni ja sen prosessin ehdoilla- en viruksen, säädösten tai rajoitteiden ehdoilla. Vaikka ne vaikuttaisivatkin työn tekemisen konkretiaan, en ole valmis tekemään kompromisseja sisällöllisen ajatteluni suhteen. On tärkeää hahmottaa omaa positiota taiteilijana suhteessa välttämättömän muutoksen logiikan tai pandemian kautta syntyneen uuden normin ehdoilla toimimisen suhteen. Mietin myös BAD HOUSEN* kuraattorina, miten me omalta osaltamme pystyisimme protokollien sijaan kuuntelemaan yksilöllisiä taiteellisia visioita, tarpeita ja unelmia ja tukemaan niitä moninaisia muotoja osana tärkeää moniväristä keskustelua monokulttuurin sijaan.</p>
                    <p></p>
                </div>
                <div className="aside">
                    <p>*BAD HOUSE on Mad House Helsingin uusi kansainvälinen esitystaiteen festivaali. Koronapandemian vuoksi festivaali siirtyi keväältä 2020 vuoden 2021 kevääseen. Festivaalin kuraattoreina toimivat Sonja Jokiniemi, Mikko Niemistö ja Elina Pirinen.</p></div>

                <div><p><span className="ligature">Anne:</span> Sonja, tosi tärkeitä ajatuksia kuratointia ohjaaviin motiiveihin! Kysyin Mad Housen tuotantokoordinaattorilta Emmiltä pari viikkoa sitten, että onko Mad House Helsingin tiloissa pölyä, onko siellä aavemainen tunnelma. Mitä tapahtuu esitystilassa silloin kun siell’ ei ole esityksiä? Hän kertoi, että tilaan on jäänyt Layers-esityksen raksatilanne. Se tilanne ei edennyt pidemmälle, sillä Layersin esitykset siirtyivät syksyyn. Mutta päivät, valot, tunnelmat vaihtuivat tilassa ilman meitä ihmisiäkin.</p>
                    <p></p>
                    <p>Viime viikkoina olen alkanut unelmoimaan esitysten katsomisesta. Ruumiillisuudesta. Miltä kosketukset, katseet, äänet, suhteista syntyvät jännitteet tuntuvat ruumiissa. Millaiseksi kollektiivinen ruumiillisuus muotoutuu. Kuvittele, mikä on ensimmäinen esitys, jonka koet tämän tilanteen jälkeen. Mitä toivoisit kokevasi?</p>
                    <p></p>
                    <p>Kesäkuussa kuitenkin jo Mad Housen toiminta jatkuu. On hämmentävää ajatella, miten yhteinen esitystilan tunnelma ja sosiaalinen kanssakäyminen asettuu tämän tilanteen keskellä.</p>
                    <p></p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p></p>
                    <p>tahaton yskäisy, rään valuminen nenästä ja nopea kädellä pyyhkäisy, silmien pälyilevä vilkaisu ympärille</p>
                    <p></p>
                    <p>millä ehdoilla ollaan lähel toisiamme</p>
                    <p></p>
                    <p>halaus on muuttunut oudoiksi kyynärpää kosketukseksi – hitto, kaipaan halauksiakin</p></div>

                <div><p><span className="ligature">Sonja:</span> Mietin Annen kirjoittamaa räkää.</p>
                    <p>Kaipaan IRL taidetta. Kaipaan ihoja, hajuja, likaa, kaikkea sitä mitä ruumiit tuottavat ja ovat yhdessä. Toivon ettei korona muuta esitystaidetta hygienisen kliiniseksi. Mietin itse sitä, että jollakin tavalla meidän luultavasti pitää oppia elämään viruksen kanssa. Mutta se että kaikesta elämästä tulisi rajoitteista viruksen puitteissa tuntuisi eläväisyyden arvojen vastaiselta minulle. On toki hyvä miettiä vaihtoehtoja ja sitä miten elävä taide voi olla turvallista kokijoille. Itse kuitenkin kaipaan ruumiillisuutta sen moninaisissa inhimillisissä ja ei-inhimillisissä muodoissa.</p>
                    <p></p>
                    <p>Minulle taiteilijana merkityksellisiä mietteitä ovat olleet esimerkiksi Mika Rottenberg haastattelussa @barrons.com: </p>

                    <p className="quote">“In times of breakdown or war, sometimes art becomes more conservative. Maybe artists want to do stuff with color and texture and kind of retreat, to say, “I can’t deal with this.” Maybe art should just be about that—feelings and textures. What kind of art was made during real wars? Usually there was not that much, or something [emerges] like Dadaism that tries to find a new logic.” Tai Jean-Luc Goddard joka Écal:in ( taiteen yliopisto Lausannessa ) videoimassa haastattelussa sanoo: “ I don´t believe in language. I think the real problem and what needs to be changed is the alphabet.  There are too many letters and we should delete lots of them. And then move on.“</p></div>

                <div><p><span className="ligature">Elina:</span> Ihastelen Sonjan kultivoitunutta tapaa tuoda itsellekin mielekkäitä asioita näkyviin. On jopa suorastaan nautinnollista olla samanmielinenkin hänen kanssaan. Kääk.</p>
                    <p>Se myös inspiroi minua mielikuvittelemaan kielellä jonain anarkiana tähän kaikkeen mistä puhumme täällä.</p>
                    <p></p>
                    <p>Äitini lähetti taannoin minulle otteen psykoanalyytikon kirjahyllystään.</p>
                    <p>“Taiteilija ja psykoanalyytikko ovat ammattikehtaajia. He tuovat sisälmyksiä, sisältöjä näkyväksi ja se ei nosta aina miellyttävää katsottavaa ja se herättää siksi vastustusta.”</p></div>

                <div>
                    <p><span className="ligature">Anne:</span> Ammattikehtaaja - kiitos äidillesi sanan jakamisesta! Upea kerrassaan!</p>
                </div>
                <p></p>
                <div><p><span className="ligature">Sonja:</span> Jään Elinan kirjoittaman ruumiin rakkauden, luottamuksen ja myötätunnon kaikuihin.</p>
                    <p>Koen että elämme monella tapaa ja monissa asioissa binäärisyyksien aikaa. Ryhmittymiset näkyvät niin positiivisessa kuin negatiivisessakin mielessä. Hyvin voimmakkaina nousevat asiassa kuin asiassa me ja ne asetelmat. Isona osana tällaiseen sosiaaliseen, ihmiskuvalliseen ja poliittisen ajattelun harjoittamisen ilmiöön on mielestäni vaikuttanut sosiaalinen media. Itselleni sekä taiteilijana että kuraattorina on tärkeää yrittää miettiä tapoja, joilla sekä taiteellisen ilmaisun vapauden, keskustelujen, mielipiteiden ja kysymisen diskurssit mahdollistuisivat monivärisinä. Välillä nousee kokemus siitä että konstruktiivinen pohdinta monista eri suunnista ei mahdollistu niin hyvin kuin se voisi. Ristiriidat eivät tunnu olevan ajattelun kirkastumisen lähteitä vaan jotain mitä ei haluta- mikä sysätään toiseuden piiriin. On ehkä yksinkertaistavaa sanoa, mutta ihan kuin samanmielisyyden sisälle ei mahtuisi tonaalisuuseroja mielenkiintoisella tavalla.</p>
                    <p></p>
                    <p>Manifestit ja sloganit täyttävät todellisuutemme. Itse koen kaikkein tärkeimmäksi sen, että saan säilyttää ajatteluni itsenäisyyden ja vapauden. Se on tässä ajassa ajoittain haastavaa. Samaan aikaan, me kaikki luomme ja kontribuoimme yhteistä todellisuutta. Paljon mietin sitä, mikä on BAD HOUSEN rooli esitystaiteen festivaalina suhteessa valtatrendeihin ja niiden ilmentymiin. Kuinka me voisimme omalta osaltamme nähdä kolot, luolat, toisin ajattelijat, erilaiset taiteelliset ilmaisut. Kuinka me voisimme varmistaa taiteellisten sisältöjen tärkeyden haastavina, ristiriitaisina ja erityisinä tässä maailmassa ja ajassa jossa yksilön vapautta, ajattelun monivärisyyttä,  ja yksityisyyttä haastetaan ja rikotaan.</p></div>

                <div><p><span className="ligature">Elina:</span> Siispä rakennan seuraavan intensiivisen, obsessiivisen ja mielikuvitukseen pyrkivän tunnemylläkkähässäkkä kirjoitukseni kielen piirtämien fantasiallisten näkyjen kautta, koska aika ennen tätä ja tämä aika ja tämän jälkeinenkin aika saa minut suuresti aina ajattelemaan kieltä, joka ei ole informatiivista, kliinistä, teoreettista, media-affektiivista tai polarisoitunutta.</p>
                    <p></p>
                    <p>Kirjoitukseni etsii tuntematonta, jonka prosessi avaa tutummaksi kunnes muuntuu jälleen tuntemattomaksi, mahdottoman ja mahdollisen hämärillä mailla. Toivon, että voin kirjoituksellani innostaa joitain.</p></div>

                <div className="poem"><p>odotan ikkunassa että bob tulee ja sitten bob tulee ja tuuli ujeltaa ja bob tulee ja bob on hirveä ja siksi hän tulee ja annan hänen tulla sillä pidän enemmän hirveästä  ja avaan ikkunan että tuuli ujeltaisi yhtä kovaa kuin hirveä bob kun hirveä bob tulee ja tuuli yhä ujeltaa ja ujeltaa ja ajattelen cherylin, hannen, leimun, taikan, orlandon, koivun ja jannen kynnenalusia ja hirveän bobin palasta siellä ja heidän naapurin aarnin ystävän junin aamupaloja, jossa on hirveän bobin palanen sillä hirveä bob naputteli dikillään naapurin aarnin ystävän junin aamiaista hänen suurista toiveistaan käsin aamulla anivarhain silloin juuri kun bob on poeettisimmillaan ja juuri silloin haluan mennä bobiin kuin kotiin tai tuulien alkamiskohtaan jonka ikkunassa odottaa jasmina johon minä tulen kuin sade ja sitten minä tulen ja tuuli ujeltaa ja minä tulen ja minä olen hirveä ja siksi minä tulen ja jasmina antaa minun tulla sillä jasmina pitää myös enemmän hirveästä ja jasminan kaveri sekunti pitää enemmän hirveästä ja jasmina ja sekunti avaavat ikkunan että tuuli ujeltaisi lisää tai että verhot lepattaisi tai että sade syöksyisi sisään ja elämäni rakkauden  asentamat lattialaudat tai että koko talo tai että koko naapurusto homehtuisi tai että elämäni rakkauden eggsit  ja pallea tai perna ja nännit homehtuisivat tai että jasmina kohtaisi hirveän bobin dikin palan sijaan naapurin aarnin ja hänen ystävänsä junin silmät lautasen kokoisina innostuksesta mutta surullisina hetken kuluttua kuunneltuaan heitä sanoisi: aarni ei voi hyvin tai sanoisi aarni ei ole koskaan ehkä voinutkaan hyvin ja nyt aarnin on aika voida hyvin ja sitten tuuli yhtyy jasminaan ja lasauttaa hänen silmät lautasiksi joissa se ujeltaa korkeammalta eli muutos tulee ja sitten muutos vaan tulee  ja tuuli ujeltaa ja muutos ujeltaa ja muutos on hirveä ja siksi se ujeltaa ja annan sen ujeltaa sillä pidän yhä enemmän hirveästä sillä voin viimein hyvin ja avaan ikkunan että tuuli ujeltaisi yhtä korkealta kuin hirveä muutos kun hirveä muutos tulee ja tuuli edelleen ujeltaa ja ujeltaa ja muistelen homeeseen syöpynyttä elämäni rakkautta sillä home tykkää enemmän hirveästä ja hyppään ikkunasta kohti sateen alkamiskohtaa ja annan sateen tulla ja sade tulee tai että sade tulee niin että sen voima roiskuttaa mullan cherylin, hannen, leimun, taikan, orlandon, koivun ja jannen haudalta ja että näen poimia haudasta heidän kynnet kuin kanttarellit ja vien ne nykyisen kauneussalonki-bobin kauneussalonkiin ja kauneussalonki-bob fiksaa ne kiinni samalla millä lautassilmä-jasmiina fiksasi sekunnin luomet kiinni ja jolla bobin ystävä kosmos liimasi nykyisen hyvin voivan aarnin sydämen kiinni 1998 ja jolla minä liimaan seuraavan taloni lattialaudat kiinni ja odotan uudessa ikkunassa uutta sadetta ja jasminaa ja sekuntia ja uusia kanttarelleja ja homeeseen syöpymistä että odotan uusia pilviä ja uusia tuulia</p>
                </div>
                <div><p>Pelkään kirjoittaa seuraavaa, mutta ajattelen ammattikehtaamista.</p>
                    <p>Haluan rohkaista taiteilijana, pedagogina ja kuratoijana taiteilijoita ja tuotantoja fantasioimaan yli yksimielisten joukko-odotusten, ryhmäilmiöiden ja etsimään myös monenlaisia syvän subjektin ääniä ja mielikuvittelua ja ammattikehtaamista, syvästi prosessoitua emansipaatiota.</p>
                    <p>Haluan, että ihminen ja taiteilija saisivat rauhassa ajassamme kasvaa syväksi subjektiksi taiteensa avulla ja avautua maailmaan niinkin. Mitä kaikkea se tarkoittaakin. Minä en halua tai aio määritellä positioistani käsin sitä mitä subjekti tarkoittaa vaan kutsua ihmisiä tässä ajassa edelleen pohtimaan sitäkin fokusta. Maailma kulkee ihmisen läpi ja ihminen kulkee maailman läpi. Näin saa myös olla.</p>
                    <p></p>
                    <p>Haluan, että taiteilija nähdään ajassamme erikoisolentona, ammattikehtaajana, erikoiskielen kirjoittajana. Oma osuuteni esimerkiksi Mad Housessa ja Sivuaskel- festivaalin taiteellisena neuvonantajana on rajattu, mutta tosi. Tiedostan, että fokusoin kaikista edellä mainituista syistä paljon erikoiskielen etsimiseen sisältönä. Haluan intersektionaalisena feministinä, taiteilijana, ihmisenä, kohdata friktiivistä, fantasiallista, hirveää, mielikuvituksellista, vapaasti assosioivaa sisältöä uhkarohkeana avauksena ja sen tutkimista sisältönä, muotona ja logiikkana.</p>
                    <p>Haluan tukea sitä, että taiteilijuus sheikkaisi uusporvarillisia ja siveitä aikamme hyveitä ja tukea monitemperamentillisuutta ja monitodellisuudellisuutta siten. Olla intersektionaalinen feministi myös siten.</p>
                    <p></p>
                    <p>Haluan yhdessä taiteilijoiden ja tuotantotiimien kanssa etsiä uudelleen ja uudelleen erityisesti transgression merkitystä ja syvemmin ja omakohtaisemmin prosessoitua ajattelua ryhmäilmiöiden ja siitä syntyvän polarisaation rinnalla.</p>
                    <p>Haluan, että taiteilija saa vapaasti etsiä ja tutkia tapaansa kokea, ajatella, katsoa ja tehdä työtään sekä itseään toisten valistuneiden tai rahoittajien tai venueiden rajausten ja suunnannäyttöjen rinnalla. Tiedostan, että rakenteellinen radikaali paradigman muutos on asia erikseen ja tällä hetkellä tie yhdenvertaisuuden rakentumiseen.</p>
                    <p>Siinä me kaikki tarvitsemme opiskelua ja opastusta.</p></div>

            </div>
        </div>)
}