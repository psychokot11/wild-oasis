import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurentUser } from "../../services/apiAuth";

export function useUpdateUser() {
    const queryClient = useQueryClient();
    
    const {mutate: updateUser, isLoading: isUpdating} = useMutation({
        mutationFn: updateCurentUser,
        onSuccess: ({user}) => {
          toast.success('User account successfully updated')
          queryClient.setQueryData(['user'], user)
          queryClient.invalidateQueries({ queryKey: 'user' })
    
        },
        onError: err => toast.error(err.message + ' Please try again')
      });
    

  return { updateUser, isUpdating };
}