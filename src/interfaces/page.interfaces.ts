export enum PageTextType {
    TITLE = 'title',
    CONTENT = 'content'
}

export enum PageType {
    ANSWER = 'answer',
    PREP = 'prep', //when listener doesn't receive Christ
    REVIEW = 'review' //when listener received Christ before
}

export enum ConfirmFirstResponseType {
    QUESTION = 'question',
    DONT_KNOW = 'dontKnow'
}

export interface IVerseProps {
    minimized?: boolean;
}