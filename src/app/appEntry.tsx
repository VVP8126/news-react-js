import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import { store } from './appStore.tsx';
import BaseLayout from './layouts/BaseLayout.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <Provider store={store}>
      <BaseLayout />
    </Provider>
  </ThemeProvider>,
);
