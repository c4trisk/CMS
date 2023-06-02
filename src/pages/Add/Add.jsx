import AddForm from '../../components/AddForm/AddForm'
import './Add.scss'

const Add = () => {
  return (
    <div className='Add'>
      <div className="d-flex">
        <h1>Add a new product</h1>
      </div>
      <AddForm />
    </div>
  )
}

export default Add