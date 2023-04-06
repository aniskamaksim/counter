import {initialminState} from "./minValue-reducer"

export type AddCounterAT = ReturnType<typeof AddCounterAC>
export type ResetCounterAT = ReturnType<typeof ResetCounterAC>

export type CounterAT = AddCounterAT | ResetCounterAT

export const CounterReducer = (counter = initialminState, action: CounterAT): number => {
    switch (action.type) {
        case "ADD-COUNTER":
            return counter === action.payload.maxValue ? action.payload.maxValue : counter + 1;
        case "RESET-COUNTER":
            return action.payload.minValue;
        default: return counter;
    }
}

export const AddCounterAC = (maxValue: number) => {
    return {
        type: "ADD-COUNTER",
        payload: {
            maxValue
        }
    }as const
}
export const ResetCounterAC = (minValue: number) => {
    return {
        type: "RESET-COUNTER",
        payload: {
            minValue
        }
    }as const
}