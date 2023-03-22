/* 
 *  Copyright (c) 2023 Santtu Räisänen github.com/santerir
 *  
 *  This work is licensed under the terms of the MIT license.  
 *  For a copy, see <https://opensource.org/licenses/MIT>.
 */

import React from 'react'


let useTimeout = (callback, delay) => {
    const savedCallback = React.useRef();

    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
};

export default useTimeout;