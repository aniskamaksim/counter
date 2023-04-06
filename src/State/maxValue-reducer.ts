export type maxValueAT = ReturnType<typeof maxValueAC>;

const initialmaxState: number = 5;
export const maxValueReducer = (maxValue = initialmaxState, action: maxValueAT): number => {
    switch (action.type) {
        case "SET-MAXVALUE":
            return action.payload.text;
        default: return maxValue;
    }
}

export const maxValueAC = (text: number) => {
    return {
        type: "SET-MAXVALUE",
        payload: {
            text
        }
    }as const
}