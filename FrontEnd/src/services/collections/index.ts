import type { CollectionForm, ICollection } from '@/types/Collection'
import type { VocabForm, IVocab } from '@/types/Vocab'
import axiosClient from '../fetcher/client'

export const CollectionApi = {
  add(data: CollectionForm): Promise<ICollection> {
    return axiosClient.post('/collections', data)
  },
  addVocab(id: string, data: VocabForm[]): Promise<IVocab[]> {
    return axiosClient.post(`/collections/${id}/vocabs`, data)
  },
}
