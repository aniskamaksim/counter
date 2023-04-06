export type minValueAT = ReturnType<typeof minValueAC>;

export const initialminState: number = 0;
export const minValueReducer = (minValue = initialminState, action: minValueAT): number => {
    switch (action.type) {
        case "SET-MINVALUE":
            return action.payload.text;
        default: return minValue;
    }
}

export const minValueAC = (text: number) => {
    return {
        type: "SET-MINVALUE",
        payload: {
            text
        }
    }as const
}