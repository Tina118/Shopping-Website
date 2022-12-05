import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClientProvider,QueryClient} from 'react-query';
import { RecoilRoot } from 'recoil';

import './index.css';
import App from './containers/App';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);


