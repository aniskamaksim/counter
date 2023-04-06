import React, {ChangeEvent, useState} from 'react';
import {SuperButton} from "./SuperButton";
import TextField from "@mui/material/TextField";
import {useDispatch} from "react-redux";
import {minValueAC} from "../State/minValue-reducer";
import {maxValueAC} from "../State/maxValue-reducer";
import {ResetCounterAC} from "../State/counter-reduser";

type SettingsType = {
    maxValue: number;
    minValue: number;
}

export const Settings: React.FC<SettingsType> = (
    {maxValue, minValue}
) => {
    const dispatch = useDispatch();
    const [error, setError] = useState<string | null>(null)
    const errorString = "Enter correct value"
    const changeMinCounterHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newMinValue = Number(event.currentTarget.value);
        if (newMinValue > 0 && newMinValue < maxValue) {
            dispatch(minValueAC(newMinValue));
            setError(null);
        } else {
            setError(errorString);
        }
    }
    const changeMaxCounterHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(event.currentTarget.value);
        if (newMaxValue > 0 && newMaxValue > minValue) {
            dispatch(maxValueAC(newMaxValue));
            setError(null);
        } else {
            setError(errorString);
        }
    }
    const SetCounterOnClickHandler = () => {
        dispatch(ResetCounterAC(minValue));
        setError(null);
    }
    const buttonDisabled = !!error;
    return (
        <div>
            <div>
                <TextField
                    type={'number'}
                    value={minValue}
                    onChange={changeMinCounterHandler}
                    size={'small'}
                    variant={'standard'}
                />
            </div>
            <div>
                {error}
            </div>
            <div>
                <TextField
                    type={'number'}
                    value={maxValue}
                    onChange={changeMaxCounterHandler}
                    size={'small'}
                    variant={'standard'}
                />
            </div>
            <SuperButton
                name={'Set Values'}
                classVariant={'outlined'}
                callback={SetCounterOnClickHandler}
                isDisabled={buttonDisabled}
            />
        </div>
    );
};