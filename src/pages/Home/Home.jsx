import { useDispatch, useSelector } from 'react-redux'
import './Home.scss'
import { useEffect } from 'react'
import { getAllProducts } from '../../store/features/products/productsSlice'
import ProductListItem from '../../components/ProductListItem/ProductListItem'

const Home = () => {

  const dispatch = useDispatch()
  const { products, error, loading } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])



  return (
    <div className='Home'>
      <div className="d-flex">
        <h1>Products</h1>
        <p>{products.length} articles</p>
      </div>
      { loading && <p>Loading...</p> }
      { error && <p>{error}</p> }
      {
        products.length < 1 
        ? <p>No products to show</p> 
        : <div className='product-list'> {products.map(product => <ProductListItem key={product._id} product={product} />)} </div>
      }
    </div>
  )
}

export default Home