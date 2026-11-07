import React, {Fragment} from 'react'
import { Outlet, useRoutes } from 'react-router'
import Single from "../pages/single/Single";


const Layout = () => {
  return (
      <div className="wrapper">
          <section className="content">
              <Outlet />
          </section>
      </div>
  )
}

const AppRouter = () => {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        { index: true, element: <Single /> },
        { path: 'ten', element: <Fragment /> },
        { path: 'all', element: <Fragment /> },
      ]
    }
  ])
}

export default AppRouter
