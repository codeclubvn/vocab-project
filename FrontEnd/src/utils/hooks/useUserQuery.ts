import { useMutation , useQueryClient } from '@tanstack/react-query'
import { userApi } from '@/api-client/user-api'

export const keys = {
  all: ['users'],
  details: () => [...keys.all, 'detail'],
  detail: (id: number) => [...keys.details(), id],
}

export const useUserQuery = () => {
  const queryKey = keys.all
  const queryClient = useQueryClient()

  const addMutation = useMutation(userApi.add, {
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
