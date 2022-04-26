import React, { useState } from 'react'

import { LanguageContent, LanguageSelector } from '../../components/language-selector'


export const AboutPage = ({ LANGS, CONTENT }) => {

    const [lang, setLang] = useState(LANGS[1])

    return (<>
        <div s-only="mb" className="about about-mb">
            <LanguageSelector languages={LANGS} setLanguage={setLang} contentID="#lang-content" initial={LANGS[1]}></LanguageSelector>

            <div id="lang-content">
                <LanguageContent language="FI" selectedLanguage={lang}>
                    {CONTENT["FI"]}
                </LanguageContent>

                <LanguageContent language="EN" selectedLanguage={lang}>
                    {CONTENT["EN"]}
                </LanguageContent>

                <LanguageContent language="SVE" selectedLanguage={lang}>
                    {CONTENT["SVE"]}
                </LanguageContent>
            </div>

        </div>
        <div s-only="dsk" className="about">
            <div className="col col-1">
                <h5>FI</h5>
                {CONTENT["FI"]}
            </div>
            <div className="col col-2">
                <h5>EN</h5>
                {CONTENT["EN"]}
            </div>
            <div className="col col-3">
                <h5>SVE</h5>
                {CONTENT["SVE"]}
            </div>
        </div>
    </>
    )
}