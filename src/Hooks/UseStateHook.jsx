import { useState } from "react"


export default function UseStateHook() {

    const [stateValue, setSetStateValue] = useState(0);

    const increment = () => {
        setSetStateValue(stateValue + 1);
    };

    const decrement = () => {
        setSetStateValue(stateValue - 1);
    };

    return (
        <div className="gap-3 mx-auto my-3 w-fit">
            <h1 className="text-3xl text-cente font-bold">Use State Hook</h1>
            <br />
            <div className="flex flex-row-reverse gap-3 justify-start items-center">
                <button onClick={increment}>Increment</button>
                <p>Count: {stateValue}</p>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );

}