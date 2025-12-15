'use server'

import {userService} from "@/src/service/user/user-service";

export default async function counter() {
    const users= await userService.getAllUsers();

    return (
        <div>
            <span> There are {users.length} users in database. </span>
        </div>
    )
}