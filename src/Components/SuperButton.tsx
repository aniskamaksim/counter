import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import Button from "@mui/material/Button";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>
export type SuperButtonType = DefaultButtonPropsType & {
    name: string
    callback: () => void
    classVariant: "outlined" | "contained" | "text" | undefined
    isDisabled?: boolean
}

export const SuperButton: React.FC<SuperButtonType> = (
    {name, callback, classVariant, isDisabled, ...props}
) => {
    const callbackHandler = () => {
        callback()
    }

    return (
        <div>
            <Button
                onClick={callbackHandler}
                variant={classVariant}
                size="large"
                disabled={isDisabled}>
                {name}
            </Button>
        </div>
    );
};
