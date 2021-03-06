// a reducer takes two things
// 1. the action (info about what happened)
// 2. copy of the current state

function postComment(state = [], action) {

    switch(action.type) {
        case 'ADD_COMMENT':
            return [
                ...state, {
                    user: action.author,
                    text: action.comment
                }
            ]
        case 'REMOVE_COMMENT' :
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComment(state[action.postId], action)
        }
    }

    return state;
}

export default comments;