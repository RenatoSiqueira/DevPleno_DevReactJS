import { increment, decrement } from './actions'

test('Action: Increment', () => {
    let incr = increment(10)
    expect(incr).toEqual({
        type: 'INCREMENT',
        value: 10
    })
})

test('Action: Decrement', () => {
    let decr = decrement(20)
    expect(decr).toEqual({
        type: 'DECREMENT',
        value: 20
    })
})