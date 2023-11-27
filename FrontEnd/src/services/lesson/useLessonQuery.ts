import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { LessonApi } from '.'

// https://tkdodo.eu/blog/mastering-mutations-in-react-query
// https://www.sitepoint.com/react-query-fetch-manage-data/

export const keys = {
  all: ['lesson'],
  // details: () => [...keys.all, 'detail'],
  // detail: (id: number) => [...keys.details(), id],
}

const useLessonQuery = () => {
  const queryKey = keys.all
  const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery(queryKey, LessonApi.getAll)

  const addMutation = useMutation(LessonApi.add, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    data,
    isLoading,
    error,
    addMutation,
  }
}

export default useLessonQuery
