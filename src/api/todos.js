import apiClient from '../utils/apiClient';

export const getTodos = async () => {
  try {
    const response = await apiClient.get('/todos');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

export const updateTodo = async (id, data) => {
  try {
    const response = await apiClient.put(`/todos/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    return null;
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await apiClient.post('/todos', todo);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    return null;
  }
};
