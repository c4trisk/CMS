import './OrderRow.scss'

// Access to product and quantity
const OrderRow = ({ orderRow }) => {


  return (
    <div className='OrderRow d-flex'>
      { orderRow.product && <p>{orderRow.quantity} x {orderRow.product.name}</p>}
    </div>
  )
}

export default OrderRow