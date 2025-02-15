import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './styles/index.scss';

import { router } from './router/router.tsx';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
