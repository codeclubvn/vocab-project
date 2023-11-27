export interface ICreateVocabDTO {
  index: number
  front_text: string
  back_text: string
  image_url?: string
  sound_url?: string
  example?: string
}

export interface ICreateLessonDTO {
  name: string
  description: string
  vocabularies: ICreateVocabDTO[]
}

export interface ILessonPreview {
  _id: string
  created_by: string
  name: string
  description?: string
  star: number
  total: number
  is_public: boolean
  created_at: string
  updated_at: string
  previewImage: string
}
