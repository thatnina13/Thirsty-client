const config = require('../config')
const store = require('../store')

const getProduct = () => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// const getFlamingo = () => {
//   return $.ajax({
//     url: config.apiUrl + '/flamingo',
//     method: 'GET'
//   })
// }

const getAllProduct = () => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
// const getAllFlamingo = () => {
//   return $.ajax({
//     url: config.apiUrl + '/flamingo',
//     method: 'GET'
//   })
// }

const getMyProduct = (userId) => {
  return $.ajax({
    url: config.apiUrl + '/myproducts/' + userId,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const createProduct = formData => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}
// const createFlamingo = formData => {
//   return $.ajax({
//     url: config.apiUrl + '/flamingo',
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: formData
//   })
// }
const deleteProduct = productId => {
  return $.ajax({
    url: config.apiUrl + '/products/' + productId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
// const deleteFlamingo = flamingoId => {
//   return $.ajax({
//     url: config.apiUrl + '/flamingo/' + flamingoId,
//     method: 'DELETE',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

const updateProduct = (productId, formData) => {
  return $.ajax({
    url: config.apiUrl + '/products/' + productId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}
// const updateFlamingo = (formData, flamingoId) => {
//   return $.ajax({
//     url: config.apiUrl + '/flamingo/' + flamingoId,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: formData
//   })
// }
// const createRsvp = (partyId) => {
//   return $.ajax({
//     url: config.apiUrl + '/rsvp/',
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: {
//       'rsvp': {
//         'party': `${partyId}`
//       }
//     }
//   })
// }
//
// const getMyRsvp = () => {
//   return $.ajax({
//     url: config.apiUrl + '/myrsvp',
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

module.exports = {
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  // createRsvp,
  // getMyRsvp,
  getAllProduct,
  getMyProduct
  // getFlamingo,
  // getAllFlamingo,
  // createFlamingo,
  // deleteFlamingo,
  // updateFlamingo
}
