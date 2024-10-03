import { useState } from "react";


function Count() {

    const [count, setCount] = useState(0);

    const handelerIncrement = () => {
        setCount(count + 1);
    }
    const handelerReset = () => {
        setCount(0);
    }

    return (
        <div>
            <span>{count}</span>
            <button onClick={handelerIncrement}>increment</button>
            <button onClick={handelerReset}>reset</button>
        </div>
    )
}

export default Count;