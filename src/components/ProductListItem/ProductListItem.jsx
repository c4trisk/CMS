import './ProductListItem.scss'
import { MdEdit, MdOutlineDeleteForever } from 'react-icons/md'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProductListItem = ({ product }) => {
  return (
    <Link to={`/products/${product._id}`} className='ProductListItem'>
      <img src={product.imageURL} alt={product.name} className='img' />
      <div className="desc">
        <h2>{product.name}</h2>
        <p>{ product.description.length > 70 ? product.description.slice(0, 70) + '...' : product.description}</p>
      </div>
    </Link>
  )
}

export default ProductListItem