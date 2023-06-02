const login = async (payload) => {
  const admin = {
    email: payload.email,
    password: payload.password
  }

  const res = await fetch('http://localhost:9998/api/users/login', {
    method: 'POST',
    body: JSON.stringify(admin),
    headers: {
      'Content-type': 'application/json'
    }
  })

  if(!res.ok) throw new Error('Something went wrong when logging you in')

  return res.json()
}

const authService = {
  login
}

export default authService
