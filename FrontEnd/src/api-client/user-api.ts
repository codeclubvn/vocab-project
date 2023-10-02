import type { User } from '@/types'
import axiosClient from './axios-client'

export const userApi = {

  add(data: User): Promise<User> {
    return axiosClient.post('/users', data)
  },

 
}
