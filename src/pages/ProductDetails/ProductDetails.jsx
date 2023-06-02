import { useDispatch, useSelector } from 'react-redux'
import './ProductDetails.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { deleteProduct, getProductById } from '../../store/features/product/productSlice'
import { BsArrowLeftShort } from 'react-icons/bs'
import EditForm from '../../components/EditForm/EditForm'
import DeleteModal from '../../components/DeleteModal/DeleteModal'

const ProductDetails = () => {

  const dispatch = useDispatch()
  const { id } = useParams()
  const { product, loading, error } = useSelector(state => state.product)

  const [edit, setEdit] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(getProductById(id))
  }, [edit])

  return (
    <div className='ProductDetails'>
      <Link to="/" className='intro'>
        <BsArrowLeftShort />
        <p>Back to Products</p>
      </Link>
      { loading && <p>Loading...</p> }
      { error && <p>{error}</p> }
      {
        product && !edit &&
        <>
          <div className="card">
            <div className="top">
              <img className='img' src={product.imageURL} alt={product.name} />
              <div className="product-info">
                <div>
                  <p className='category'>PRODUCT NAME</p>
                  <h2>{product.name}</h2>
                </div>
                <div>
                  <p className='category'>PRODUCT DESCRIPTION</p>
                  <p>{product.description}</p>
                </div>
                <div>
                  <p className='category'>PRODUCT CATEGORY</p>
                  <p>{product.tags.join(', ')}</p>
                </div>
                <div>
                  <p className='category'>OVERALL CUSTOMER RATING</p>
                  { product.rating 
                    ? <p className="italic text-grey">{product.rating}</p> 
                    : <p className="italic text-grey">No data available yet</p>
                  }
                </div>
                <div>
                  <p className='category'>CUSTOMER REVIEWS</p>
                  { product.review 
                    ? <p className="italic text-grey">"{product.review}"</p> 
                    : <p className="italic text-grey">No data available yet</p>
                  }
                </div>
                <div>
                  <p className='category'>PRODUCT PRICE</p>
                  <p>${product.price},00</p>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className="btn btn-edit" onClick={() => setEdit(state => !state)}>Edit Product</button>
              <button className="btn btn-delete" onClick={() => setShowModal(true)}>Delete Product</button>
            </div>
          </div>
        </>
      }
      {
        product && edit && 
        <div className="card">
          <div className="top">
            <img src={product.imageURL} alt={product.name} className="img" />
            <EditForm product={product} setEdit={setEdit} />
          </div>
        </div>
      }
      {
        showModal && <DeleteModal product={product} setShowModal={setShowModal} />
      }
    </div>
  )
}

export default ProductDetails