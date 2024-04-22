'use client'

import { Todo } from '@prisma/client'
import { TodoItem } from './TodoItem'
import { useRouter } from 'next/navigation'
import { toggleTodo } from '../actions/action'

export const TodosGrid = ({todos = []}:props) => {
  
  //const router = useRouter()

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
