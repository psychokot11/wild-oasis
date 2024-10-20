import { useMutation } from '@tanstack/react-query';
import { toast } from "react-hot-toast";
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
    const navigate = useNavigate();
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: () => {
            navigate('/dashboard');
        },
        onError: (error) => {
            console.log(error);
            toast.error("Provided email or password are incorrect");
        }
    })

    return { login, isLoading }
}