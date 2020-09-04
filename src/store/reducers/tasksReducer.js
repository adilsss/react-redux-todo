const initialState = {
  tasks: [
    {
      id: Date.now().toLocaleString(),
      text: 'Redux goes wewe',
      isCompleted: false
    }
  ]
};

const addTask = (state, text) => {
  if (!text) return;

  const task = {
    id: Date.now().toLocaleString(),
    text: text,
    isCompleted: false
  };

  return {
    tasks: [...state.tasks, task]
  };
};

const removeTask = (state, id) => {
  return {
    tasks: [...state.tasks.filter(task => task.id !== id)]
  };
};

const toggleTask = (state, id) => {
  return {
    tasks: [
      ...state.tasks.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    ]
  };
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TASK_ADD':
      return addTask(state, action.text);
    case 'TASK_REMOVE':
      return removeTask(state, action.id);
    case 'TASK_TOGGLE':
      return toggleTask(state, action.id);
    default:
      return state;
  }
};
