import './FormInput.scss'

const FormInput = ({ label, errorMessage, ...rest }) => {
  return (
    <div className="FormInput">
      <label className='form-label' htmlFor={rest.id}>{label}</label>
      <input className='form-control' {...rest} />
      { errorMessage && <p className='error'>{errorMessage}</p> }
    </div>
  )
}

export default FormInput