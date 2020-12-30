import { PageType } from '../interfaces/page.interfaces';
import actionTypes from './actionTypes';
import actionCreators from './actionCreators';

export interface AppState {
    greetFirstAnswer: PageType | undefined;
    greetSecondAnswer: PageType | undefined;
    prayerAnswer: PageType | undefined;
    showConfirmFirstQ: boolean;
}

type Actions = 
    & ReturnType<typeof actionCreators.setGreetFirstAnswer>
    & ReturnType<typeof actionCreators.setGreetSecondAnswer>
    & ReturnType<typeof actionCreators.setPrayerAnswer>
    & ReturnType<typeof actionCreators.setShowConfirmFirstQ>;

const initialState: AppState = {
    greetFirstAnswer: undefined,
    greetSecondAnswer: undefined,
    prayerAnswer: undefined,
    showConfirmFirstQ: false
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
        case actionTypes.SET_SHOW_CONFIRM_FIRST_Q:
            return {
                ...state,
                showConfirmFirstQ: action.show
            };
    }
    return state;
}