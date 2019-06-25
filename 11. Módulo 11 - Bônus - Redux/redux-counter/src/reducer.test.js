import reducer from './reducer'

test('Reducer Initial State Null', () => {
    const action = { type: 'INCREMENT', value: 10 }
    const state = reducer(undefined, action)
    expect(state).toEqual({ count: 10 })
})

test('Reducer Increment', () => {
    const initialState = { count: 0 }
    const action = { type: 'INCREMENT', value: 10 }
    const state = reducer(initialState, action)
    expect(state).toEqual({ count: 10 })
})

test('Reducer Decrement', () => {
    const initialState = { count: 10 }
    const action = { type: 'DECREMENT', value: 10 }
    const state = reducer(initialState, action)
    expect(state).toEqual({ count: 0 })
})