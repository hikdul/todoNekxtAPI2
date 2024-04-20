import { Todo } from "@prisma/client";

// ? funcion creada para ver el delay en la actualizacion
const sleep = (secons: number = 0):Promise<boolean> =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(true)
        }, secons * 1000)
    })
}

export const updateTodo = async (id: string, complete: boolean): Promise<Todo> =>{
    // TODO: actualizacion optimista
    const body = {complete}
    
    const dbTodo = await fetch(`/api/todos/${id}`,{
        method: 'PUT',
        body: JSON.stringify(body),
        headers:{
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())

    return dbTodo
}


export const createdTodo = async (description: string): Promise<Todo> =>{

    const body = {description}
    
    const dbTodo = await fetch(`/api/todos`,{
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())

    return dbTodo
}

export const DeleteCompleteTodos = async () =>{

    await fetch(`/api/todos`,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    })
    return true

}