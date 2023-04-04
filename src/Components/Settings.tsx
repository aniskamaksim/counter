import React, {ChangeEvent, useState} from 'react';
import {SuperButton} from "./SuperButton";
import TextField from "@mui/material/TextField";

type SettingsType = {
    changeMaxValue: (text: number) => void;
    changeMinValue: (text: number) => void;
    resetCounter: () => void;
    maxvalue: number;
    minvalue: number;
    setLocalStorage: () => void;
}

export const Settings: React.FC<SettingsType> = (
    {maxvalue, minvalue, changeMaxValue, changeMinValue, resetCounter, setLocalStorage}
) => {

    const [error, setError] = useState<string | null>(null)
    const errorString = "Enter correct value"
    const changeMinEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        minvalue = Number(event.currentTarget.value)
        if (minvalue > 0 && minvalue < maxvalue) {
            changeMinValue(minvalue);
            setError(null)
        } else {
            setError(errorString);
        }
    }
    const changeMaxEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        maxvalue = Number(event.currentTarget.value)
        if (maxvalue > 0 && maxvalue > minvalue) {
            changeMaxValue(maxvalue)
            setError(null)
        } else {
            setError(errorString);
        }
    }
    const onClickHandler = () => {
        setLocalStorage();
        resetCounter();
        setError(null)
    }

    const buttonDisabled = !!error
    return (
        <div>
            <div>
                <TextField
                    type={'number'}
                    value={minvalue}
                    onChange={changeMinEventHandler}
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
                    value={maxvalue}
                    onChange={changeMaxEventHandler}
                    size={'small'}
                    variant={'standard'}
                />
            </div>
            <SuperButton
                name={'Set Values'}
                classVariant={'outlined'}
                callback={onClickHandler}
                isDisabled={buttonDisabled}
            />
        </div>
    );
};