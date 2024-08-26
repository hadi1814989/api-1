
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Help from './pages/Help'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './components/root/Layout'

function App() {

 let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />}></Route>
    <Route path='/help' element={<Help />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
  </Route>
  
 ))
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
   
    </>
  )
}

export default App
