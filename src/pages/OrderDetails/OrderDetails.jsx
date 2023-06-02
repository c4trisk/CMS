import { useDispatch, useSelector } from 'react-redux'
import './OrderDetails.scss'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getOrderById } from '../../store/features/order/orderSlice'
import { BsArrowLeftShort } from 'react-icons/bs'

const OrderDetails = () => {

  const dispatch = useDispatch()
  const { id } = useParams()
  const { order, error, loading } = useSelector(state => state.order)

  useEffect(() => {
    dispatch(getOrderById(id))
  }, [])

  const getTotalAmount = () => {
    let amount = 0
    order.orderRow.forEach(orderRow => amount += orderRow.product.price * orderRow.quantity)
    return amount
  }

  const getTotalQuantity = () => {
    let quantity = 0
    order.orderRow.forEach(orderRow => quantity += orderRow.quantity)
    return quantity
  }

  const [selectedValue, setSelectedValue] = useState('')
  const [isStatusChanged, setIsStatusChanged] = useState(false)
  const [showStatusChange, setShowStatusChange] = useState(false)

  // Knowingly only handling status change in frontend as to not mess up group project
  const handleStatusChange = (value) => {
    setSelectedValue(value)
    setIsStatusChanged(true)
    setShowStatusChange(false)
  }

  return (
    <div className='OrderDetails'>
      <Link to="/orders" className='intro'>
        <BsArrowLeftShort />
        <p>Back to Orders</p>
      </Link>
      { loading && <p>Loading...</p> }
      { error && <p>{error}</p> }
      { order && 
        <>
          <div className="card">
            <div className="d-flex">
              <h2>Order #{order._id}</h2>
              <p className='order-status'>Status: {isStatusChanged ? selectedValue : order.orderStatus}</p>
            </div>
            <div className="order-data">
              <div className="customer">
                <p className='category'>Customer ID</p>
                <p>{order.customerId._id}</p>
                <p className='category mt'>Customer email</p>
                <p>{order.customerId.email}</p>
              </div>
              <div className="date">
                <p className='category'>Date</p>
                <p>{order.createdAt.split('T')[0]}</p>
              </div>
            </div>
            <div className="d-flex total">
              <h3>{getTotalQuantity()} { getTotalQuantity() === 1 ? 'Article' : 'Articles'}</h3>
              <h3>Total: ${getTotalAmount()}</h3>
            </div>
            {order.orderRow.map(orderRow => 
              <div key={orderRow._id} className="order-row">
                <div className="product">
                  <p className="quantity">{orderRow.quantity} x </p>
                  <img src={orderRow.product.imageURL} alt={orderRow.product.name} className="img" />
                  <p>{orderRow.product.name}</p>
                </div>
                <p>${orderRow.product.price}</p>
              </div>
            )}
            
            <div className="buttons">
              <button className={`btn btn-edit ${showStatusChange && 'clicked'}`} onClick={() => setShowStatusChange(state => !state)}>Change Order Status</button>
            </div>
            <div className={`status-options ${!showStatusChange && 'd-none'}`}>
              <h3>Change Status on Current Order:</h3>
              <button className='btn' onClick={() => handleStatusChange('Cancelled')}>Cancelled</button>
              <button className='btn' onClick={() => handleStatusChange('Pending')}>Pending</button>
              <button className='btn' onClick={() => handleStatusChange('In Transit')}>In Transit</button>
              <button className='btn' onClick={() => handleStatusChange('Completed')}>Completed</button>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default OrderDetails