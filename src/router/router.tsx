import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout.tsx'
import { Welcome } from '../pages/Welcome.tsx'
import Game from '../pages/Game.tsx'
import { URL } from './types.ts'
import Results from '../pages/Results.tsx'
import Statistics from '../pages/Statistics.tsx'
import NotFound from '../pages/NotFound.tsx'

export const router = createBrowserRouter([
  {
    path: URL.Home,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: URL.Home,
        element: <Welcome />
      },
      {
        path: URL.Game,
        element: <Game />
      },
      {
        path: URL.Results,
        element: <Results />
      },
      {
        path: URL.Statistics,
        element: <Statistics />
      }
    ]
  }
])
