import type { User } from '@/types'
import { IUserFireBase } from '../../types/User'
import axiosClient from '../fetcher/client'

export const userApi = {
  add(data: User): Promise<User> {
    return axiosClient.post('/users', data)
  },

  addFireBase(data: IUserFireBase): Promise<User> {
    const { displayName: full_name, email, photoURL: avt, uid } = data
    return axiosClient.post('users', { full_name, uid, avt, email })
  },
}
