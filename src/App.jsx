import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import OrderDetails from './pages/OrderDetails/OrderDetails'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { ProtectedRoute } from './routes/ProtectedRoute'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/products/:id' element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          } />
          <Route path='/add' element={
            <ProtectedRoute>
              <Add />
            </ProtectedRoute>
          } />
          <Route path='/orders' element={
            <ProtectedRoute>
              <Orders /> 
            </ProtectedRoute>
          }/>
          <Route path='/orders/:id' element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </>
  )
}

export default App