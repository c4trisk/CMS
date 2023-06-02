import FormInput from '../FormInput/FormInput'
import './AddForm.scss'
import { useForm } from '../../hooks/useAddForm'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/features/products/productsSlice'
import { useState } from 'react'

const AddForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageURL: '',
    tags: ''
  })

  const { errors, form, handleChange, handleSubmit } = useForm(formData, addProduct)

  return (
    <form noValidate className='AddForm card' onSubmit={handleSubmit}>
      <FormInput 
      id= 'name'
      type='text'
      label= 'Product Name'
      errorMessage={errors.name}
      value={form.name}
      onChange={handleChange}
      />
      <FormInput 
      id= 'description'
      type='text'
      label= 'Product Description'
      errorMessage={errors.description}
      value={form.description}
      onChange={handleChange}
      />
      <FormInput 
      id= 'price'
      type='text'
      label= 'Price'
      errorMessage={errors.price}
      value={form.price}
      onChange={handleChange}
      />
      <FormInput 
      id= 'imageURL'
      type='text'
      label= 'Image URL'
      errorMessage={errors.imageURL}
      value={form.imageURL}
      onChange={handleChange}
      />
      <FormInput 
      id= 'tags'
      type='text'
      label= 'Product Categories (multiple, separate by space)'
      errorMessage={errors.tags}
      value={form.tags}
      onChange={handleChange}
      />
      <button className="btn btn-primary">Add Product</button>
    </form>
  )
}

export default AddForm