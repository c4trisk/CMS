

const getByIdAsync = async (id) => {
  const res = await fetch('http://localhost:9998/api/products/' + id)
  if(!res.ok) throw new Error('Something went wrong when getting product')
  return res.json()
}

const updateAsync = async (id, productData) => {
  const res = await fetch('http://localhost:9998/api/products/' + id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(productData)
  })

  if(!res.ok) throw new Error('Something went wrong when updating product')
  return res.json()
}

const deleteAsync = async (id) => {
  const res = await fetch('http://localhost:9998/api/products/' + id, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  })

  if(!res.ok) throw new Error('Something went wrong when deleting product')
  return res.json()
}

const productService = {
  getByIdAsync,
  updateAsync,
  deleteAsync
}

export default productService