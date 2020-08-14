import React, { useEffect, useState } from 'react'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { Inf } from '../../components/svgs'

const Tw = ({ children }) => {
    const text = children

    const [string, setString] = useState("")
    const [ticks, setTicks] = useState(0)

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            if (string.length == text.length) {
                if (ticks >= 10) {
                    setTicks(0);
                    setString(" ");
                    return;
                }
                setTicks(ticks + 1)
                return;
            }
            var next = text.slice(0, string.length + 1)
            setString(next);
        }, 200);
        return () => (clearInterval(interval));
    }, [ticks, string])

    return (string)
}

export const Polab = () => {
    return (
        <div className="polab">
            <div className="title">
                <h1>Practices of Love and Body</h1>
                <h5>Prekaarit Praktiikat</h5>

                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>

                    <p><b>5/2020</b>
                        <br></br>
                        <b>video, teksti, ääni, kuva</b></p>

                    <p><b>Prekaarit Praktiikat</b> on helsinkiläisten freelance-tanssitaiteilijoiden muodostama työskentelyalusta. Ryhmän toiminta perustuu taiteellisen ajattelun vaihtoon, yhteisöllisyyteen ja jatkuvuuteen epävarmoista olosuhteista huolimatta. Tällä hetkellä työryhmään kuuluvat taiteilijat <b>Elias Girod</b>, <b>Tiia Kasurinen</b>, <b>Ella-Noora Koikkalainen</b>, <b>Sanni Kriikku</b>, <b>Pie Kär</b>, <b>Taru Koski</b>, <b>Jan Nyberg</b>, <b>Anne Rönkkö</b>, <b>Tuuli Vahtola</b>, <b>Vanessa Virta</b> ja <b>Soile Voima</b>.
                    </p>
                    <p>Julkaisussa esitellään muutamia taiteellisia praktiikoita. Suurin osa praktiikoista on sovellettu toimimaan verkossa, mikä on osaltaan liikuttanut ja kehittänyt niiden harjoittamista jälleen uusiin suuntiin. Prekaarit Praktiikat -ryhmän työtä pääsee seuraamaan syksyllä 2020 fyysisissä iltamissa Mad House Helsingissä.
                    </p>
                </Modal>
            </div>
            <div className="poem poem-1">
                <pre>
                    <Tw>{`Trrr
trimmer`}</Tw>
                </pre>
            </div>
            <div>
                <iframe src="https://open.spotify.com/embed/playlist/7eukXEF3MsYMEjE6TKClQ4" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" id="playlist"></iframe>
                <div className="chatbox kotiklubi">
                    <div className="chat-title" style={{ "backgroundColor": "#80C1C1" }}>
                        <h2>Kotiklubi</h2>
                    </div>
                    <div className="chat-content">
                        <p>22.4.2020 klo 11.02
<br />
Elias: Tiia, mitä näet, kun katsot ulos ikkunasta?</p>
                        <p>22.4.2020 klo 11.13
<br />
Elias: Tiia, what do you see when you look out of the window?</p>
                        <p>22.4.2020 klo 11.18
<br />
Tiia: <br /><img src="/img/polab/kuva1.jpeg"></img></p>
                        <p>22.4.2020 klo 11.18
<br />
Tiia: Soile, ketä kotonasi asuu? Soile, who lives in your home?</p>
                        <p>23.4.2020 klo 9.32
<br />
Soile: ‎<br /><img src="/img/polab/kuva2.jpeg" /></p>
                        <p>23.4.2020 klo 9.37
<br />
Soile: Ella, mikä on lempipaikka kotonasi? What is your favourite place at your home?</p>
                        <p>23.4.2020 klo 20.55
<br />
Ella: <br /><img src="/img/polab/kuva3.jpeg" /></p>
                        <p>23.4.2020 klo 21.48
<br />
Ella: ‎<br /><img src="/img/polab/kuva4.jpeg" /></p>
                        <p>23.4.2020 klo 22.06
<br />
Ella: Jan, mikä on kodissasi sellainen yksityiskohta tai esine, joka tuntuu sinulle merkitykselliseltä?</p>
                        <p>23.4.2020 klo 22.08
<br />
Ella: Jan, please share with us a detail or an object that feels meaningful to you?</p>
                        <p>24.4.2020 klo 20.06
<br />
Jan: ‎<br /><img src="/img/polab/kuva5.jpeg" /></p>
                        <p>24.4.2020 klo 20.07
<br />
Jan: Anne, what is the sound of your home? Miltä kotisi kuulostaa?</p>
                        <p>25.4.2020 klo 11.40
<br />
Anne: ‎<br /><img src="/img/polab/kuva6.jpeg" /></p>
                        <p>25.4.2020 klo 11.41
<br />
Anne: Taru, mikä on ensimmäinen aamutoimesi? What is the first thing you do in the morning?</p>
                        <p>25.4.2020 klo 17.39
<br />
Taru: ‎<br /><img src="/img/polab/kuva7.jpeg" /></p>
                        <p>25.4.2020 klo 17.41
<br />
Taru: Sanni, mitä piristeitä kodistasi löytyy?</p>
                        <p>25.4.2020 klo 17.59
<br />
Sanni: <br /><img src="/img/polab/kuva8.jpeg" /></p>
                        <p>26.4.2020 klo 9.26
<br />
Sanni: Pietari, mitä vanhaa kotoasi löytyy? Pietari, what old things do you find in your home?</p>
                        <p>26.4.2020 klo 13.21
<br />
Pietari: ‎<br /><img src="/img/polab/kuva9.jpeg" /></p>
                        <p>Scobyt Elinalta, valokuva Eevalta, kastekynttilänjalka Antilta, Irenen maalaus Pirkolta, Hertan posliinikukka Lissulta, Pirkon sormus Eevalta</p>
                        <p>26.4.2020 klo 13.23
<br />
Pietari: Tuuli millaisia reittejä kodissasi on? / Tuuli what kinds of paths do you take in your home?</p>
                        <p>27.4.2020 klo 8.27
<br />
Tuuli: ‎<br /><img src="/img/polab/kuva10.jpeg" /></p>
                        <p>Tällä hetkellä tämä on vahvin reitti (eteisen kautta ulos). At the moment this is the strongest path (out through the hallway).</p>
                        <p>27.4.2020 klo 8.30
<br />
Tuuli: Vanessa, miltä kodissasi/siellä, missä oleilet tuntuu? Vanessa, how does it feel in your home/where you reside?</p>
                        <p>27.4.2020 klo 13.53
<br />
Vanessa: <br /><img src="/img/polab/kuva11.jpeg" /></p>
                        <p>27.4.2020 klo 13.53
<br />
Vanessa: It feels like the love between three unexpected friends.</p>
                        <p>27.4.2020 klo 13.55
<br />
Vanessa: Kodissani tuntuu rakkaudelta kolmen yllättävän ystävyksen välillä.</p>
                        <p>27.4.2020 klo 13.56
<br />
Vanessa: Elias, what is the smell that makes you feel like home? Elias, mikä tuoksu saa kotisi tuntumaan kodilta?</p>
                        <p>27.4.2020 klo 16.09
<br />
Elias: ‎<br /><img src="/img/polab/kuva12.jpeg" /></p>
                        <p>27.4.2020 klo 16.57
<br />
Elias: Vanessa, missä silmäsi lepäävät asuinpaikassasi? What do you like to look at in the place you live in?</p>
                        <p>27.4.2020 klo 23.32
<br />
Vanessa: ‎<br /><img src="/img/polab/kuva13.jpeg" /></p>
                        <p>These feet dancing / tanssivat jalat</p>
                        <p>27.4.2020 klo 23.36
<br />
Vanessa: Tuuli, miten huolehdit kodistasi? Tuuli, how do you take care of your home?</p>
                        <p>28.4.2020 klo 15.24
<br />
Tuuli: Hei Vanessa. Vietän paljon aikaa kotona, ja ajattelen, että se on yksi tapa hoitaa ja ylläpitää kotia!</p>
                        <p>Hi Vanessa. I spend a lot of time at home and see that as a way of taking care of and sustaining the home!</p>
                        <p>28.4.2020 klo 15.28
<br />
Tuuli: Pietari, jos kotisi olisi jokin julkinen hahmo, kuka tai mikä se olisi? Pietari, if your home was a public character, who or what would it be?</p>
                        <p>28.4.2020 klo 17.16
<br />
Pietari: ‎<br /><img src="/img/polab/kuva14.jpeg" /></p>
                        <p>Home sweet home 🦠🦠🦠</p>
                        <p>28.4.2020 klo 18.34
<br />
Pietari: Sanni, onko sinun kotielämässä tilaa, jossa kotisi materiaalinen ”ruumis” ja sinun ruumis sekoittuvat toisiinsa? / Sanni is there such spaces/moments in your home life where the materiality ”body” of your home and your body fuse with one another?</p>
                        <p>28.4.2020 klo 20.46
<br />
Sanni: <br /><img src="/img/polab/kuva15.jpeg" /></p>
                        <p>28.4.2020 klo 20.51
<br />
Sanni: Taru, jos olisit muurahaisen kokoinen, missä asuisit kotisi sisällä? Taru, if you were the size of an ant, where would you live inside your home?</p>
                        <p>29.4.2020 klo 10.19
<br />
Taru: <br /><img src="/img/polab/kuva16.jpeg" /></p>
                        <p>29.4.2020 klo 10.30
<br />
Taru: Anne, mitä sellaista haluaisit tehdä kotonasi, mitä et ole koskaan aiemmin tehnyt? What would you like to do at home that you have never done before?</p>
                        <p>29.4.2020 klo 14.02
<br />
Anne: ‎<br /><img src="/img/polab/kuva17.jpeg" /></p>
                        <p>29.4.2020 klo 14.04
<br />
Anne: Jan, mikä on kotisi tunnari? What is the theme song of your home?</p>
                        <p>29.4.2020 klo 19.33
<br />
Jan: ‎<br /><img src="/img/polab/kuva18.jpeg" /></p>
                        <p>29.4.2020 klo 19.37
<br />
Jan: Ella, minkä kotisi kohdan kanssa haluat käydä vakavan keskustelun? What part of your home are you about to have a serious discussion with?</p>
                        <p>2.5.2020 klo 14.09
<br />
Ella: ‎<br /><img src="/img/polab/kuva19.jpeg" /></p>
                        <p>2.5.2020 klo 14.13
<br />
Ella: Soile, mistä kotonasi löydät rakkautta sen kaikista materiaalisimmassa muodossa?</p>
                        <p></p>
                        <p>Soile, where in your home do you find love in its most material form?</p>
                        <p>2.5.2020 klo 22.07
<br />
Soile: ‎<br /><img src="/img/polab/kuva20.jpeg" /></p>
                        <p>2.5.2020 klo 22.30
<br />
Soile: Tiia, minkälaisia hyönteisiä ja eläimiä löydät kotoasi? What kind of insects and animals do you find from your home?</p>
                        <p>3.5.2020 klo 13.41
<br />
Tiia: ‎<br /><img src="/img/polab/kuva21.jpeg" /></p>
                        <p>3.5.2020 klo 13.42
<br />
Tiia: Elias, jos joutuisit muuttamaan, mitä jäisit kaipaamaan eniten nykyisestä kodistasi?</p>
                        <p></p>
                        <p>Elias, if you had to move, what would you miss the most from your current home?</p>
                        <p>4.5.2020 klo 15.31
<br />
Elias: ‎<br /><img src="/img/polab/kuva22.jpeg" /></p>

                    </div>
                </div>
            </div>
            <div className="poem poem-2">
                <pre>
                    <Tw>{`frrrr    fragment   tsssssss
trrrr    true       trrrust`}</Tw>
                </pre>
            </div>
            <div id="audioiltamat-container">
                <div className="audioiltamat">
                    <audio src="/audio/polab/aud2.mp3" controls></audio>
                    <audio src="/audio/polab/aud3.mp3" controls></audio>
                    <audio src="/audio/polab/aud1.mp3" controls></audio>
                    <a href="https://soundcloud.com/madhousehelsinki/sets/prekaarit-praktiikat-audioiltamat"> Kuuntele Soundcloudissa</a>
                </div>
                <ModalButton modalId="audioiltamat-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="audioiltamat-modal" closable>
                    <p>
                        <i>Audioiltamat</i> on kolmiosainen podcast-sarja.<br />
                        <br />


                    I osassa <b>Elias</b> ohjaa suupraktiikkaan liittyviä kehollisia harjoitteita.<br />
                        <br />II osassa <b>Tuuli</b> ohjaa kehollisia harjoitteita liittyen omaan työskentelyynsä. Kuulija voi halutessaan osallistua harjoitteiden tekemiseen.<br />
                        <br />
III osassa työryhmä keskustelee praktiikan merkityksistä ja merkityksellisyydestä. Keskustelijoina <b>Pietari</b>, <b>Soile</b>, <b>Tuuli</b>, <b>Elias</b> ja <b>Taru</b>.


                    </p>
                </Modal>
            </div>
            <div>
                <div id="dumplings" className="chatbox" style={{ "height": "300px" }}>
                    <div className="chat-title" style={{ "backgroundColor": "#EDCEC5" }}>
                        <h2>DUMPLINGS AND TOUCH</h2>
                    </div>
                    <div className="chat-content">
                        <p style={{ "textAlign": "right", "color": "gray", "fontStyle": "italic" }}>
                            Hallu has joined the room.<br />
                            Forrester has joined the room.<br />
                            salazo has joined the room.<br />
                        </p>
                        <p>
                            <br /><br /><span className="pulleapupu">pulleapupu</span> Hallu toi sun loppukuvaehdotus toimi tosi hyvin
                        <br /><br /><span className="hallu">Hallu</span> Jee!
                        <br /><br /><span className="hallu">Hallu</span> Onko tää nyt kutsuva tää?
                        <br /><br /><span className="forrester">Forrester</span> joo eiköhän
                        <br /><br /><span className="pulleapupu">pulleapupu</span> On, must tää kokonaisuus on nyt kokonaisuus.
                        <br /><br /><span className="forrester">Forrester</span> aina vähän stressaavaa markkinoida
                        <br /><br /><span className="hallu">Hallu</span> Musta sieltä puuttuu keskeltä vielä vähän jotain....
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Ehkä kuutio?
                        <br /><br /><span className="hallu">Hallu</span> Jotain, mikä tois esiin sitä avoimuutta, mistä puhutaan.
                        <br /><br /><span className="hallu">Hallu</span> No just se.
                        <br /><br /><span className="salazo">salazo</span> pitäiskö olla kukkia ripoteltuna siihen keskelle?
                        <br /><br /><span className="hallu">Hallu</span> Miksi se hylättiin ikinä!
                        <br /><br /><span className="hallu">Hallu</span> Joo, pitäs!
                        <br /><br /><span className="pulleapupu">pulleapupu</span> ja sit se eteismatto tohon etureunaan missä lukee welcome
                        <br /><br /><span className="salazo">salazo</span> Entä minkä kokosta kuutiota ajattelit <span className="pulleapupu">pulleapupu</span>?
                        <br /><br /><span className="forrester">Forrester</span> hyvä idea
                        <br /><br /><span className="forrester">Forrester</span> se kuutio hylättiin viimeks
                        <br /><br /><span className="salazo">salazo</span> Onks se läpinäkyvä kuutio?
                        <br /><br /><span className="pulleapupu">pulleapupu</span> semmonen 5 kertaa 5 senttii
                        <br /><br /><span className="pulleapupu">pulleapupu</span> ei kun pinkki
                        <br /><br /><span className="hallu">Hallu</span> eli originaali...
                        <br /><br /><span className="pulleapupu">pulleapupu</span> puinen
                        <br /><br /><span className="hallu">Hallu</span> No se ei ollut puuta.
                        <br /><br /><span className="hallu">Hallu</span> Mutta miten me vastattas siihen kysymykseen jatkuvuudesta?
                        <br /><br /><span className="forrester">Forrester</span> mun mielestä me käytiin tää keskustelu jo kertaalleen
                        <br /><br /><span className="forrester">Forrester</span> kuutiosta
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Silloin
                        <br /><br /><span className="pulleapupu">pulleapupu</span> å
                        <br /><br /><span className="pulleapupu">pulleapupu</span> a
                        <br /><br /><span className="pulleapupu">pulleapupu</span> o
                        <br /><br /><span className="pulleapupu">pulleapupu</span> sori, ajatus katkes.
                        <br /><br /><span className="hallu">Hallu</span> Katkeehan se
                        <br /><br /><span className="hallu">Hallu</span> Mutta jatkuvuus?
                        <br /><br /><span className="forrester">Forrester</span> mul on sellanen fiilis että kaikki vähän nyt stressaa
                        <br /><br /><span className="hallu">Hallu</span> No oot ehkä oikeessa....
                        <br /><br /><span className="pulleapupu">pulleapupu</span> mä äänestän letkua edelleen. tiedän et se on teknisesti vaikee mutta silti
                        <br /><br /><span className="hallu">Hallu</span> Kyllä me se onnistutaan hoitamaan!
                        <br /><br /><span className="hallu">Hallu</span> meitä on monta
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Joo, hoitaminen on ytimessä
                        <br /><br /><span className="forrester">Forrester</span> letku letku vanha kunnon ketku
                        <br /><br /><span className="hallu">Hallu</span> ydin on ytimessä
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Hoitaminen on se mikä tästä vähän puuttuu!
                        <br /><br /><span className="salazo">salazo</span> Letku on musta hyvä. Eli sehän menee tän tilan ympäri
                        <br /><br /><span className="hallu">Hallu</span> ydin on ketku!
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Vaikka olsi kuutiokin
                        <br /><br /><span className="pulleapupu">pulleapupu</span> pö
                        <br /><br /><span className="hallu">Hallu</span> miten kuutio voi mennä ympäri.... :D
                        <br /><br /><span className="salazo">salazo</span> Se letkuhan menee tän tilan ympäri eikö?
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Joo!
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Kuution voi kyllä kääntää
                        <br /><br /><span className="hallu">Hallu</span> aa niin letku, joo, tehään niin
                        <br /><br /><span className="forrester">Forrester</span> Mä voin hoitaa sen letkun huomisiin treeneihin
                        <br /><br /><span className="pulleapupu">pulleapupu</span> se vois olla sun yks score <span className="forrester">Forrester</span>
                            <br /><br /><span className="hallu">Hallu</span> mä voin hoitaa hoitamisen, <span className="pulleapupu">pulleapupu</span>
                            <br /><br /><span className="hallu">Hallu</span> Oonkin etsinyt jotain omaan scoreen.
                        <br /><br /><span className="forrester">Forrester</span> mulla on jo kyl se oma "staying and praying" -score
                        <br /><br /><span className="forrester">Forrester</span> ehkä saan letkun siihen mukaan joteki
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Kääntäminen, kääntyminen... onks se niinkun turn vai translate?
                        <br /><br /><span className="hallu">Hallu</span> turn
                        <br /><br /><span className="hallu">Hallu</span> tässä
                        <br /><br /><span className="hallu">Hallu</span> ?
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Joo oot oikeassa!
                        <br /><br /><span className="forrester">Forrester</span> Mites <span className="salazo">salazo</span>, mikä sun score oli
                        <br /><br /><span className="hallu">Hallu</span> Hoidanko mä siis mitä tässä sitten? Mikä vaatii eniten hoitoa?
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Letku
                        <br /><br /><span className="salazo">salazo</span> Mä teen siihen letkuun reikiä niin et vesi roiskuu joka paikkaa. se on mun vastuulla
                        <br /><br /><span className="forrester">Forrester</span> aivan
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Läikkyminen ja hoitaminen, siinä on jotain
                        <br /><br /><span className="hallu">Hallu</span> No ei musta ees! Musta Vinttuuri vaatii eniten hoitoa kaiken sen tapahtuman jälkeen?
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Ehkä hetkeks ainakin
                        <br /><br /><span className="forrester">Forrester</span> tossa on pointti
                        <br /><br /><span className="pulleapupu">pulleapupu</span> intensiivistä hoitoa, intensive care
                        <br /><br /><span className="pulleapupu">pulleapupu</span> et se tiivistyy sit siinä yhtäkkiä, siihen tulee dynamiikka... vai onks se liian puskista?
                        <br /><br /><span className="hallu">Hallu</span> niin tai Vinttuurin kaa, ehkä less intense on parempi...
                        <br /><br /><span className="forrester">Forrester</span> "Hoidon hoidot" olisko siinä nimeä tälle
                        <br /><br /><span className="hallu">Hallu</span> Mun vaan mun mielipide
                        <br /><br /><span className="hallu">Hallu</span> mut mut mut
                        <br /><br /><span className="salazo">salazo</span> tää on hieno tää viittaus trooppiseen ehkä tää on joku kasvihuone
                        <br /><br /><span className="hallu">Hallu</span> Olis siinä khyl jotain?
                        <br /><br /><span className="salazo">salazo</span> kaikki kasvattaa jotain ja hoitaa
                        <br /><br /><span className="forrester">Forrester</span> hoivaten ja holhoten
                        <br /><br /><span className="forrester">Forrester</span> toinen idis
                        <br /><br /><span className="forrester">Forrester</span> näitä tulee nyt paljo
                        <br /><br /><span className="forrester">Forrester</span> hehe
                        <br /><br /><span className="hallu">Hallu</span> kerro!
                        <br /><br /><span className="forrester">Forrester</span> care and bear
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Musta holhoamisen voisi liittää siihen staying and praying.?
                        <br /><br /><span className="hallu">Hallu</span> aa, se oli se idis..
                        <br /><br /><span className="pulleapupu">pulleapupu</span> kukas olis siinä vapaana?
                        <br /><br /><span className="hallu">Hallu</span> Minä! Dumplings and touch!
                        <br /><br /><span className="pulleapupu">pulleapupu</span> JOO!!!
                        <br /><br /><span className="hallu">Hallu</span> Saanko!!!
                        <br /><br /><span className="pulleapupu">pulleapupu</span> Nyt alkaa palaset putoo paikoilleen!
                        <br /><br /><span className="forrester">Forrester</span> Dumblings and touch
                        <br /><br /><span className="pulleapupu">pulleapupu</span> xD

                        </p>
                        <p style={{ "textAlign": "right", "color": "gray", "fontStyle": "italic" }}>
                            Hallu has changed their user name to Selkee
                        </p>
                    </div>
                </div>
                <div className="poem poem-3">
                    <pre>
                        <Tw>{`fire fff
figure of fire`}</Tw>
                    </pre>
                </div>
                <div id="kuohkee" className="chatbox" >
                    <div className="chat-title" style={{ "backgroundColor": "#FBEB90" }}>
                        <h2>KUOHKEE</h2>
                    </div>
                    <div className="chat-content">
                        <p style={{ "textAlign": "right", "color": "gray", "fontStyle": "italic" }}>
                            Maria F. has joined the room <br />
                            Sightsee has joined the room <br />
                            creisii has changed their user name to Eero
                        </p>
                        <p>
                            <span className="mariaf">Maria F</span>: Eero, sun praktiikasta vielä. Mitä sä koit, että tää tila antoi siihen?
                        </p>
                        <p style={{ "textAlign": "right", "color": "gray", "fontStyle": "italic" }}>
                            kaapeli has joined the room
                        </p>
                        <p>
                            <span className="eero">Eero</span>: Ihan tosi paljon.
<br /><br /><span className="mariaf">Maria F</span>: Joo sama
<br /><br /><span className="eero">Eero</span>: Tän tilan pyöreys on semmoinen mikä mua häiritsee hirveen hyvällä tavalla.
<br /><br /><span className="sightsee">sightsee</span>: Koin kyllä sen kautta, että on oo yhtään yksin siinä mitä teen!
<br /><br /><span className="mariaf">Maria F</span>: Se resonoi kivasti siihen liikkeen kuohkeuteen.
<br /><br /><span className="sightsee">sightsee</span>: Just niin! Kuohkeudesta tuli sellanen yhteenkuuluvuuden tunne. Mulle ainakin. Mä jäin miettimään sitä aiempaa kysymystä 'rakentamisen' ajatuksesta tässä toiminnassa... Osaisko joku sanoo jotain siihen? Kun multa unohtu se koko rakentamisen ajatus.
<br /><br /><span className="eero">Eero</span>: Jep, se on mullakin jatkuvan kysymisen alla että onko se sana mitä haluan käyttää.
<br /><br /><span className="kaapelu">kaapelu</span>: Oliks se suhteessa niihin lakanoihin, jota sidotaan yhteen?
<br /><br /><span className="sightsee">sightsee</span>: Niin vai onko se jossain antisuhteessa..... nimenomaan.
<br /><br /><span className="eero">Eero</span>: On ja samalla ei. Mitä eroa on rakentamisella ja organisoinnilla?
                        </p>
                        <p style={{ "textAlign": "right", "color": "gray", "fontStyle": "italic" }}>
                            Sightsee has changed their user name to Tipa

                        </p>
                        <p>
                            <br /><br /><span className="mariaf">Maria F</span>: Haha, mä koen jotenki et se rakennelma sortuu ja muuttuu ilmaksi sen kuohkeuden käsitteen kanssa. se on niinku hattaraa. mut lakanat toisaalta antaa siihen pysyvyyttä. hyvä, että ehdotit niitä Tipa!
                        <br /><br /><span className="sightsee">Tipa</span>: Hei mä haluaisin kysyä yhtä juttua.... miltä susta Maria tuntu olla niin lähellä vaaraa? Tai oliko se vaaraa sulle?
                        <br /><br /><span className="eero">eero</span>: Joo, se mun ensimmäinen ajatus spagetista ei toiminut yhtään
                        <br /><br /><span className="sightsee">Tipa</span>: No ei kyllä! haha! Se olis vähän eri juttu sitten…
                        </p>
                        <p style={{ "textAlign": "right", "color": "gray", "fontStyle": "italic" }}>
                            Tipa has changed their user name to Sightsee
                        </p>
                        <p>
                            <br /><br /><span className="mariaf">Maria F</span>: Venaa mun täytyy pohtia tota vaaraa
                        </p>
                        <p style={{ "textAlign": "right", "color": "gray", "fontStyle": "italic" }}>
                            Sightsee has changed their user name to Tipa
                        </p>
                        <p>
                            <br /><br /><span className="sightsee">Tipa</span>: NO niin mä arvasin!
                        </p>
                        <p style={{ "textAlign": "right", "color": "gray", "fontStyle": "italic" }}>
                            Tipa has changed their user name to Sightsee

                        </p>
                        <p>
                            <br /><br /><span className="sightsee">sightsee</span>: Mulle se ei näyttäytyny vaarana... vaiks toisaalta tiedän kyllä mihin viittaat
                        <br /><br /><span className="kaapeli">kaapeli</span>: Siis mä en tiiä mut musta tuntuu että olisin jossain monitoimikoneessa tän praktiikan aikana. Musta sitä vaaraa on koko ajan.
                        <br /><br /><span className="eero">eero</span>: Tuntuuks se silti mielenkiintoiselta vai selviytymiseltä?
                        <br /><br /><span className="mariaf">Maria F</span>: Mä en myöskään kokenut että olisin vaarassa, mutta ehdottomasti tapailin riskinottoa ja rohkeutta
                        <br /><br /><span className="kaapeli">kaapeli</span>: joo siis se on semmosta mielenkiintoista vaaran tunnetta
                        <br /><br /><span className="mariaf">Maria F</span>: mulle tää tilan pyöreys tuo siihen kokemukseen syvyyttä
                        <br /><br /><span className="sightsee">sightsee</span>: Mä taas jotenkin kuvittelen että tää on se tila, missä ollaan, eikä poikkeus, että jotain, johon ehkä ollaan jo totuttu
                        <br /><br /><span className="mariaf">Maria F</span>: ikään kuin ei täältä ikinä pääsisi pois
                        <br /><br /><span className="kaapeli">kaapeli</span>: Joo loputon pyörivä pyörä tai jotain
                        <br /><br /><span className="sightsee">sightsee</span>: Niin, kyllä! Ja siksi varmaan Tipa miettikin vaaraa…

                        </p>
                        <p style={{ "textAlign": "right", "color": "gray", "fontStyle": "italic" }}>
                            Sightsee has changed their user name to Tipa
                        </p>
                        <p>
                            <br /><br /><span className="sightsee">Tipa</span>: No just!
                        <br /><br /><span className="kaapeli">kaapeli</span>: Niin just. Vaara että pyörii elämänsä loppuun saakka
                        <br /><br /><span className="sightsee">Tipa</span>: Siis että kai vaaraan turtuu
                        <br /><br /><span className="kaapeli">kaapeli</span>: niin kuin hamsteri
                        <br /><br /><span className="sightsee">Tipa</span>: Niin no toiki on mielenkiintoinen!
                        <br /><br /><span className="mariaf">Maria F</span>: mulle on kans mielenkiintoinen tuo hamsteri-ajatus, voisko sitä vielä syventää
                        <br /><br /><span className="eero">eero</span>: Hamsteripraktiikka? Oravanpyöräpraktiikka?
                        <br /><br /><span className="mariaf">Maria F</span>: no just. sä oot jo miettiny. ihana tehdä teidän kanssa hommia.
                        <br /><br /><span className="sightsee">Tipa</span>: Niin on....
                        <br /><br /><span className="kaapeli">kaapeli</span>: hei noi olis kyl hyvät nimet
                        <br /><br /><span className="eero">eero</span>: Esiinnyitte tosi hyvin!
                        <br /><br /><span className="sightsee">Tipa</span>: Oli kyllä tosi kuohkeeta esiintymistä
                        <br /><br /><span className="mariaf">Maria F</span>: kiva kuulla
                        <br /><br /><span className="kaapeli">kaapeli</span>: Niin mustakin. jotenkin tästä keskustelusta syntyi kyl nyt jotain spessuu.
                        </p>
                    </div>
                </div>
                <ModalButton modalId="kuohkee-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="kuohkee-modal" closable>
                    <p>DUMPLINGS AND TOUCH ja KUOHKEE ovat lopputulemia kuvittelupraktiikasta.
                    Kuvittelupraktiikka toteutettiin viidentoista minuutin kestoisina chat-keskusteluina, joihin saavuttiin erilaisilla nimimerkeillä omilta tietokoneilta käsin. Molemmissa teksteissä <b>Sanni</b>, <b>Ella-Noora</b>, <b>Elias</b> ja <b>Anne</b> kuvittelivat olevansa yhteisen praktiikan tai esityksen harjoituksissa. He leikkivät ajatuksella, että kaikki tietävät mitä ovat tekemässä.
</p>


                    <p>Kuvittelupraktiikka pohjautuu Annen vetämään harjoitteeseen, jossa osallistujat alkoivat mitään sopimatta harjoittamaan yhteistä kuviteltua esitystä. Verkkojulkaisua varten he halusivat nähdä, miten samaa praktiikka voisi soveltaa etänä chat-foorumilla.</p>
                </Modal>
            </div>
            <div className="poem poem-4">
                <pre><Tw>{`trrrr
trigger
triggering fragment of tr***`}</Tw></pre>
            </div>
            <div>
                <iframe id="drag-video" src="https://player.vimeo.com/video/418025590?app_id=122963" width="426" height="240" frameborder="0" allow="autoplay; fullscreen" allowfullscreen mozallowfullscreen webkitallowfullscreen title="DRAG-MEIKKITUTORIAL / From a Lady to a Drag Queen hun"></iframe>
            </div>
            <ModalButton modalId="drag-modal">
                <Inf />
            </ModalButton>
            <Modal modalId="drag-modal" closable>
                <p>
                    Video: <b>Tiia Kasurinen</b><br />
Erityiskiitos: <b>Skorpioni / Julius Konttinen</b>
                </p>
            </Modal>
            <div className="poem poem-5">
                <pre>
                    <Tw>{`confidant, camaraderie, co-operation
grrrr
meow`}</Tw>
                </pre>
            </div>
            <ModalButton modalId="poem-modal">
                <Inf />
            </ModalButton>
            <Modal modalId="poem-modal" closable>
                <p>Poem/Runo
</p>

                <p><b>Vanessa Virta</b></p>
            </Modal>
        </div>
    )
}