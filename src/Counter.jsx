import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div style={{ border: '2px solid gray' }}>
            <h3>counter:{count}</h3>
            <button onClick={handleClick}>add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    );
};

export default Counter;