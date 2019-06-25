export const increment = value => {
    return {
        type: 'INCREMENT',
        value
    }
}

export const decrement = value => {
    return {
        type: 'DECREMENT',
        value
    }
}