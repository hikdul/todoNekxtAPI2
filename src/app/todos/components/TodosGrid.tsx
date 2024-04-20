'use client'

import { Todo } from '@prisma/client'
import { TodoItem } from './TodoItem'

export const TodosGrid = ({todos = []}:props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
        {
            todos.map(todo =>(<TodoItem key={todo.id} todo={todo}/>))
        }
    </div>
  )
}


interface props {
    todos: Todo[] // * esto no es DTO
}
