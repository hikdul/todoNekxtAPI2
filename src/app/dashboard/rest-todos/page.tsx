
import { NewTodo, TodosGrid } from '@/app/todos/components'
import prisma from '@/lib/prisma'

export const metadata = {
  title: 'tasks list',
  description: 'solo es un listado de tareas'
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

const RestTodosPage = async () => {

  // ! de este modo podremos aprobechar en cierto modo los server actions...
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } }) // ? a mi parecer esto es reaparecer una practica que se busca eliminar

  {/* *TODO: formulacion para agregar Todo's */ }
  return (
    <>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
        <TodosGrid todos={todos} />
    </>
  )
}

export default RestTodosPage