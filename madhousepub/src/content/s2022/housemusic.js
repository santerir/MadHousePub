import React, { useRef, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

import { Modal } from '../../components/modal'
import ModalButton from '../../components/modal-button'

import { LanguageSelector, LanguageContent } from '../../components/language-selector'

import { Inf, Hole9 } from '../../components/svgs'

export const Housemusic = () => {

    const LANGS = ["FI", "EN"];

    const [lang, setLang] = useState("FI")

    const Intro = useRef(null);
    const AHouseMusic = useRef(null);
    const FreeToDoWhatever = useRef(null);

    const OPTS = {
        behaviour: 'smooth',
        block: 'start'
    }

    return (
        <div className="housemusic">
            <div className="title">
                <h1>A HOUSE MUSIC</h1>
                <h5>Roy Boswell</h5>
                <ModalButton modalId="info-modal">
                    <Inf />
                </ModalButton>
                <Modal modalId="info-modal" closable>

                    <LanguageSelector languages={LANGS} setLanguage={setLang} contentID="l-content" initial="FI"></LanguageSelector>

                    <div id="l-content">
                        <LanguageContent language={"EN"} selectedLanguage={lang}>
                            <p><b>A HOUSE MUSIC</b>
                                <br />
                                Roy Boswell
                            </p>

                            <p>2022<br />
                                Drawing, text, music
                            </p>

                            <p><i>A HOUSE MUSIC</i> is a drawing, a text and a music composition. Its music is mostly improvised; partly based in discussion, partly in a deconstructed written notation.</p>

                            <p>Two guitar players are given “a score” each. The first is a spoken suggestion for a free improvisation; the second comprises four short fragments of music, written as graphic / staff notation. Additional spoken instructions introduce further challenges to the way that the material may be approached. This was an exploratory first foray into improvisation for its player, a guitar student who has only played for 7 months. The instruction given to the first, more experienced player, was to use improvisation as a means of supporting the other guitarist.</p>

                            <p>When performed, the music begins to lose its composed shape. Its contours soften and blur, and it begins to suggest something else: the sound of the making of an object.</p>

                            <p><b>Roy Boswell</b> is an artist from Helsinki who works with sculpture, text and music.</p>

                        </LanguageContent>
                        <LanguageContent language={"FI"} selectedLanguage={lang}>
                            <p><b>A HOUSE MUSIC</b>
                                <br />
                                Roy Boswell
                            </p>

                            <p>2022<br />
                                Piirros, teksti, musiikki
                            </p>


                            <p>Teoksen musiikki on pääosin improvisoitua; se rakentuu osittain keskusteluun pohjautuvasta esitysohjeesta, ja osittain dekonstruoidusta nuottikirjoituksesta.</p>

                            <p>Kaksi kitaristia saavat oman, yksilöllisen “scoren”. Ensimmäinen esitysohje on puhuttu ehdotus vapaalle improvisaatiolle; toinen koostuu neljästä lyhyestä musiikin katkelmasta, jotka on kirjoitettu graafisen notaation ja nuottikirjoituksen välimuotona. Puhutut lisäohjeet tälle nuotinnetulle osalle synnyttävät uusia haasteita tavalle, jolla toinen kitaristi lähestyy materiaalia. Tässä tapauksessa kyseessä oli ensimmäinen tutkiva kokeilu improvisaatiosta sen soittajalle: kitaraoppilaalle, joka on soittanut vasta 7 kuukautta. Ensimmäiselle, kokeneemmalle soittajalle annettu ohje oli käyttää improvisaatiota toisen kitaristin tukena.</p>

                            <p>Teosta esitettäessä, musiikki alkaa menettää sävellettyä muotoaan. Sen ääriviivat pehmenevät ja sumentuvat, ja se alkaa vähitellen vihjailla jotakin muuta: esineen tekemisen ääntä.</p>

                            <p><b>Roy Boswell</b> on helsinkiläinen taiteilija, joka työskentelee kuvanveiston, tekstin ja musiikin parissa.</p>
                        </LanguageContent>
                    </div>
                </Modal>
            </div>
            <div className='palsta'>
                <div className='p-wrapper'>
                    <ReactPlayer url="https://vimeo.com/701627634" className="react-player" controls="true"
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
            <div className='palsta'>
                <div className='grid grid--3w grid--mb-3h buttons'>
                    <button className='lozenge'
                        onClick={() => { Intro.current.scrollIntoView(OPTS) }}
                    >Introduction</button>
                    <button className='lozenge'
                        onClick={() => { AHouseMusic.current.scrollIntoView(OPTS) }}
                    >A House Music</button>
                    <button className='lozenge'
                        onClick={() => { FreeToDoWhatever.current.scrollIntoView(OPTS) }}
                    >FREE TO DO WHATEVER</button>
                </div>
            </div>
            <div className='palsta' ref={Intro}>
                <h3>INTRODUCTION</h3>
                <p>I would describe my relationship to writing music as unfocused, mainly because I have no formal music theory background. I recently became interested in the possibilities of composing music again, not really through any special need to make music to listen to, but more to use (playing) music as a way of observing other things.</p>

                <p>Much of the music that I’ve made in the last two years has explored ideas of plurality, ways of being many things at once. Much of it is made up of discrete musical events happening side by side, asynchronously, but still finding ways to gel and blur together.</p>

                <p>In <i>Piano music four hands and observer in wax (2021)</i>, a pair of simple two-bar piano melodies for one player each shift in relation to one another, as the treble melody line has a rest at the end of the first bar. The simple phasing piano lines are played four-hands in the presence of a small, talismanic wax figure, placed on the music stand of the piano during performance. I was thinking about friendships and how people actively engage and carry each other through interaction, but also how moments of passivity can be supportive as well.</p>

                <p>The two piano parts (otherwise rhythmically identical except for the brief rest in the higher register) were a little exploration of friendships – how one person may need a moment longer than the other, more consideration, a break before continuing; but that the two can still exist side by side and go forward together in harmony.</p>

                <p>In this new piece for two classical guitars, I was especially interested in the relationship between improvisation and composed music, and that of the beginner player in relation to the seasoned professional. Is there a way for free improvisation to support the development of an improvisatory practice in the new musician?</p>

                <p>I invited guitarist and free improvisor Lauri Hyvärinen and my younger brother Daniel Boswell to play the piece. I wrote some short parts of guitar music for Daniel to play, which he practiced at home. In rehearsal, I asked him to begin deconstructing these parts of music in different ways: one part became an array of individual notes and chords to play at will; another contained an instruction to stop and start again if a mistake was made, and to play the two successive halves of the section with odd (that is, uneven) patterns of repetition; the third part suggested making amusical, harsh sounds; the fourth to allow for extended periods of silence in between a pair of simple two-note chords.</p>

                <p>We decided the order of these parts just prior to recording, and Daniel decided the duration for each part during the performance. Lauri’s playing was freely improvised in its entirety, save for the idea of improvisation as a support structure in the background.</p>

                <p>In addition to the video of Daniel and Lauri’s performance, this piece includes two short texts to accompany it. Intended in part as a kind of imagined sound piece, they are meant to be heard in the reader’s internal monologue.</p>
            </div>
            <div className='palsta' ref={AHouseMusic}>
                <h3>A House Music</h3>
            </div>
            <div className='palsta'>
                <img src="/img/housemusic/b1.png" />
            </div>
            <div className='palsta'>
                <p>When I imagine a house</p>
                <p>underneath the facade, there are support structures, frames that uphold without making themselves evident or apparent</p>
                <p>I think about adding colour,</p>
                <p>powdery pinks and pale blues</p>
                <p>I mix chalk with dye, I rub the surface with a shiny pebble, I apply the chalk and dye to the surface, perhaps with some wax to try to make it stick</p>
                <p>I imagine a surface that makes sense, and a surface that makes no sense, and a surface that refers to nothing,</p>
                <p>an elongated section of plastery paper, leaning at an angle, supported by... what?</p>
                <p>I imagine staircases and columns, arched doorways of some institution, a convention centre, an underground station, a convent for clergy to live in perhaps,</p>
                <p>a staircase that leads up, and then down again. An echo of that same building in deeper, darker tones</p>
            </div>
            <div className='palsta'>
                <img src="/img/housemusic/b2.png" />
            </div>
            <div className='palsta'>
                <p>I want to know how a music will sound if only partly written, one part totally free, improvised, and the other with more instruction (a score) - this second player perhaps has had less time to acquire the skill, less erudition – and the more experienced player supports them playing through their understanding of the situation of improvisation – a unique kind of ’being in it’.</p>
                <p>This is a structure too.</p>
                <p>The score is in parts, loose pages which are only given an order to be played in in the moments leading up to the performance. We talk through the material once, we record three takes. The score that the second guitarist played from is shredded, broken down and incorporated into a paper clay.</p>
                <p>I tend not to think in terms of opposites and binaries, but I notice I’m drawn to the idea of an echo or a shadow in this context - one player masks or shadows or shades or shields or shreds or buffers the other, I don’t know what that is, yet.</p>
                <p>The thought of the frame and the framework returns: this too has a framework, although for a non-idiomatic improvisation, I suppose the framework is ideally to have none... But there is still something there. Playing together, playing off what the other instrumentalist, the performance space or situation proposes – there are glues and social threads holding this together, even though the frame is weak and may collapse at any moment.</p>
                <p>We cherish the risk, the inherent danger contained in performance (free improvisation, for me, is made up of many of the same elements as performance art is - perhaps this ought to apply to more composed music too). In every moment a potential to either sound or not, to play or not, to express a something something</p>
                <p>I run my hands through the shredded paper, I knead it into the  pulped cellulose, I think about how</p>
                <p>someone said to me: ”this must be hard for you, the mental fatigue brought on by the grinding, the breaking down, the destructive forces present in the making of this clay”</p>
                <p>but all I could think was the shadow of an object,</p>
                <p>a lightness,</p>
                <p>my hands trying to control something that warps, has a life of its own, that will wait for me to look away before bending out of shape (as if to tell me it doesn’t require my active participation in its making, and that my attempts to control it are pointless),</p>
                <p>music doesn’t equal lightness,</p>
                <p>music is an impression</p>
                <p>a texture pressed into the skin,</p>
                <p>creased sheets,</p>
                <p>indentations in the surface of paper</p>
                <p>sometimes (usually) better imagined than heard</p>
                <p>the strings leave impressions in the tips of my fingers</p>
                <p>I feel the weight of it pushing a linearity, its forward motion inevitable and fixed,</p>
                <p>terrifying really,</p>
                <p>when you think about it</p>
                <p>that we have all these ideas of building in abstraction and chance, but really it’s just moving along much like anything else would,</p>
                <p>oh well</p>
                <p>never mind</p>
                <p>Free improvisation in the context of music is sometimes seen as an exercise in striving towards an emptiness, Cagean or Zen-like. Becoming attuned to something on the edge of perception, focusing in on a kind of distilled expression of sound and silence - not through thinking, but through the simple physical interaction between yourself and your instrument. Muscle memory may play a part, as perhaps does lived experience. While there’s still a thought process behind the playing, its primacy is pushed back. Perhaps it’s a way of avoiding the pressures of having to produce a composition, an accepted, coherent musical form (although all music, organised or unorganised in nature, could - should? - fundamentally be seen as coherent anyway). The mind goes blank, the music plays by itself, you’re absolved of the responsibility of making something, or at least you are free of playing by the rules of  the generally accepted role of the artist that produces an art work.</p>
            </div>
            <div className='palsta'>
                <img src="/img/housemusic/b3.png" />
            </div>
            <div className='palsta'>
                <p>As Daniel had never improvised before, I wrote some short pieces of music for him. He practiced the parts, and in our rehearsal together with Lauri, we discussed ways of breaking the components of the music down through randomisation, repetition, dynamic changes and altering of speed and tempo. This allowed Daniel to begin to introduce elements of improvisation into his playing.</p>

                <p>We spoke after the recording:</p>
            </div>
            <div className="dialogue palsta">
                <p>RB: How did playing feel today?</p>
                <p>DB: Fine I guess.</p>
                <p>RB: Do you think there’s a difference playing like this compared to playing from a written score?</p>
                <p>DB: Yeah, maybe. With the music I normally play there’s something like I’m trying to perfect it, or get it as right as I can... But with this it feels more like rehearsing, like I’m trying to find ways of doing things. Like I’m trying to work out the best way to do something... I can get into a kind of “flow-state”.</p>
                <p>RB: Can you explain that?</p>
                <p>DB: It’s very easy for me to get into a kind of focused state where things just happen. I can do it with most things.</p>
                <p>RB: You can apply that to almost anything?</p>
                <p>DB: Yeah. Like playing. I start and then before I realise, it’s already over. I can take pretty much any menial task and get into that flow-state.</p>
                <p>RB: Like snow clearing?</p>
                <p>DB: Yeah. It’s kind of easy for me.</p>
            </div>
            <div className='palsta' ref={FreeToDoWhatever}>
                <h3>FREE TO DO WHATEVER<br></br>
                    A conversation with Lauri Hyvärinen
                </h3>
            </div>
            <div className='palsta dialogue'>
                <p>(Before the recording cuts in, we’ve been talking about improvising as a means of composing...)</p>
                <p>RB: ...so I suppose with free music it seems like a lot of the time it’s just luck.</p>
                <p>LH: Yes.</p>
                <p>RB: I don’t know if it’s like that for everyone. Or maybe if you’re a highly trained classical musician, then... I guess [...] you can minimise the luck with skill, and your ability to replicate something, which I suppose is what many people train to be able to do.</p>
                <p>LH Yeah, it’s easier to narrow down what needs to happen in a specific piece of music. And you can also really fine tune details in that context more easily, I guess.</p>
                <p>RB: Yeah.</p>
                <p>LH: It’s also a bit mysterious to me... I don’t even know what I’d like [the music] to be, you know? (laughs) In a way, I’m kind of searching for... ‘that’. The thing that it should be. Trying to find what I want to do, right? I don’t have an extremely clear idea of it, so maybe that’s one thing as well. It’s a process.</p>
                <p>LH: There’s this interesting text in a series of books edited by John Zorn (Arcana, 2001–). One of them has some of Fred Frith’s ideas about improvisation and I think they’re pretty interesting. Like, “improvise something” - this, this is one of his ideas: “Improvise something, then edit it, write it down as sheet music and then learn it”. I think these kinds of things could be interesting to try. Like, break the whole thing down.</p>
                <p>RB: Fred Frith, he was in Henry Cow?</p>
                <p>LH: Yes, exactly. The famous improvising guitar player. It was just a coincidence that it was his text, but obviously he spent a lot of time working on the idea of improvised music.</p>
                <p>RB: At home, we call Henry Cow the Sock Band.</p>
                <p>LH: A what?</p>
                <p>RB: Sock Band.</p>
                <p>LH: Sock...?</p>
                <p>RB: ...Band</p>
                <p>LH: Sock Band.</p>
                <p>RB: Because the album covers have socks...</p>
                <p>LH: I see, yes.</p>
                <p>RB: How do you feel about written, poetic score? I think it frees things up for improvisation; for example if it’s just a short sentence, like “think about the butterflies”, or something.</p>
                <p>LH: Well, maybe I don’t personally find so much use for those kinds of scores, at least for myself. But I’ve played some of those pieces and I tend to think they’re quite difficult... (It’s difficult) to be respectful (of the composer), not to turn it into a... into a kind of caricature or something.</p>
                <p>RB: How about combined forms, part composed, part poetic...</p>
                <p>LH: Yeah... Well, I play in this quartet, and some of the stuff we play is kind of text-based sometimes. We’re working on this piece together with a composer at the moment, and it’s based on a phenomenon, like a natural occurrence, and the instructions are kind of text-based. In that context it works, maybe because it’s a collective process – not just the composer sending the text to us and saying “play that”, but we kind of worked on those ideas together... So maybe it works in that way. So the score kind of becomes secondary actually. It’s just a frame somehow, a reminder of something. But the process itself is different, I think. It’s process again. Maybe process is the key here, especially with improvisation.</p>
                <p>RB: I guess we don’t presume that discussion is very much part of making music, or we don’t expect to discuss it, because it’s just supposed to happen somehow. Inspiration springs forth and the composer conceives complete compositions in their head. It’s similar to this idea of the statue inside the marble, waiting to be carved out by the skilled artist. I mean, we don’t really gather around a piano anymore and listen to someone play – we have other ways of reproducing music now. I think with improvisation we can get closer to an idea of making something together – and that something that we make can be really rickety, or aimless, or without meaning, but it doesn’t matter because we did it together.</p>
                <p>LH: I think also what becomes an interesting question is “what makes it difficult?” – I mean, to record improvisation, that’s not difficult. But if I start to think about making an album of music – so I already have a preconceived idea of what it should be, or what the standard it should have should be, or something – then it becomes difficult. Because then, it’s not really improvisation anymore, it’s a composition already because there’s an idea, even if it’s vague, there’s still some kind of idea or ideal behind it... It’s always good if you have a problem in art, in general, isn’t it? Then you have to make something, you have to overcome it (laughs). So maybe it isn’t improvisation, actually, it’s kind of composition that has improvisation, or something. And the composition is just some idea.</p>
                <p>RB: Maybe it’s to do with the need to separate the two because of established hierarchies. Like, one is considered more valuable than the other? Maybe value is the wrong word - one is something that can happen straight away and the other is serious, introspective...</p>
                <p>LH: ...a systematic process or something. A controlled environment.</p>
                <p>RB: That’s an interesting thing as well, why should art come out of a controlled environment?</p>
                <p>LH: That’s true. I guess I’ve heard from many people who have turned away from improvisation – musicians who started to work more in composition – they entertain this idea that “I can get better results with composition” (laughs). But maybe that’s the thing, you know? If you want results, then maybe composition is the better method for that. Of course it depends on what kind of results you want...</p>
            </div>
            <div className='palsta'>
                <p>After the recording has been mixed and the video has been edited - after the text has been mostly completed - I return to the drawing of the house. When I started, I suppose I had some kind of thought about how things are made, built up - that perhaps some things need a foundation more than others.</p>
            </div>
            <div className='palsta'>
                <img src="/img/housemusic/b2.png" />
            </div>
            <div className='palsta'>
                <p>Listening to the recording of Lauri and Daniel playing, I begin to hear a hissing noise in there. A repetitive action like drawing, sanding, colouring in, grating, rubbing. The hissing sound on the recording implies the making of something, a powerful suggestion of tactility.</p>
                <p>I look at the drawing I made of the house. It’s more cavernous and empty than before. There appears to be more room in it now, although I’m less inclined to begin filling in the negative space.</p>
                <p>I collect the assorted loose pages of the paper scores that I made for Daniel, these messy cyanotype prints on scraps of waste paper. I think about statues inside marble, or music that is like a cloud, an amorphous mass of sound that a composer sculpts from. What kind of music might this paper contain beyond that which is printed on it?</p>
                <p>I tear the scores up as small as I can. I mix the cut up notation with a fine, powdery cellulose, adding water. I knead the mass into a papier-mâché.</p>
                <p>I spread a thin layer onto baking parchment and let it dry. The wet music is inside the wet pulp and the music changes as it dries, too: a tension builds, the music gains a rigidity, a tautness. Or perhaps what happens to wet music when it dries is that it becomes more lucid? More exact, more precise, more composed?</p>
                <p>As the paper dries, it continues to warp and bend freely. I allow it to find its own shape –</p>
                <p>the suggestion of music inside is going in new,</p>
                <p>unexpected directions, going where it will.</p>
            </div>
            <div className='palsta dialogue'>
                <p>Lauri Hyvärinen has been playing guitar for 25 years. He works in the contexts of contemporary, improvised and experimental music.</p>
                <p>Daniel Boswell started playing classical guitar in August 2021. The making of this piece was his first foray into musical improvisation.</p>
                <p>The video of Daniel and Lauri’s performance was recorded in Helsinki on March 28th, 2022. It was edited by Liisa Mudist.</p>
                <p>Special thanks to Tuomas Lehtomaa.</p>

            </div>

        </div>
    )
}