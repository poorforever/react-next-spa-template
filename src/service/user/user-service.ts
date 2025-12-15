import {getUsers} from "@/src/repository/user/user-repository";

export type User = {
    id: number,
    name: string
    email: string
}

export const userService = {
    getAllUsers: async () => {
        const users = await getUsers();

        return users.map(user => ({
                id: user.id,
                name:user.name,
                email:user.email,
            }))
    }
}