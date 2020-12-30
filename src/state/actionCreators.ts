import actionTypes from './actionTypes';
import { PageType } from "../interfaces/page.interfaces";

function setGreetFirstAnswer(pageType: PageType | undefined) {
    return {
        type: actionTypes.SET_GREET_FIRST_ANSWER,
        pageType
    } as const;
}

function setGreetSecondAnswer(pageType: PageType | undefined) {
    return {
        type: actionTypes.SET_GREET_SECOND_ANSWER,
        pageType
    } as const;
}

function setPrayerAnswer(pageType: PageType | undefined) {
    return {
        type: actionTypes.SET_PRAYER_ANSWER,
        pageType
    } as const;
}

function setShowConfirmFirstQ(show: boolean) {
    return {
        type: actionTypes.SET_SHOW_CONFIRM_FIRST_Q,
        show
    } as const;
}

const actionCreators = {
    setGreetFirstAnswer,
    setGreetSecondAnswer,
    setPrayerAnswer,
    setShowConfirmFirstQ
}

export default actionCreators;