import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider,useQuery } from '@tanstack/react-query'

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <App />
     </QueryClientProvider>
  </React.StrictMode>
);


reportWebVitals();
