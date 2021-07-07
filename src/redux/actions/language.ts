import * as types from '../constants/language';

export const changeLanguage = (language:string) => {
    return {
        type: types.CHANGE_LANGUAGE,
        language
    }
}
