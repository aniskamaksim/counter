import {maxValueAC, maxValueReducer} from "./maxValue-reducer";

test('maxValue should be correct changed', () => {

    const startState = 0;
    const action = maxValueAC(70);
    const endState = maxValueReducer(startState, action)

    expect(endState).toEqual(70);
});