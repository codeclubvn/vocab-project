import { ICreateLessonDTO } from '@/types/Type'
import axiosClient from '../axiosClient'

export const LessonApi = {
  getAll(): Promise<any> {
    return axiosClient.get('/lessons')
  },

  // get(id: number): Promise<Todo> {
  //   return axiosClient.get(`/todos/${id}`)
  // },

  add(data: ICreateLessonDTO): Promise<any> {
    return axiosClient.post('/lessons', data)
  },

  // update(data: Todo): Promise<Todo> {
  //   return axiosClient.put(`/todos/${data.id}`, data)
  // },

  // remove(id: number): Promise<Todo> {
  //   return axiosClient.delete(`/todos/${id}`)
  // },
}
