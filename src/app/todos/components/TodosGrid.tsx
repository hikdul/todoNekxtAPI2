'use client'

import { Todo } from '@prisma/client'
import { TodoItem } from './TodoItem'

import * as todosApi from './../helpers/todo'
import { useRouter } from 'next/navigation'

export const TodosGrid = ({todos = []}:props) => {
  
  const router = useRouter()

  const toggleTodo = async (id: string, complete: boolean) =>{
    const updateTodo = await todosApi.updateTodo(id,complete)
    router.refresh()
    return updateTodo
  }
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
        {
            todos.map(todo =>(<TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>))
        }
    </div>
  )
}


interface props {
    todos: Todo[] // * esto no es DTO
}
