import { PageType } from "../interfaces/page.interfaces";

const ROOT_LOCALE = '/:locale';
const ROOT_EN = '/en';
const ROOT_FOUR_LAWS = '/4laws';

const FOUR_LAWS_MAIN = ROOT_FOUR_LAWS + '/main';
const FOUR_LAWS_MAIN_TITLE = FOUR_LAWS_MAIN + '/0';
const FOUR_LAWS_MAIN_WRAPUP = FOUR_LAWS_MAIN + '/1';

// law 1
const FOUR_LAWS_ONE = ROOT_FOUR_LAWS + '/one';
const FOUR_LAWS_ONE_TITLE = FOUR_LAWS_ONE + '/0';
const FOUR_LAWS_ONE_CONTENT_1 = FOUR_LAWS_ONE + '/1';
const FOUR_LAWS_ONE_CONTENT_2 = FOUR_LAWS_ONE + '/2';
const FOUR_LAWS_ONE_WRAPUP = FOUR_LAWS_ONE + '/3';

// law 2
const FOUR_LAWS_TWO = ROOT_FOUR_LAWS + '/two';
const FOUR_LAWS_TWO_TITLE = FOUR_LAWS_TWO + '/0';
const FOUR_LAWS_TWO_CONTENT_1 = FOUR_LAWS_TWO + '/1';
const FOUR_LAWS_TWO_CONTENT_2 = FOUR_LAWS_TWO + '/2';
const FOUR_LAWS_TWO_CONTENT_3 = FOUR_LAWS_TWO + '/3';
const FOUR_LAWS_TWO_CONTENT_4 = FOUR_LAWS_TWO + '/4';
const FOUR_LAWS_TWO_WRAPUP = FOUR_LAWS_TWO + '/5';

// law 3
const FOUR_LAWS_THREE = ROOT_FOUR_LAWS + '/three';
const FOUR_LAWS_THREE_TITLE = FOUR_LAWS_THREE + '/0';
const FOUR_LAWS_THREE_CONTENT_1 = FOUR_LAWS_THREE + '/1';
const FOUR_LAWS_THREE_CONTENT_2 = FOUR_LAWS_THREE + '/2';
const FOUR_LAWS_THREE_CONTENT_3 = FOUR_LAWS_THREE + '/3';
const FOUR_LAWS_THREE_CONTENT_4 = FOUR_LAWS_THREE + '/4';
const FOUR_LAWS_THREE_WRAPUP = FOUR_LAWS_THREE + '/5';

// law 4
const FOUR_LAWS_FOUR = ROOT_FOUR_LAWS + '/four';
const FOUR_LAWS_FOUR_TITLE = FOUR_LAWS_FOUR + '/0';
const FOUR_LAWS_FOUR_CONTENT_1 = FOUR_LAWS_FOUR + '/1';
const FOUR_LAWS_FOUR_CONTENT_2 = FOUR_LAWS_FOUR + '/2';
const FOUR_LAWS_FOUR_CONTENT_3 = FOUR_LAWS_FOUR + '/3';
const FOUR_LAWS_FOUR_CONTENT_4 = FOUR_LAWS_FOUR + '/4';
const FOUR_LAWS_FOUR_CONTENT_5 = FOUR_LAWS_FOUR + '/5';

const FOUR_LAWS_FOUR_GREET = FOUR_LAWS_FOUR + '/greet';
const FOUR_LAWS_FOUR_GREET_0 = FOUR_LAWS_FOUR_GREET + '/0';
const FOUR_LAWS_FOUR_GREET_1 = FOUR_LAWS_FOUR_GREET + '/1';
const FOUR_LAWS_FOUR_GREET_2 = FOUR_LAWS_FOUR_GREET + '/2';
const FOUR_LAWS_FOUR_GREET_3 = FOUR_LAWS_FOUR_GREET + '/3';
const FOUR_LAWS_FOUR_GREET_4 = FOUR_LAWS_FOUR_GREET + '/4';

const FOUR_LAWS_FOUR_WRAPUP = FOUR_LAWS_FOUR + '/6';
const FOUR_LAWS_FOUR_WRAPUP_PREP = FOUR_LAWS_FOUR + '/7';

// prayer
const FOUR_LAWS_PRAYER = ROOT_FOUR_LAWS + '/prayer';
const FOUR_LAWS_PRAYER_1 = FOUR_LAWS_PRAYER + '/1';
const FOUR_LAWS_PRAYER_2 = FOUR_LAWS_PRAYER + '/2';
const FOUR_LAWS_PRAYER_3 = FOUR_LAWS_PRAYER + '/3';
const FOUR_LAWS_PRAYER_4 = FOUR_LAWS_PRAYER + '/4';

// confirm
const FOUR_LAWS_CONFIRM = ROOT_FOUR_LAWS + '/confirm';
const FOUR_LAWS_CONFIRM_MAIN = FOUR_LAWS_CONFIRM + '/0';

const FOUR_LAWS_CONFIRM_FIRST = FOUR_LAWS_CONFIRM + '/first';
const FOUR_LAWS_CONFIRM_FIRST_1 = FOUR_LAWS_CONFIRM_FIRST + '/1';
const FOUR_LAWS_CONFIRM_FIRST_2 = FOUR_LAWS_CONFIRM_FIRST + '/2';

const FOUR_LAWS_CONFIRM_FIRST_Q = FOUR_LAWS_CONFIRM_FIRST + '/question';
const FOUR_LAWS_CONFIRM_FIRST_Q_1 = FOUR_LAWS_CONFIRM_FIRST_Q + '/1';
const FOUR_LAWS_CONFIRM_FIRST_Q_2 = FOUR_LAWS_CONFIRM_FIRST_Q + '/2';
const FOUR_LAWS_CONFIRM_FIRST_Q_3 = FOUR_LAWS_CONFIRM_FIRST_Q + '/3';
const FOUR_LAWS_CONFIRM_FIRST_Q_4 = FOUR_LAWS_CONFIRM_FIRST_Q + '/4';
const FOUR_LAWS_CONFIRM_FIRST_Q_5 = FOUR_LAWS_CONFIRM_FIRST_Q + '/5';
const FOUR_LAWS_CONFIRM_FIRST_Q_6 = FOUR_LAWS_CONFIRM_FIRST_Q + '/6';

const FOUR_LAWS_CONFIRM_SECOND = FOUR_LAWS_CONFIRM + '/second';
const FOUR_LAWS_CONFIRM_SECOND_1 = FOUR_LAWS_CONFIRM_SECOND + '/1';

const FOUR_LAWS_CONFIRM_SECOND_Q = FOUR_LAWS_CONFIRM_SECOND + '/question';
const FOUR_LAWS_CONFIRM_SECOND_Q_1 = FOUR_LAWS_CONFIRM_SECOND_Q + '/1';
const FOUR_LAWS_CONFIRM_SECOND_Q_2 = FOUR_LAWS_CONFIRM_SECOND_Q + '/2';
const FOUR_LAWS_CONFIRM_SECOND_Q_3 = FOUR_LAWS_CONFIRM_SECOND_Q + '/3';
const FOUR_LAWS_CONFIRM_SECOND_Q_4 = FOUR_LAWS_CONFIRM_SECOND_Q + '/4';
const FOUR_LAWS_CONFIRM_SECOND_Q_5 = FOUR_LAWS_CONFIRM_SECOND_Q + '/5';

const FOUR_LAWS_CONFIRM_THIRD = FOUR_LAWS_CONFIRM + '/third';
const FOUR_LAWS_CONFIRM_THIRD_1 = FOUR_LAWS_CONFIRM_THIRD + '/1';
const FOUR_LAWS_CONFIRM_THIRD_2 = FOUR_LAWS_CONFIRM_THIRD + '/2';

const FOUR_LAWS_CONFIRM_THIRD_Q = FOUR_LAWS_CONFIRM_THIRD + '/question';
const FOUR_LAWS_CONFIRM_THIRD_Q_1 = FOUR_LAWS_CONFIRM_THIRD_Q + '/1';
const FOUR_LAWS_CONFIRM_THIRD_Q_2 = FOUR_LAWS_CONFIRM_THIRD_Q + '/2';

const FOUR_LAWS_FEELINGS = ROOT_FOUR_LAWS + '/feelings';
const FOUR_LAWS_FEELINGS_1 = FOUR_LAWS_FEELINGS + '/1';
const FOUR_LAWS_FEELINGS_2 = FOUR_LAWS_FEELINGS + '/2';
const FOUR_LAWS_FEELINGS_3 = FOUR_LAWS_FEELINGS + '/3';

// grace
const FOUR_LAWS_GRACE = ROOT_FOUR_LAWS + '/grace';
const FOUR_LAWS_GRACE_TITLE = FOUR_LAWS_GRACE + '/0';
const FOUR_LAWS_GRACE_1 = FOUR_LAWS_GRACE + '/1';
const FOUR_LAWS_GRACE_2 = FOUR_LAWS_GRACE + '/2';
const FOUR_LAWS_GRACE_3 = FOUR_LAWS_GRACE + '/3';
const FOUR_LAWS_GRACE_4 = FOUR_LAWS_GRACE + '/4';
const FOUR_LAWS_GRACE_5 = FOUR_LAWS_GRACE + '/5';
const FOUR_LAWS_GRACE_WRAPUP_1 = FOUR_LAWS_GRACE + '/6';
const FOUR_LAWS_GRACE_WRAPUP_2 = FOUR_LAWS_GRACE + '/7';
const FOUR_LAWS_GRACE_WRAPUP_3 = FOUR_LAWS_GRACE + '/8';

// suggest
const FOUR_LAWS_SUGGEST = ROOT_FOUR_LAWS + '/suggest';
const FOUR_LAWS_SUGGEST_TITLE = FOUR_LAWS_SUGGEST + '/0';
const FOUR_LAWS_SUGGEST_1 = FOUR_LAWS_SUGGEST + '/1';
const FOUR_LAWS_SUGGEST_2 = FOUR_LAWS_SUGGEST + '/2';
const FOUR_LAWS_SUGGEST_3 = FOUR_LAWS_SUGGEST + '/3';
const FOUR_LAWS_SUGGEST_4 = FOUR_LAWS_SUGGEST + '/4';
const FOUR_LAWS_SUGGEST_5 = FOUR_LAWS_SUGGEST + '/5';
const FOUR_LAWS_SUGGEST_6 = FOUR_LAWS_SUGGEST + '/6';

// wrapup
const FOUR_LAWS_WRAPUP = ROOT_FOUR_LAWS + '/wrapup';
const FOUR_LAWS_WRAPUP_1 = FOUR_LAWS_WRAPUP + '/1';
const FOUR_LAWS_WRAPUP_2 = FOUR_LAWS_WRAPUP + '/2';
const FOUR_LAWS_WRAPUP_3 = FOUR_LAWS_WRAPUP + '/3';

export const RootPaths = {
    ROOT_LOCALE: ROOT_LOCALE,
    ROOT_EN: ROOT_EN,
    ROOT_FOUR_LAWS: ROOT_FOUR_LAWS
};

export const FourLawsPaths = {
  MAIN: FOUR_LAWS_MAIN,
  MAIN_TITLE: FOUR_LAWS_MAIN_TITLE,
  MAIN_WRAPUP: FOUR_LAWS_MAIN_WRAPUP,

  LAW_ONE: FOUR_LAWS_ONE,
  LAW_ONE_TITLE: FOUR_LAWS_ONE_TITLE,
  LAW_ONE_1: FOUR_LAWS_ONE_CONTENT_1,
  LAW_ONE_2: FOUR_LAWS_ONE_CONTENT_2,
  LAW_ONE_WRAPUP: FOUR_LAWS_ONE_WRAPUP,

  LAW_TWO: FOUR_LAWS_TWO,
  LAW_TWO_TITLE: FOUR_LAWS_TWO_TITLE,
  LAW_TWO_1: FOUR_LAWS_TWO_CONTENT_1,
  LAW_TWO_2: FOUR_LAWS_TWO_CONTENT_2,
  LAW_TWO_3: FOUR_LAWS_TWO_CONTENT_3,
  LAW_TWO_4: FOUR_LAWS_TWO_CONTENT_4,
  LAW_TWO_WRAPUP: FOUR_LAWS_TWO_WRAPUP,

  LAW_THREE: FOUR_LAWS_THREE,
  LAW_THREE_TITLE: FOUR_LAWS_THREE_TITLE,
  LAW_THREE_1: FOUR_LAWS_THREE_CONTENT_1,
  LAW_THREE_2: FOUR_LAWS_THREE_CONTENT_2,
  LAW_THREE_3: FOUR_LAWS_THREE_CONTENT_3,
  LAW_THREE_4: FOUR_LAWS_THREE_CONTENT_4,
  LAW_THREE_WRAPUP: FOUR_LAWS_THREE_WRAPUP,

  LAW_FOUR: FOUR_LAWS_FOUR,
  LAW_FOUR_TITLE: FOUR_LAWS_FOUR_TITLE,
  LAW_FOUR_1: FOUR_LAWS_FOUR_CONTENT_1,
  LAW_FOUR_2: FOUR_LAWS_FOUR_CONTENT_2,
  LAW_FOUR_3: FOUR_LAWS_FOUR_CONTENT_3,
  LAW_FOUR_4: FOUR_LAWS_FOUR_CONTENT_4,
  LAW_FOUR_5: FOUR_LAWS_FOUR_CONTENT_5,
  LAW_FOUR_GREET: FOUR_LAWS_FOUR_GREET,
  LAW_FOUR_GREET_0: FOUR_LAWS_FOUR_GREET_0,
  LAW_FOUR_GREET_1: FOUR_LAWS_FOUR_GREET_1,
  LAW_FOUR_GREET_2: FOUR_LAWS_FOUR_GREET_2,
  LAW_FOUR_GREET_3: FOUR_LAWS_FOUR_GREET_3,
  LAW_FOUR_GREET_4: FOUR_LAWS_FOUR_GREET_4,
  LAW_FOUR_WRAPUP: FOUR_LAWS_FOUR_WRAPUP,
  LAW_FOUR_WRAPUP_PREP: FOUR_LAWS_FOUR_WRAPUP_PREP,
  
  PRAYER: FOUR_LAWS_PRAYER,
  PRAYER_1: FOUR_LAWS_PRAYER_1,
  PRAYER_2: FOUR_LAWS_PRAYER_2,
  PRAYER_3: FOUR_LAWS_PRAYER_3,
  PRAYER_4: FOUR_LAWS_PRAYER_4,

  CONFIRM: FOUR_LAWS_CONFIRM,
  CONFIRM_MAIN: FOUR_LAWS_CONFIRM_MAIN,

  CONFIRM_FIRST: FOUR_LAWS_CONFIRM_FIRST,
  CONFIRM_FIRST_1: FOUR_LAWS_CONFIRM_FIRST_1,
  CONFIRM_FIRST_2: FOUR_LAWS_CONFIRM_FIRST_2,
  CONFIRM_FIRST_Q: FOUR_LAWS_CONFIRM_FIRST_Q,
  CONFIRM_FIRST_Q_1: FOUR_LAWS_CONFIRM_FIRST_Q_1,
  CONFIRM_FIRST_Q_2: FOUR_LAWS_CONFIRM_FIRST_Q_2,
  CONFIRM_FIRST_Q_3: FOUR_LAWS_CONFIRM_FIRST_Q_3,
  CONFIRM_FIRST_Q_4: FOUR_LAWS_CONFIRM_FIRST_Q_4,
  CONFIRM_FIRST_Q_5: FOUR_LAWS_CONFIRM_FIRST_Q_5,
  CONFIRM_FIRST_Q_6: FOUR_LAWS_CONFIRM_FIRST_Q_6,

  CONFIRM_SECOND: FOUR_LAWS_CONFIRM_SECOND,
  CONFIRM_SECOND_1: FOUR_LAWS_CONFIRM_SECOND_1,
  CONFIRM_SECOND_Q: FOUR_LAWS_CONFIRM_SECOND_Q,
  CONFIRM_SECOND_Q_1: FOUR_LAWS_CONFIRM_SECOND_Q_1,
  CONFIRM_SECOND_Q_2: FOUR_LAWS_CONFIRM_SECOND_Q_2,
  CONFIRM_SECOND_Q_3: FOUR_LAWS_CONFIRM_SECOND_Q_3,
  CONFIRM_SECOND_Q_4: FOUR_LAWS_CONFIRM_SECOND_Q_4,
  CONFIRM_SECOND_Q_5: FOUR_LAWS_CONFIRM_SECOND_Q_5,

  CONFIRM_THIRD: FOUR_LAWS_CONFIRM_THIRD,
  CONFIRM_THIRD_1: FOUR_LAWS_CONFIRM_THIRD_1,
  CONFIRM_THIRD_2: FOUR_LAWS_CONFIRM_THIRD_2,

  CONFIRM_THIRD_Q: FOUR_LAWS_CONFIRM_THIRD_Q,
  CONFIRM_THIRD_Q_1: FOUR_LAWS_CONFIRM_THIRD_Q_1,
  CONFIRM_THIRD_Q_2: FOUR_LAWS_CONFIRM_THIRD_Q_2,

  FEELINGS: FOUR_LAWS_FEELINGS,
  FEELINGS_1: FOUR_LAWS_FEELINGS_1,
  FEELINGS_2: FOUR_LAWS_FEELINGS_2,
  FEELINGS_3: FOUR_LAWS_FEELINGS_3,

  GRACE: FOUR_LAWS_GRACE,
  GRACE_TITLE: FOUR_LAWS_GRACE_TITLE,
  GRACE_1: FOUR_LAWS_GRACE_1,
  GRACE_2: FOUR_LAWS_GRACE_2,
  GRACE_3: FOUR_LAWS_GRACE_3,
  GRACE_4: FOUR_LAWS_GRACE_4,
  GRACE_5: FOUR_LAWS_GRACE_5,
  GRACE_WRAPUP_1: FOUR_LAWS_GRACE_WRAPUP_1,
  GRACE_WRAPUP_2: FOUR_LAWS_GRACE_WRAPUP_2,
  GRACE_WRAPUP_3: FOUR_LAWS_GRACE_WRAPUP_3,

  SUGGEST: FOUR_LAWS_SUGGEST,
  SUGGEST_TITLE: FOUR_LAWS_SUGGEST_TITLE,
  SUGGEST_1: FOUR_LAWS_SUGGEST_1,
  SUGGEST_2: FOUR_LAWS_SUGGEST_2,
  SUGGEST_3: FOUR_LAWS_SUGGEST_3,
  SUGGEST_4: FOUR_LAWS_SUGGEST_4,
  SUGGEST_5: FOUR_LAWS_SUGGEST_5,
  SUGGEST_6: FOUR_LAWS_SUGGEST_6,

  WRAPUP: FOUR_LAWS_WRAPUP,
  WRAPUP_1: FOUR_LAWS_WRAPUP_1,
  WRAPUP_2: FOUR_LAWS_WRAPUP_2,
  WRAPUP_3: FOUR_LAWS_WRAPUP_3
};