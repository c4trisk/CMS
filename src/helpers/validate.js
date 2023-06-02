
// Function returns true if there are no errors
export const validate = (formData, setErrors) => {

  const err = {}

  // Product Name
  if(formData.name.trim() === '') {
    err.name = 'You need to enter a product name'
  } else if(formData.name.length < 3) {
    err.name = 'The product name must include at least 3 characters'
  }

  // Product Description
  if(formData.description.trim() === '') {
    err.description = 'You need to enter a product description'
  } else if(formData.description.length < 10) {
    err.description = 'Product description has to be at least 10 characters'
  }

  // Price 
  const priceRegex = /^[0-9.]+$/;

  if(String(formData.price).trim() === '') {
    err.price = 'You need to enter a product price'
  } else if(!priceRegex.test(formData.price)) {
    err.price = 'Price can only include numbers'
  }

  // Image URL 
  const URLRegex = /^(https?:\/\/)?([a-z0-9-]+\.)*[a-z0-9-]+(\.[a-z]{2,})(:\d{1,5})?(\/[^\s]*)?$/;


  if(formData.imageURL.trim() === '') {
    err.imageURL = 'You need to enter an image URL for the product'
  } else if(!URLRegex.test(formData.imageURL)) {
    err.imageURL = 'You need to enter a valid URL'
  }

  // Product categories

  if(formData.tags.length === 0) {
    err.tags = 'You need to enter at least one category for this product'
  }

  // Placing errors in error object
  setErrors(err)
  return Object.keys(err).length <= 0

}