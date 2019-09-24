const initalState = {
    count: 0
}
const counterReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + action.value }
        case 'DECREMENT':
            return { ...state, count: state.count - action.value }
        default:
            return state
    }
}

export default counterReducer