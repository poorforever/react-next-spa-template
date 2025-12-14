'use client'

import {useState} from "react";
import {User, userService} from "@/src/lib/service/user/user-service";

export default async function counter() {
    const users: User[] = await userService.getAllUsers();

    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={() => increment()}>+1</button>
            <span> The counter has been incremented {count} times.</span>
            <span> There are {users.length} users in database. </span>
        </div>
    )
}