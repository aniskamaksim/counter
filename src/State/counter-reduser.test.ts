import {AddCounterAC, CounterReducer, ResetCounterAC} from "./counter-reduser";

test('counter should increment +1 or set as maxValue', () => {

    const startState = 0;
    const action = AddCounterAC(8);
    const endState = CounterReducer(startState, action)

    expect(endState).toEqual(1);
});

test('counter should be reseted on minValue', () => {

    const startState = 8;
    const action = ResetCounterAC(0);
    const endState = CounterReducer(startState, action)

    expect(endState).toEqual(0);
});