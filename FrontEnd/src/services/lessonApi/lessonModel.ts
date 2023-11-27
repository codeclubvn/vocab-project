// import * as yup from 'yup'

// const VocabSchema = yup.object({
//   front_text: yup.string().required(),
//   back_text: yup.string().required(),
//   image: yup.string(),
//   sound: yup.string(),
//   example: yup.string(),
// })

// export interface VocabForm extends yup.InferType<typeof VocabSchema> {
//   // using interface instead of type generally gives nicer editor feedback
// }

export type MemoryLevel = 'new' | 'familiar' | 'memorized'

export interface IVocab {
  id: string
  collection_id: string
  front_text: string
  back_text: string
  image?: string
  sound?: string
  example?: string
  is_star?: boolean
  tag?: string[]
  is_remind?: boolean
  memory_level?: MemoryLevel
  updated_at: string | null
  created_at: string | null
}
