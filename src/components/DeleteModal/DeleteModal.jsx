import { useDispatch } from 'react-redux'
import './DeleteModal.scss'
import { deleteProduct } from '../../store/features/product/productSlice'
import { useNavigate } from 'react-router-dom'

const DeleteModal = ({ product, setShowModal }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = () => {
    // deleting product from database
    dispatch(deleteProduct(product._id))
    // redirecting to home
    navigate('/')
  }

  return (
    <div className='DeleteModal modal grid-center'>
      <div className="card grid-center">
        <h2>Are you sure you want to delete this product?</h2>
        <p className='warning'>This action is irreversible</p>
        <div className="product">
          <img src={product.imageURL} alt={product.name} className="img" />
          <div>
            <p>Product ID: {product._id}</p>
            <h3>{product.name}</h3>
          </div>
        </div>
        <div className="buttons">
          <button className="btn" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="btn btn-delete" onClick={handleDelete}>Delete Product</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal