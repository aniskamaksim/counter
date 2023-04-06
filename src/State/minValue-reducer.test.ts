import {minValueAC, minValueReducer} from "./minValue-reducer";

test('minValue should be correct changed', () => {

    const startState = 0;
    const action = minValueAC(7);
    const endState = minValueReducer(startState, action)

    expect(endState).toEqual(7);
});