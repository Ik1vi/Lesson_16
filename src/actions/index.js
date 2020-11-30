let nextComment = localStorage.maxId || 0;

export const addComment = (textName, textComment, datetime) => {
    return {
        type: 'ADD_COMMENT',
        id: ++nextComment,
        author: textName,
        text: textComment,
        datetime: datetime
    }
}

export const removeComment = (id) => {
    return {
        type: 'REMOVE_COMMENT',
        id: id
    }
}
