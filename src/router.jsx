import { createBrowserRouter, Navigate } from 'react-router-dom';

import { lazy, Suspense } from 'react';
const LandingPage = lazy(() => import('./views/pages/LandingPage'));




const App = lazy(() => import('./App'));

const baseUrl = import.meta.env.VITE_BASE_URL || '';
const router = createBrowserRouter([

    {
        path: `${baseUrl}/`,
        element: <Suspense><App /></Suspense>,
    },
    {
        path: `${baseUrl}/about`,
        element: <Suspense><App /></Suspense>,
    },
    {
        path: `${baseUrl}/:category`,
        element: <Suspense><LandingPage /></Suspense>,
    }

]);

export default router;
