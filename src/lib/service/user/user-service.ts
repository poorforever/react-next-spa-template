import {userRepository} from "@/src/lib/repository/user/user-repository";

export type User = {
    id: number,
    name: string
    email: string
}

export const userService = {
    getAllUsers: async () => {
        return await userRepository
            .findAll()
            .map(user => ({
                id: user.id,
                name:user.name,
                email:user.email,
            }))
    }
}