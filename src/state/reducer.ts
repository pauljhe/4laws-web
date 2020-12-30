import { ConfirmFirstResponseType, PageType } from '../interfaces/page.interfaces';
import actionTypes from './actionTypes';
import actionCreators from './actionCreators';

export interface AppState {
    greetFirstAnswer: PageType | undefined;
    greetSecondAnswer: PageType | undefined;
    prayerAnswer: PageType | undefined;
    confirmFirstResponse: ConfirmFirstResponseType | undefined;
}

type Actions = 
    & ReturnType<typeof actionCreators.setGreetFirstAnswer>
    & ReturnType<typeof actionCreators.setGreetSecondAnswer>
    & ReturnType<typeof actionCreators.setPrayerAnswer>
    & ReturnType<typeof actionCreators.setConfirmFirstResponseType>;

const initialState: AppState = {
    greetFirstAnswer: undefined,
    greetSecondAnswer: undefined,
    prayerAnswer: undefined,
    confirmFirstResponse: undefined
};

export function appReducer(
    state: AppState = initialState,
    action: Actions
) {
    console.log(action);
    switch(action.type) {
        case actionTypes.SET_GREET_FIRST_ANSWER:
            return {
                ...state,
                greetFirstAnswer: action.pageType
            };
        case actionTypes.SET_GREET_SECOND_ANSWER:
            return {
                ...state,
                greetSecondAnswer: action.pageType
            };
        case actionTypes.SET_PRAYER_ANSWER:
            return {
                ...state,
                prayerAnswer: action.pageType
            };
        case actionTypes.SET_CONFIRM_FIRST_RESPONSE_TYPE:
            return {
                ...state,
                confirmFirstResponse: action.confirmFirstResponseType
            };
    }
    return state;
}