import { ChevronRightIcon, TrashIcon } from 'lucide-react'

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  return (
    <ul className="space-y-4 rounded-md bg-slate-200 p-6 shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full rounded-md bg-slate-400 p-2 text-left text-white ${task.isCompleted ? 'line-through' : ''}`}>
            {task.title}
          </button>
          <button className="rounded-md bg-slate-400 p-2 text-white">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onTaskDelete(task.id)}
            className="rounded-md bg-slate-400 p-2 text-white">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Tasks
