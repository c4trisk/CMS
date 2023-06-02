const getOrderByIdAsync = async (id) => {
  const res = await fetch('http://localhost:9998/api/orders/' + id)
  if(!res.ok) throw new Error('Something went wrong when getting order')
  return res.json()
}


const orderService = {
  getOrderByIdAsync
}

export default orderService