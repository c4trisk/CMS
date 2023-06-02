import OrderRow from '../OrderRow/OrderRow'
import './OrderListItem.scss'
import {GrStatusGoodSmall} from 'react-icons/gr'
import { Link } from 'react-router-dom'

// Access to orderRows, customerid, orderStatus and createdAt
const OrderListItem = ({ order }) => {


  return (
    // filtering out earlier orders without status as to not break other group members' systems
    order.orderStatus && 
    <Link to={`/orders/${order._id}`} className='OrderListItem'>
      { 
        order && 
        <div>
          <div className="d-flex mb">
            <h2>Order #{order._id}</h2>
            <p className='status'><GrStatusGoodSmall />{order.orderStatus}</p>
          </div>
          <p>Date: {order.createdAt.split('T')[0]}</p>
          <p>{order.customerId.email}</p>
          {order.orderRow.map(orderRow => <OrderRow key={orderRow._id} orderRow={orderRow} />)}
        </div>
      }
      
    </Link>
  )
}

export default OrderListItem