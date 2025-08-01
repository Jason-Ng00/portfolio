import React from 'react';
import { createRoot } from 'react-dom/client';
import MainContainer from '@/pages/MainContainer';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>
);
