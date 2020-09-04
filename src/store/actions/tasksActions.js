export const addTask = text => ({
  type: 'TASK_ADD',
  text
});

export const removeTask = id => ({
  type: 'TASK_REMOVE',
  id
});

export const toggleTask = (id, isCompleted) => ({
  type: 'TASK_TOGGLE',
  id,
  isCompleted
});
