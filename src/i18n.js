import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  'en-US': {
    translation: {
      title: 'My Tasks',
      addTaskPlaceholder: 'What needs to be done?',
      addTaskDescriptionPlaceholder: 'Add a description...',
      addTaskButton: 'Add Task',
      addTaskValidation: 'Please, fill in the title of the task.',
      taskDetails: 'Task Details',
      deleteTask: 'Delete Task',
      back: 'Back',
      noTasks: 'Your list is empty. Add a task above to get started.',
      language: 'Language',
      theme: 'Theme',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      switchToPT: 'Switch to Portuguese',
      switchToEN: 'Switch to English',
      notFound: 'Not Found',
      taskNotFound: 'Task not found.',
      confirmDelete: 'Are you sure you want to delete this task?',
      editTitle: 'Click to edit title',
      editDescription: 'Click to edit description',
      noDescription: 'No description provided. Click to add one.',
      pressToSave: 'Press Ctrl+Enter to save, Click outside to auto-save',
      autoSave: 'Click outside to auto-save',
      goBack: 'Go back',
      cancel: 'Cancel',
      markAsDone: 'Mark as done',
      markAsUndone: 'Mark as undone',
      seeDetails: 'See details'
    }
  },
  'pt-BR': {
    translation: {
      title: 'Minhas Tarefas',
      addTaskPlaceholder: 'O que precisa ser feito?',
      addTaskDescriptionPlaceholder: 'Adicione uma descrição...',
      addTaskButton: 'Adicionar Tarefa',
      addTaskValidation: 'Por favor, preencha o título da tarefa.',
      taskDetails: 'Detalhes da Tarefa',
      deleteTask: 'Excluir Tarefa',
      back: 'Voltar',
      noTasks: 'Sua lista está vazia. Adicione uma tarefa acima para começar.',
      language: 'Idioma',
      theme: 'Tema',
      switchToLight: 'Mudar para modo claro',
      switchToDark: 'Mudar para modo escuro',
      switchToPT: 'Mudar para Português',
      switchToEN: 'Mudar para Inglês',
      notFound: 'Não Encontrado',
      taskNotFound: 'Tarefa não encontrada.',
      confirmDelete: 'Tem certeza que deseja excluir esta tarefa?',
      editTitle: 'Clique para editar o título',
      editDescription: 'Clique para editar a descrição',
      noDescription: 'Nenhuma descrição fornecida.\nClique para adicionar uma.',
      pressToSave:
        'Pressione Ctrl+Enter para salvar, clique fora para salvar automaticamente',
      autoSave: 'Clique fora para salvar automaticamente',
      goBack: 'Voltar',
      cancel: 'Cancelar',
      markAsDone: 'Marcar como concluída',
      markAsUndone: 'Marcar como pendente',
      seeDetails: 'Ver detalhes'
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
