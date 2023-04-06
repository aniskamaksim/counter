import React from 'react';

type ScreenType = {
    counter: number
    maxValue: number;
}
export const Screen: React.FC<ScreenType> = (
    {counter, maxValue}
) => {
    const counterLimit = counter === maxValue;
    return (
        <div className={'screen'}>
            <div className={counterLimit ? 'counter_red' : 'counter'}>{counter}</div>
        </div>
    );
};