'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@example.com' && password === '123456') {
      // document.cookie = 'auth=true; path=/';
        document.cookie = "auth=true; path=/; max-age=3600; Secure; SameSite=Lax";
      router.push('/');
      
    } else {
      setError('Invalid email or password');
    }
  };

  const handleDemo = () => {
    setEmail('admin@example.com');
    setPassword('123456');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>

        <form id="login-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-4 px-4 py-2 border-yellow-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />

          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-4 px-4 py-2 border-yellow-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-2 rounded-md font-semibold hover:bg-yellow-500 transition mb-3">
            Login
          </button>

          <button type="button" onClick={handleDemo} className="w-full bg-gray-200 text-gray-900 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
            Demo Login
          </button>
        </form>
      </div>
    </div>
  );
}
