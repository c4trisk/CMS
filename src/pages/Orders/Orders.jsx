import { useEffect } from 'react'
import './Orders.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../store/features/orders/ordersSlice'
import OrderListItem from '../../components/OrderListItem/OrderListItem'

const Orders = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllOrders())
  }, [])

  const { orders, error, loading } = useSelector(state => state.orders)

  // Access to whole orders array
  return (
    <div className='Orders'>
      { loading && <p>Loading...</p> }
      { error && <p>{error}</p>}
      {
        orders.length < 1
        ? <p>No orders to show</p>
        :<div className="order-list">
          <h1>Orders</h1>
          {orders.map((order) => (
            <OrderListItem key={order._id} order={order} />
        ))}
      </div>
      }
      
    </div>
  );

}

export default Orders
