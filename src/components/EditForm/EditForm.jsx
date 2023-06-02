import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import './EditForm.scss'
import { useForm } from '../../hooks/useAddForm'
import { useDispatch } from 'react-redux'
import { updateProduct } from '../../store/features/product/productSlice'
import { validate } from '../../helpers/validate'

const EditForm = ({ product, setEdit }) => {

  const dispatch = useDispatch()
  
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    imageURL: product.imageURL,
    tags: product.tags
  })



  const handleChange = e => {
    const { id, value } = e.target
    setFormData(formData => {
      return {
        ...formData,
        [id]: value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // Validating form
    if(!validate(formData, setErrors)) {
      return
    }

    // sending updated product to DB
    const payload = { id: product._id, formData }
    dispatch(updateProduct(payload))
  
    // Closes edit form and shows updated product
    setEdit(false)
  }



  return (
    <form noValidate className='EditForm' onSubmit={handleSubmit}>
      <FormInput 
        id= 'name'
        type='text'
        label= 'Product Name'
        errorMessage={errors.name}
        value={formData.name}
        onChange={handleChange}
      />
      <FormInput 
        id= 'description'
        type='text'
        label= 'Product Name'
        errorMessage={errors.description}
        value={formData.description}
        onChange={handleChange}
      />
      <FormInput 
        id= 'price'
        type='text'
        label= 'Product Name'
        errorMessage={errors.price}
        value={formData.price}
        onChange={handleChange}
      />
      <FormInput 
        id= 'imageURL'
        type='text'
        label= 'Product Name'
        errorMessage={errors.imageURL}
        value={formData.imageURL}
        onChange={handleChange}
      />
      <FormInput 
        id= 'tags'
        type='text'
        label= 'Product Categories'
        errorMessage={errors.tags}
        value={formData.tags}
        onChange={handleChange}
      />
      <div className="buttons">
        <button className="btn btn-edit" type='submit'>Save Changes</button>
        <button className="btn btn-delete" onClick={() => setEdit(state => !state)}>Cancel</button>
      </div>
    </form>
  )
}

export default EditForm