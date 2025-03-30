import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForms/AuthForm';

export default function Signup() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleRegister = async (userData) => {
    if (userData.password !== userData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    const { success, error } = await register(userData);
    if (success) {
      navigate('/');
    } else {
      setError(error);
    }
  };

  const fields = [
    {
      name: 'name',
      label: 'Full Name',
      required: true,
      placeholder: 'John Doe'
    },
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
      placeholder: '••••••••',
      pattern: ".{8,}",
      title: "Password must be at least 8 characters"
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      required: true,
      placeholder: '••••••••'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Create Account</h1>
        <AuthForm
          onSubmit={handleRegister}
          fields={fields}
          submitText="Sign Up"
          error={error}
        />
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}