import { useSelector } from "react-redux"

export const isAuthenticated = () => {

  let authenticated = false

  const { admin } = useSelector(state => state.auth)

  if(admin !== null && admin.admin) {
    authenticated = true
  }

  return authenticated
}
