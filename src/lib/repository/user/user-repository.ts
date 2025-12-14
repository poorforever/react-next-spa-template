import {prisma} from "@/src/lib/prisma";

export const userRepository = {
    findAll: () => prisma.users.findMany(),
    newUser: () => prisma.users.create({
        data: {
            email: 'elsa@prisma.io',
            name: 'Elsa Prisma',
        },
    }),
}