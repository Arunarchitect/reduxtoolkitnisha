import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Cart from './components/Cart';


function App() {

  const router= createBrowserRouter(createRoutesFromElements(
    <Route path='/'element={<Layout />}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <>
      <div className='App'>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
