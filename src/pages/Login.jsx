import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForms/AuthForm';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (credentials) => {
    const { success, error } = await login(credentials);
    if (success) {
      navigate('/');
    } else {
      setError(error);
    }
  };

  const fields = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'your@email.com'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      placeholder: '••••••••'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Login</h1>
        <AuthForm
          onSubmit={handleLogin}
          fields={fields}
          submitText="Sign In"
          error={error}
        />
      </div>
    </div>
  );
}