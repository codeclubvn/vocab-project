export interface ICollection {
  id: string
  user_id: string
  name: string
  description: string | null
  star?: number
  total?: number
  is_public: boolean
  created_at: string
  updated_at: string
}

export interface CollectionForm {
  user_id: string
  name: string
  description: string | null
  is_public: boolean
}
