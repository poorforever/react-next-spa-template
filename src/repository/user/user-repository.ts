'use server'

import {prisma} from "@/src/lib/prisma";
import {User} from "@/src/service/user/user-service";

export async function getUsers() {
    return await prisma.users.findMany()
}

export async function getUserByEmail(email: string) {
    return await prisma.users.findFirst({
        where: {
            email: {
                equals: email
                }
            }
        })
    }

export async function checkUser(email: string, password: string) {
    return await prisma.users.findFirst({
        where: {
            AND: {
                email: {
                    equals: email
                },
                password: {
                    equals: password
                }
            }
        }
    })
}