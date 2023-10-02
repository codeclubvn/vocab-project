import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { todoApi } from '@/api-client'

export const keys = {
  all: ['todos'],
  details: () => [...keys.all, 'detail'],
  detail: (id: number) => [...keys.details(), id],
}

export const useTodoQuery = () => {
  const queryKey = keys.all
  const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery(queryKey, todoApi.getAll)

  const addMutation = useMutation(todoApi.add, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  const updateMutation = useMutation(todoApi.update, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  const removeMutation = useMutation(todoApi.remove, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    data,
    isLoading,
    error,
    addMutation,
    updateMutation,
    removeMutation,
  }
}
