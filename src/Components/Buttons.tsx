import React from 'react';
import {SuperButton} from "./SuperButton";
import {useDispatch} from "react-redux";
import {AddCounterAC, ResetCounterAC} from "../State/counter-reduser";

type ButtonsType = {
    counter: number
    maxValue: number
    minValue: number
}

export const Buttons: React.FC<ButtonsType> = (
    {maxValue, minValue, counter}
) => {
    const dispatch = useDispatch();
    const variantChangerAdd = counter > 0 ? "outlined" : "contained";
    const variantChangerReset = counter === maxValue ? "contained" : "outlined";
    const addDisabled = counter === maxValue;
    const resetDisabled = counter === minValue;
    return (
        <div className={'buttons'}>
            <SuperButton
                name={'add'}
                callback={() => dispatch(AddCounterAC(maxValue))}
                classVariant={variantChangerAdd}
                isDisabled={addDisabled}/>
            <SuperButton
                name={'reset'}
                callback={() => dispatch(ResetCounterAC(minValue))}
                classVariant={variantChangerReset}
                isDisabled={resetDisabled}/>
        </div>
    );
};
