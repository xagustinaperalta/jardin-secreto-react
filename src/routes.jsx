import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import LastProductInDb from './components/LastProductInDb'
import ContentWrapper from './components/ContentWrapper'
import UsersInDB from './components/UsersInDB'
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
        element: <LastProductInDb />,
      },
      {
        path: '/users',
        element: <UsersInDB />,
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