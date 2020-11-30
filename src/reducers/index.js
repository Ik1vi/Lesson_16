export const comments = (state = [], action) => {
    let newComments = [];
    switch (action.type) {
        case 'ADD_COMMENT':
            newComments = [
                ...state,
                { id: action.id, author: action.author, text: action.text, datetime: action.datetime }
            ]
            localStorage.setItem('comments', JSON.stringify(newComments));
            localStorage.setItem('maxId', action.id);
            return newComments;

        case 'REMOVE_COMMENT':
            newComments = state.filter(comment => {
                return comment.id != action.id
            })
            localStorage.setItem('comments', JSON.stringify(newComments));
            return newComments;

        default:
            return state;
    }
}
