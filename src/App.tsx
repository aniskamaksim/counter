import React, {useEffect, useState} from 'react';
import './App.css';
import {Buttons} from "./Components/Buttons";
import {Screen} from "./Components/Screen";
import {Settings} from "./Components/Settings";

function App() {
    const [maxvalue, setMaxvalue] = useState<number>(5);
    const [minvalue, setMinvalue] = useState<number>(0);
    const [counter, setCounter] = useState<number>(0);

    /* useEffect(()=>{
         localStorage.setItem('minimum value', JSON.stringify(minvalue))
         localStorage.setItem('maximum value', JSON.stringify(maxvalue))
     }, [minvalue, maxvalue]);*/
    useEffect(() => {
        let minValueAsAString = localStorage.getItem('minimum value')
        let maxValueAsAString = localStorage.getItem('maximum value')

        if (minValueAsAString && maxValueAsAString) {
            setMinvalue(+minValueAsAString)
            setMaxvalue(+maxValueAsAString)
            setCounter(+minValueAsAString)
        }
    }, [])
    const changeMaxValue = (text: number) => {
        setMaxvalue(text);
    };
    const changeMinValue = (text: number) => {
        setMinvalue(text);
    };
    const addCounter = () => {
        counter === maxvalue ? setCounter(maxvalue) : setCounter(counter + 1)
    }
    const resetCounter = () => {
        setCounter(minvalue);
    }
    const setLocaleStorage = () => {
        localStorage.setItem('minimum value', JSON.stringify(minvalue))
        localStorage.setItem('maximum value', JSON.stringify(maxvalue))
    }

    return (
        <div className={'main-wrapper'}>
            <div className={'wrapper'}>
                <Screen
                    counter={counter}
                    maxvalue={maxvalue}
                />
                <Settings
                    maxvalue={maxvalue}
                    minvalue={minvalue}
                    changeMaxValue={changeMaxValue}
                    changeMinValue={changeMinValue}
                    resetCounter={resetCounter}
                    setLocalStorage={setLocaleStorage}
                />
                <Buttons
                    addCounter={addCounter}
                    resetCounter={resetCounter}
                    counter={counter}
                    maxvalue={maxvalue}
                    minvalue={minvalue}
                />
            </div>
        </div>
    );
}

export default App;
