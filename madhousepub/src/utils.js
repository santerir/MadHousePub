/* 
 *  Copyright (c) 2023 Santtu Räisänen github.com/santerir
 *  
 *  This work is licensed under the terms of the MIT license.  
 *  For a copy, see <https://opensource.org/licenses/MIT>.
 */

export function makeActionCreator(type, ...argNames) {
    return function (...args) {
        const action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}
