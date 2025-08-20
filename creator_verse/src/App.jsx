import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { useRoutes } from 'react-router-dom'
import Layout from './components/Layout'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const routes = useRoutes([
    {path: "/", element: <Layout />,
      children: [
        {index: true, element: <ShowCreators />},
        {path: "/show", element: <ShowCreators />},
        {path: "/add", element: <AddCreator />},
        {path: "/edit", element: <EditCreator />},
        {path: "/view", element: <ViewCreator />}
      ]
    }
  ]);
  

  return (
    <>
      {routes}
    </>
  )
}

export default App
