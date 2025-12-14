'use client'

import {useState} from "react";

export default function counter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={() => increment()}>+1</button>
            <span> The counter has been incremented {count} times.</span>
        </div>
    )
}