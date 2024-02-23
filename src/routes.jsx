import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import LastMovieInDb from './components/LastMovieInDb'
import ContentWrapper from './components/ContentWrapper'
import GenresInDb from './components/GenresInDb'
import Product from './components/Product'
import Error from './components/Error'
import SearchMovies from './components/SearchMovies'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <ContentWrapper />,
      },
      {
        path: '/last-movie',
        element: <LastMovieInDb />,
      },
      {
        path: '/genres',
        element: <GenresInDb />,
      },
      {
        path: '/products',
        element: <Product />,
      },
      {
        path: '/search',
        element: <SearchMovies />,
      }
    ]
  },
])

export default routes