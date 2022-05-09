import React from 'react'

import { AboutPage } from '../../components/about-page';



const LANGS = [
    "FI",
    "EN",
    "SVE"
];

const CONTENT = {
    "FI": <>
        <p>
            <span className="ligature">
                Tervetuloa
            </span> <i>Mad House Helsinki
                Publicationin</i> kolmannen numeron pariin!
        </p>
        <p>
            <i>Mad House Helsinki Publication</i> on verkkoympäristössä toimiva interaktiivinen esitystaiteen tila. <i>Publication</i> rakentuu taiteilijalähtöisesti hyödyntäen mm. videon, valokuvan, piirroksen, äänen ja tekstin mahdollisuuksia. <i>Publicationin</i> kolmannessa numerossa on koettavissa muusikko, säveltäjä ja esitystaiteilija <b>Venla Ilona Blomin</b>, veistoksen, tekstin ja musiikin parissa työskentelevän taiteilijan <b>Roy Boswellin</b>, esitys- ja kuvataiteilija <b>Renen Itzhakin</b>, kuva- ja esitystaiteilija <b>Diana Soria Hernandezin</b> teokset.
        </p>
        <p>
            <i>Publicationin</i> kokijana ja katsojana olet mukana luomassa vuoropuhelua digitaalisen esitystaiteen kanssa. Sukella mukaan <i>Publicationin</i> verkkoympäristöön ja kerro meille yleisökyselyn kautta mitä ja miten sen koit.
        </p>

        <br /><br />
        <p style={{ fontSize: "0.6em" }}>
            <b>Päätoimittaja:</b>
            <br />
            Anne Naukkarinen
            <br />
            <br />

            <b>Graafinen suunnittelu:</b>
            <br />
            Kiia Beilinson
            <br />
            <br />

            <b>Ohjelmointi:</b>
            <br />
            Santeri Räisänen
            <br />
            <br />


            <b>Yleisötyö ja käännos:</b>
            <br />
            Laura Tolvanen
            <br />
            <br />
        </p>
    </>,
    EN: <>
        <p>
            <span className="ligature">
                Welcome
            </span>  to the third issue of <i>Mad House Helsinki Publication</i>!
        </p>
        <p>
            <i>Mad House Helsinki Publication</i> is an online-based interactive space for performative arts. The <i>Publication</i> is a platform for artists to explore the possibilities of multiple mediums, such as film, image, drawing, sound and text.The third issue features works by musician, composer and performance artist <b>Venla Ilona Blom</b>, artist working with sculpture, text and music <b>Roy Boswell</b>, performance and visual artist <b>Renen Itzhaki</b>, and visual and performance artist <b>Diana Soria Hernandez</b>.

        </p>
        <p>
            As a reader and viewer of the <i>Publication</i> you participate in creating dialogue within digital performative arts. Dive in to explore our digital platform and tell us what you think by participating in an audience survey here.

        </p>
        <br /><br />
        <p style={{ fontSize: "0.6em" }}>
            <b>Editor-in-chief:</b>
            <br />
            Anne Naukkarinen
            <br />
            <br />

            <b>Graphic design:</b>
            <br />
            Kiia Beilinson
            <br />
            <br />

            <b>Programming:</b>
            <br />
            Santeri Räisänen
            <br />
            <br />

            <b>Public programme and translation:</b>
            <br />
            Laura Tolvanen
            <br />
            <br />
        </p>
    </>,
    SVE: <>
        <p>
            <span className="ligature">
                Välkommen
            </span>  till den tredje utgåvan av <i>Mad House Helsinki Publication!</i>

        </p>
        <p>
            <i>Mad House Helsinki Publication</i> är ett internetbaserat interaktivt rum för scenkonst. Publication är en plattform där konstnärer kan utforska medier såsom video, fotografi, teckning och text. I den tredje utgåvan av Publication kan du ta del av konstverk skapade av musiker, kompositör och scenkonstnär <b>Venla Ilona Blom</b>, konstnär aktiv inom text- och musikbaserad konst <b>Roy Boswell</b>, scen- och bildkonstnär <b>Renen Itzhakin</b> samt bild- och scenkonstnär <b>Diana Soria Hernandezin</b>.


        </p>
        <p>
            Genom att läsa och ta del av Publication kan du medverka i skapandet av diskussion omkring digital scenkonst. Dyk in i Publications digitala värld och berätta för oss vad du upplevde via vår publikenkät.
        </p>
        <br /><br />
        <p style={{ fontSize: "0.6em" }}>
            <b>Chefredaktör:</b>
            <br />
            Anne Naukkarinen
            <br />
            <br />

            <b>Grafisk design:
            </b>
            <br />
            Kiia Beilinson
            <br />
            <br />

            <b>Programmering:
            </b>
            <br />
            Santeri Räisänen
            <br />
            <br />

            <b>Publikarbete och översättning:
            </b>
            <br />
            Laura Tolvanen
            <br />
            <br />
        </p>
    </>
}


export const AboutIII = () => {
    return (<AboutPage LANGS={LANGS} CONTENT={CONTENT}></AboutPage>)
};