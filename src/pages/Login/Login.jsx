import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.scss'

const Login = () => {
  return (
    <div className="Login card">
      <h1>Login as Admin</h1>
      <LoginForm />
    </div>
  )
}

export default Login