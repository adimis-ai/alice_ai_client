import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';

// Create a QueryClient instance
const queryClient = new QueryClient();

// Auth0 configuration
const auth0Config = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
};

// API URL
const apiUrl = process.env.REACT_APP_API_URL;

// Create a router instance
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

// ErrorFallback component for error handling
function ErrorFallback({ error }) {
  // You can customize the error message or display an error page here
  return <div>Error: {error.message}</div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Auth0Provider {...auth0Config}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Auth0Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
