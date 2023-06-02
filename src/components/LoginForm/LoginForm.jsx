import { useLocation, useNavigate } from 'react-router-dom'
import './LoginForm.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAdmin, logout } from '../../store/features/auth/authSlice'

const LoginForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()
  const { admin } = useSelector(state => state.auth)

  const [submitted, setSubmitted] = useState(false)
  const [showError, setShowError] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(formData => {
      return {
        ...formData,
        [id]: value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    await dispatch(loginAdmin(formData))
    setSubmitted(true)

  }

  useEffect(() => {
    // If user has admin rights
    if(admin !== null) {
      setShowError(false)
      navigate(state?.from || '/')
    }

    // if user does not have admin rights
    if(admin !== null && !admin.admin) {
      dispatch(logout())
      setShowError(true)
    }

  }, [ submitted, admin ])


  
  return (
    <form noValidate className="LoginForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' value={formData.email} onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' value={formData.password} onChange={handleChange} />
      </div>
      <p className="error"></p>
      <button className="btn btn-primary">Sign in</button>
      <p>{showError && 'You need to have admin privileges to access site'}</p>
    </form>
  )
}

export default LoginForm