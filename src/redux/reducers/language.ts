import * as types from '../constants/language';

var initialState = {
    language: 'vi'
};

var languageReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case types.CHANGE_LANGUAGE: {
            return { language: action.language };
        }
        default:
            return state;
    }
};

export default languageReducer;