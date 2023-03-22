/* 
 *  Copyright (c) 2023 Santtu Räisänen github.com/santerir
 *  
 *  This work is licensed under the terms of the MIT license.  
 *  For a copy, see <https://opensource.org/licenses/MIT>.
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'


var _LanguageSelector = ({ languages, setLanguage, contentID, initial }) => {

    const [selected, setSelected] = useState(initial)

    var buttons = languages.map((item) => {
        return (<button aria-label={`Select language ${item}`} aria-selected={selected == item} onClick={() => { setLanguage(item); setSelected(item) }} className={selected == item ? "selected text-button" : "text-button"}>
            <h5>{item}</h5>
        </button>)
    })

    return (
        <div aria-controls={contentID} class="lang-selector">
            {buttons}
        </div>
    )

}

_LanguageSelector.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.string)
}


export const LanguageSelector = _LanguageSelector;


export const LanguageContent = ({ language, selectedLanguage, children }) => {
    if (selectedLanguage == language) {
        return (
            <div> {children} </div>
        )
    }
    else return (null);
}