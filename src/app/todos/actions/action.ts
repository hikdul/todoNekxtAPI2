"use server"

import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client"
import {revalidatePath} from 'next/cache'

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> =>{
    
    const todo = await prisma.todo.findFirst({where:{id}})
    if(!todo)
        throw 'id no valido'
    
    const upTodo = await prisma.todo.update({
        where:{id},
        data: {complete}
    })
    
    revalidatePath('/dashboard/server-todos')
    return upTodo
}


export const addTodo = async (description: string):Promise<addResponse> =>{
    try {
        const todo = await prisma.todo.create({data:{description}})
        revalidatePath('/dashboard/server-todos')
        return {
            ok: true,
            todo
        }
    } catch (error) {
        console.error(error)
        return {
            ok: false,
            message: 'Error creando todo',
            error
        }
    }
}

export const deleteComplete = async (): Promise<void> =>{
    try {
        
        await prisma.todo.deleteMany({where:{complete:true}})
        revalidatePath('/dashboard/server-todos')
    } catch (error) {
        console.error(error)
    }
}

interface addResponse {
    ok: boolean
    todo?:Todo 
    message?: string
    error?:any
}
