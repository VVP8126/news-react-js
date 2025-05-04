import { createBrowserRouter } from 'react-router';
import BaseLayout from './layouts/BaseLayout';
import { MainPage } from '../pages/main';
import { PageNotFound } from '../pages/notFound';
import { NewsPage } from '../pages/news';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/news/:id', element: <NewsPage /> },
    ],
  },
]);
