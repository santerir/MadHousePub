/* 
 *  Copyright (c) 2023 Santtu Räisänen github.com/santerir
 *  
 *  This work is licensed under the terms of the MIT license.  
 *  For a copy, see <https://opensource.org/licenses/MIT>.
 */

import { makeActionCreator } from '../../utils'


const MODAL__REGISTER = 'MODAL/REGISTER'
const MODAL__OPEN = 'MODAL/OPEN'
const MODAL__CLOSE = 'MODAL/CLOSE'
const MODAL__GROUP = 'MODAL/GROUP'


export const modal__register = makeActionCreator(MODAL__REGISTER, 'id');
export const modal__open = makeActionCreator(MODAL__OPEN, 'id');
export const modal__close = makeActionCreator(MODAL__CLOSE, 'id');
export const modal__group = makeActionCreator(MODAL__GROUP, 'ids');


const create_modal_group = (ids, grps) => {
    return ids.reduce(
        (groups, item) => {
            groups[item] = groups[item] || []
            groups[item].push(...ids.filter(_ => _ !== item));
            return groups
        }, grps)
}


const modal_reducer = (state = { isOpen: {}, groups: {} }, action) => {
    switch (action.type) {
        case MODAL__REGISTER:
            return {
                ...state, isOpen: { ...state.isOpen, [action["id"]]: false }
            };
        case MODAL__CLOSE:
            return {
                ...state, isOpen: { ...state.isOpen, ...{ [action["id"]]: false } }
            };
        case MODAL__OPEN:
            const groups = state.groups[action["id"]] || []
            return {
                ...state, isOpen: { ...state.isOpen, ...groups.reduce((ret, _) => { ret[_] = false; return ret }, {}), ...{ [action["id"]]: true } }
            };
        case MODAL__GROUP:
            return {
                ...state, groups: { ...create_modal_group(action["ids"], state.groups) }
            }
        default:
            return state;
    }

}

export default {
    reducer: modal_reducer,
    r_key: "modal",
    actions: {
        modal__register: modal__register,
        modal__open: modal__open,
        modal__close: modal__close,
        modal__group: modal__group,
    }
}