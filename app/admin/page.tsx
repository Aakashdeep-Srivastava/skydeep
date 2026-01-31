'use client';

import { useState } from 'react';
import { PostForm } from '@/features/microblog/components';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      setAuthToken(data.token);
      setIsAuthenticated(true);

      // Store token for API calls
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('adminToken', data.token);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  // Override fetch for authenticated requests
  if (typeof window !== 'undefined' && authToken) {
    const originalFetch = window.fetch;
    window.fetch = async (input, init = {}) => {
      if (typeof input === 'string' && input.startsWith('/api/admin/posts')) {
        init.headers = {
          ...init.headers,
          Authorization: `Bearer ${authToken}`,
        };
      }
      return originalFetch(input, init);
    };
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-AAprimary flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-theme-primary">Admin Login</h1>
            <p className="text-theme-secondary mt-2">Enter password to access admin dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-theme-primary mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-AAprimary border border-theme-muted/30 rounded-lg
                           text-theme-primary placeholder:text-theme-muted
                           focus:outline-none focus:border-AAsecondary transition-colors"
                placeholder="Enter admin password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-AAsecondary text-AAprimary font-semibold rounded-lg
                         hover:bg-AAsecondary/90 disabled:opacity-50 disabled:cursor-not-allowed
                         transition-colors duration-300"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-AAprimary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-theme-primary">Admin Dashboard</h1>
            <p className="text-theme-secondary mt-1">Manage your blog posts</p>
          </div>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setAuthToken('');
              setPassword('');
              if (typeof window !== 'undefined') {
                sessionStorage.removeItem('adminToken');
              }
            }}
            className="px-4 py-2 text-sm text-theme-secondary hover:text-theme-primary
                       border border-theme-muted/30 rounded-lg hover:border-theme-muted/50
                       transition-colors"
          >
            Logout
          </button>
        </header>

        {/* New Post Form */}
        <section className="p-6 rounded-lg border border-theme-muted/30 bg-AAprimary/50">
          <h2 className="text-xl font-semibold text-theme-primary mb-6">New Post</h2>
          <PostForm />
        </section>

        {/* Info */}
        <section className="mt-8 p-4 rounded-lg bg-AAsecondary/5 border border-AAsecondary/20">
          <p className="text-sm text-theme-secondary">
            <strong className="text-AAsecondary">Note:</strong> Posts are committed to GitHub.
            After publishing, Vercel will automatically rebuild the site (usually 1-2 minutes).
            To edit or delete posts, use the GitHub web interface directly.
          </p>
        </section>
      </div>
    </div>
  );
}
