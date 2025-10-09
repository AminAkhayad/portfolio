import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import About from './app/pages/About/About.jsx'
import Home from './app/pages/Home/Home.jsx'

import './index.css'
import App from './app/components/functional/App/App.jsx'
const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
      ],
    },
  ],
  { basename: "/portfolio/" }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />

          </QueryClientProvider>

  </StrictMode>,
)
