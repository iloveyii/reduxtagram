// a reduces takes two things
// 1. the action (info about what happened
// 2. copy of the current state

function postComment(state = [], action) {
    return [
        ...state, {
            user: action.author,
            text: action.comment
        }
    ];
}

function addComment(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            return {
                ...state,
                [action.postId]: postComment(state[action.postId], action)
            }
        default:
            return state;
    }
}

export default addComment;