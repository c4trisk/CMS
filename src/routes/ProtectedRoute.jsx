import { Navigate, useLocation } from 'react-router-dom'
import { isAuthenticated } from '../helpers/authenticate'

export const ProtectedRoute = ({ children }) => {

  const location = useLocation()
  const authenticated = isAuthenticated()

  return authenticated ? children : <Navigate to='/login' replace state={{ from: location.pathname }} />
}