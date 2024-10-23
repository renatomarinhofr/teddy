import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormInputs } from '../../domain/schemas/loginSchema';
import LoginForm from '../../presentation/components/LoginForm';
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
} from '../services/authService';

function LoginController() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const user = await loginWithEmailAndPassword(data);
      console.log('Usuário autenticado:', user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Erro ao autenticar:', error.message);
        alert('Erro ao autenticar: ' + error.message);
      } else {
        console.error('Erro desconhecido ao autenticar:', error);
        alert('Erro desconhecido ao autenticar');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await loginWithGoogle();
      console.log('Usuário autenticado com Google:', user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Erro ao autenticar com Google:', error.message);
        alert('Erro ao autenticar com Google: ' + error.message);
      } else {
        console.error('Erro desconhecido ao autenticar com Google:', error);
        alert('Erro desconhecido ao autenticar com Google');
      }
    }
  };

  return (
    <LoginForm
      register={register}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
      onGoogleSignIn={handleGoogleSignIn}
    />
  );
}

export default LoginController;
