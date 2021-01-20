import actionTypes from './actionTypes';
import { ConfirmFirstResponseType, PageType } from "../interfaces/page.interfaces";

function initializeStates() {
    return {
        type: actionTypes.INITIALIZE_STATE
    } as const;
}

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

function setConfirmFirstResponseType(confirmFirstResponseType: ConfirmFirstResponseType | undefined) {
    return {
        type: actionTypes.SET_CONFIRM_FIRST_RESPONSE_TYPE,
        confirmFirstResponseType
    } as const;
}

const actionCreators = {
    initializeStates,
    setGreetFirstAnswer,
    setGreetSecondAnswer,
    setPrayerAnswer,
    setConfirmFirstResponseType
}

export default actionCreators;