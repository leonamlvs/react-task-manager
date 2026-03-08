import { useState } from 'react';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      description: 'Estudar programação para me tornar um desenvolvedor full stack.',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Fazer exercícios físicos',
      description: 'Fazer exercícios físicos para manter a saúde e o bem-estar.',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Estudar matemática',
      description: 'Estudar matemática para aprimorar as habilidades lógicas.',
      isCompleted: false
    }
  ])

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {

      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);

  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />
      </div>
    </div>
  )
}

export default App
