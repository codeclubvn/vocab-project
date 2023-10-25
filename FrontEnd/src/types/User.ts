type UserRole = 'admin' | 'user'

export interface IUser {
  id: string
  uid: string | null
  nickName: string
  fullName: string | null
  email: string
  password: string
  age: string | null
  gender: string | null
  photoURL: string | null
  streak: number
  rank: number
  score: number
  level: number
  role: UserRole
  createdAt: string
  updatedAt: string
}

export interface User {
  password: string
  access_token: string
  email: string
  role: []
}
export interface IUserFireBase {
  displayName: string
  email: string
  photoURL: string
  uid: string
}
