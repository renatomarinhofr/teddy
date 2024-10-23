import {
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form';
import { LoginFormInputs } from '../../domain/schemas/loginSchema';
import { LockClosedIcon } from '@heroicons/react/solid';
import { FcGoogle } from 'react-icons/fc';

interface LoginFormProps {
  register: UseFormRegister<LoginFormInputs>;
  errors: FieldErrors<LoginFormInputs>;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  onGoogleSignIn: () => void;
}

function LoginForm({
  register,
  errors,
  onSubmit,
  onGoogleSignIn,
}: LoginFormProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Entrar na sua conta
        </h2>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="rounded-md shadow-sm">
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Endereço de email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Endereço de email"
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Senha"
                {...register('password')}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                {...register('rememberMe')}
              />
              <label
                htmlFor="rememberMe"
                className="block ml-2 text-sm text-gray-900"
              >
                Lembrar-me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Entrar
            </button>

            <button
              type="button"
              onClick={onGoogleSignIn}
              className="relative flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FcGoogle className="w-5 h-5" aria-hidden="true" />
              </span>
              Entrar com Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
