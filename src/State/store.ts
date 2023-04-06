import {combineReducers, legacy_createStore as createStore} from "redux";
import {maxValueReducer} from "./maxValue-reducer";
import {minValueReducer} from "./minValue-reducer";
import {CounterReducer} from "./counter-reduser";

const rootReducer = combineReducers({
    maxValue: maxValueReducer,
    minValue: minValueReducer,
    counter: CounterReducer
});
export type rootReducerType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);

