export enum PageTextType {
    TITLE = 'title',
    // SUBTITLE = 'subtitle',
    CONTENT = 'content'
}

export enum PageType {
    KEY = 'type',
    ANSWER = 'answer',
    PREP = 'prep', //when listener doesn't receive Christ
    REVIEW = 'review'
}

export interface IVerseProps {
    minimized?: boolean;
}