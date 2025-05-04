import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import { store } from './appStore.tsx';
import { RouterProvider } from 'react-router';
import { appRouter } from './appRouter.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </ThemeProvider>,
);
