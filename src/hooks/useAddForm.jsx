import { useState } from 'react'
import { validate } from '../helpers/validate'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export const useForm = (formData, action) => {

  const [errors, setErrors] = useState({})

  // Spreading incoming data into a new object
  const [form, setForm] = useState({...formData})

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleChange = e => {
    const { id, value } = e.target
    setForm(formData => {
      return {
        ...formData,
        [id]: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Validating form
    if(!validate(form, setErrors)) {
      return
    }

    // sending form 
    const productData = {
      name: form.name,
      description: form.description,
      price: form.price,
      imageURL: form.imageURL,
      tags: form.tags.split(' ')
    }

    dispatch(action(productData))
    navigate('/')

  }



  return {
    errors,
    form,
    handleChange,
    handleSubmit
  }
}