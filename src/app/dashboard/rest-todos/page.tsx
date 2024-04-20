
import { TodosGrid } from '@/app/todos/components'
import prisma from '@/lib/prisma'

export const metadata ={
  title: 'tasks list',
  description: 'solo es un listado de tareas'
}

const  RestTodosPage = async () => {
  
  // ! de este modo podremos aprobechar en cierto modo los server actions...
  const todos = await prisma.todo.findMany({orderBy: {description: 'asc'}}) // ? a mi parecer esto es reaparecer una practica que se busca eliminar

    {/* *TODO: formulacion para agregar Todo's */}
  return (
    <TodosGrid todos={todos} />
  )
}

export default RestTodosPage