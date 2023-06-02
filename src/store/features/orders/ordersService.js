export const getAllOrdersAsync = async () => {
  const res = await fetch('http://localhost:9998/api/orders/')
  if(!res.ok) throw new Error('Something went wrong when getting orders')
  return res.json()
}

const ordersService = {
  getAllOrdersAsync
}

export default ordersService