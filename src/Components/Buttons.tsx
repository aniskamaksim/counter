import React from 'react';
import {SuperButton} from "./SuperButton";

type ButtonsType = {
    addCounter: () => void
    resetCounter: () => void
    counter: number
    maxvalue: number
    minvalue: number
}

export const Buttons: React.FC<ButtonsType> = (
    {addCounter, resetCounter, maxvalue, minvalue, counter}
) => {
    const addCounterCallback = () => {
        addCounter();
    }
    const resetCounterCallback = () => {
        resetCounter();
    }
    const variantChangerAdd = counter > 0 ? "outlined" : "contained";
    const variantChangerReset = counter === maxvalue ? "contained" : "outlined";
    const addDisabled = counter === maxvalue;
    const resetDisabled = counter === minvalue;
    return (
        <div className={'buttons'}>
            <SuperButton
                name={'add'}
                callback={addCounterCallback}
                classVariant={variantChangerAdd}
                isDisabled={addDisabled}/>
            <SuperButton
                name={'reset'}
                callback={resetCounterCallback}
                classVariant={variantChangerReset}
                isDisabled={resetDisabled}/>
        </div>
    );
};
