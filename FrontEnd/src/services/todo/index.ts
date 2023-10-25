import type { Todo } from '@/types/Todo'
import axiosClient from '../fetcher/client'

export const todoApi = {
  getAll(): Promise<Todo> {
    return axiosClient.get('/todos')
  },

  get(id: number): Promise<Todo> {
    return axiosClient.get(`/todos/${id}`)
  },

  add(data: Todo): Promise<Todo> {
    return axiosClient.post('/todos', data)
  },

  update(data: Todo): Promise<Todo> {
    return axiosClient.put(`/todos/${data.id}`, data)
  },

  remove(id: number): Promise<Todo> {
    return axiosClient.delete(`/todos/${id}`)
  },
}
