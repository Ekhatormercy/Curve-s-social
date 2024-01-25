import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
// import Homepage from './Components/SocialPage/Homepage'
// import Createpage from './Components/SocialPage/Createpage'
import Postpage from './Components/Postpage/Postpage'
import Createpage from './Components/Createpage/Createpage'


const router = createBrowserRouter([
 {
  path: "/",
  element: <Login/>,
 },
 {
  path: "/create",
  element: <Createpage/>,
 },
 {
  path: "/post",
  element: <Postpage/>,
 },
])

function App() {
 

  return (
    <>
     <RouterProvider router ={router}/>
    </>
  )
}

export default App
