import type { User} from '@/types'
import axiosClient from '../fetcher/client'

export const userApi = {

  add(data: User): Promise<User> {
    return axiosClient.post('/users', data);
  },

  addFireBase(data: User): Promise<User> {
    return axiosClient.post('users/test', {data});
  },


 
}
