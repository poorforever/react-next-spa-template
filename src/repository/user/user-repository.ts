'use server'

import {prisma} from "@/src/lib/prisma";

export async function getUsers() {
    return await prisma.users.findMany()
}