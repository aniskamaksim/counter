import './App.css';
import {Buttons} from "./Components/Buttons";
import {Screen} from "./Components/Screen";
import {Settings} from "./Components/Settings";
import {useSelector} from "react-redux";
import {rootReducerType} from "./State/store";

function App() {
    const maxValue = useSelector<rootReducerType, number>((state)=>state.maxValue)
    const minValue = useSelector<rootReducerType, number>((state)=>state.minValue)
    const counter = useSelector<rootReducerType, number>((state)=>state.counter)

    return (
        <div className={'main_wrapper'}>
            <div className={'wrapper'}>
                <Screen
                    counter={counter}
                    maxValue={maxValue}
                />
                <Settings
                    maxValue={maxValue}
                    minValue={minValue}
                />
                <Buttons
                    counter={counter}
                    maxValue={maxValue}
                    minValue={minValue}
                />
            </div>
        </div>
    );
}

export default App;
