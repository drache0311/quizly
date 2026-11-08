import React, { Fragment } from 'react'
import { Outlet, useRoutes } from 'react-router'
import SingleQuestion from '../pages/question/SingleQuestion'
import SingleKeyword from '../pages/keyword/SingleKeyword'
import Home from '../pages/Home'
import AllKeyword from '../pages/keyword/AllKeyword'

const Layout = () => {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  )
}

const AppRouter = () => {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'single-question', element: <SingleQuestion /> },
        { path: 'ten', element: <Fragment /> },
        { path: 'single-keyword', element: <SingleKeyword /> },
        { path: 'all-keyword', element: <AllKeyword /> },
      ],
    },
  ])
}

export default AppRouter
