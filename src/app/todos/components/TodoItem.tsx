'use client'
import { Todo } from "@prisma/client"
import styles from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5"


export const TodoItem = ({todo, toggleTodo}: props) => {
  const { id, description, complete} = todo
  

  return (
    <div className={complete ? styles.todoDone : styles.todoPending}>
        <div
            onClick={() => toggleTodo(id,!complete)}
            className="flex flex-col sm:flex-row justify-start items-center gap-4 ">
            <div className={`
            flex p-2 rounded-md cursor-pointer
            hover:bg-opacity-60
            {${complete ? 'bg-blue-100 ' : 'bg-red-600'}
            text-black
            `}>
                {complete ?(<IoCheckboxOutline size={30} />): (<IoSquareOutline size={30}/>)}
                <div className="text-center sm:text-left">
                    {`  - ${description}`}
                </div>
            </div>
        </div>
     </div>
  )

}

interface props {
    todo: Todo
    toggleTodo: (id: string, complete: boolean) => Promise<Todo|void> 
    // TODO actiones que se desean llamar
}
