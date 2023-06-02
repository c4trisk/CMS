
const getAllAsync = async () => {
  const res = await fetch('http://localhost:9998/api/products/')
  if(!res.ok) throw new Error('Something went wrong when getting data')
  return res.json()
}

const addAsync = async (productData) => {
  const res = await fetch('http://localhost:9998/api/products', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(productData)
  })

  if(!res.ok) throw new Error('Something went wrong when adding data')
  return res.json()
}

const productsService = {
  getAllAsync,
  addAsync
}

export default productsService