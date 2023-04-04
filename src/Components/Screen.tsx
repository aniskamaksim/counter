import React from 'react';

type ScreenType = {
    counter: number
    maxvalue: number;
}
export const Screen: React.FC<ScreenType> = (
    {counter, maxvalue}
) => {
    return (
        <div className={'screen'}>
            <div className={counter === maxvalue ? 'counter-red' : 'counter'}>{counter}</div>
        </div>
    );
};