const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
// const showMyPartyTemplate = require('../templates/myparty-listing.handlebars')
const showMyProductTemplate = require('../templates/myproduct-listing.handlebars')
// const getPartyTemplate = require('../templates/party-listing.handlebars')
const getProductTemplate = require('../templates/product-listing.handlebars')

// const onCreateParty = event => {
//   event.preventDefault()
//   const form = event.target
//   // //.log('in events.js form is', form)
//   const formData = getFormFields(form)
//   // .log(formData)
//   api.createParty(formData)
//     .then(ui.createPartySuccess)
//     .catch(ui.failure)
// }

const onCreateProduct = event => {
  event.preventDefault()
  const form = event.target
  // //.log('in events.js form is', form)
  const formData = getFormFields(form)
  // .log(formData)
  api.createProduct(formData)
    .then(ui.createProductSuccess)
    .catch(ui.failure)
}

// const onClearParty = (event) => {
//   event.preventDefault()
//   // .log('clicked clear party')
//   ui.clearParty()
// }
const onClearProduct = () => {
  // event.preventDefault()
  // .log('clicked clear party')
  ui.clearProduct()
}

// const onGetParty = event => {
//   event.preventDefault()
//   api.getAllParty()
//     .then(function (data) {
//       $('.clear-party').show()
//       // const showPartyHtml = getPartyTemplate({ party: data.party })
//       if (data.party.length !== 0) {
//         const showPartyHtml = getPartyTemplate({ party: data.party })
//         $('.status').text('Parties are below!')
//         //    ////console.log('party is not empty')
//         $('.content').html(showPartyHtml)
//         // $('.get-party').hide()
//         $('.content').show()
//         rsvp.forEach(rsvpId => {
//           // console.log(rsvpId)
//           if ($(`[data-id = "${rsvpId}"]`)) {
//             // console.log('TEST')
//             $(`button[data-id = "${rsvpId}"]`).addClass('hide')
//           }
//         })
//       } else if (data.party.length < 1) {
//         // //console.log('party is empty')
//         $('.status').text('No recorded party, please enter a party!')
//         $('.content').hide()
//         $('.clear-party').show()
//         // $('.get-party').hide()
//       }
//     })
//     .catch(ui.failure)
// }

const onGetProduct = event => {
  event.preventDefault()
  api.getAllProduct()
    .then(function (data) {
      $('.clear-product').show()
      // const showPartyHtml = getPartyTemplate({ party: data.party })
      if (data.product.length !== 0) {
        const showProductHtml = getProductTemplate({ product: data.product })
        $('.status').text('Products are below!')
        //    ////console.log('party is not empty')
        $('.content').html(showProductHtml)
        // $('.get-party').hide()
        $('.content').show()
      } else if (data.product.length < 1) {
        // //console.log('party is empty')
        $('.status').text('please create a product!')
        $('.content').hide()
        $('.clear-product').show()
        // $('.get-party').hide()
      }
    })
    .catch(ui.failure)
}

// const onGetAllProduct = event => {
//   event.preventDefault()
//   api.getAllProduct()
//     .then(ui.getAllProductSuccess)
//     .catch(ui.failure)
// }

// const onGetAllProduct = event => {
//   event.preventDefault()
//   api.getAllProduct()
//     .then(ui.getAllProductSuccess)
//     .catch(ui.failure)
// }

const onGetMyProduct = event => {
  event.preventDefault()
  // show the button to clear the party
  // $('.clear-product').show()
  // define the owner of the party
  // define the user that is signed in
  const userId = store.user.id
  // return when equal

  // console.log(party.user)
  // console.log(userId)
  // return product.user === userId

  api.getProduct()
    .then((res) => {
      // console.log(res)
      // //console.log('api is making the request. formData is', formData)
      const results = res.products.filter(product => product.user_id === userId)
      // console.log(results)
      return results
    })
    // .then(ui.getMyPartySuccess)
    .then((results) => {
      console.log('results =', results)
      if (results.length !== 0) {
        const showMyProductHtml = showMyProductTemplate({ product: results })
        $('.content').html(showMyProductHtml)
        $('.status').text('Products are below!')
      } else if (results.length < 1) {
        onClearProduct()
        $('.status').text('You do not have a product yet')
      }
      // console.log('results  is', results)
    })
    .catch(ui.failure)
}
//
// const onviewProducts = event => {
//   event.preventDefault()
//   // console.log('show items button works')
//   api.getMyProduct()
//     .then(ui.onviewItemsSuccess)
//     .catch(ui.onviewItemsFailure)
//   $('.item').show()
//   $('.default-state').hide()
// }

// const onGetMyProduct = event => {
//   event.preventDefault()
//   // show the button to clear the party
//   $('.clear-product').show()
//   // define the owner of the party
//   // define the user that is signed in
//   const userId = store.user._id
//   // return when equal
//   const myProduct = (product) => {
//     // console.log(party.user)
//     // console.log(userId)
//     return product.user === userId
//   }
//
//   api.getProduct()
//     .then((res) => {
//       // //console.log('api is making the request. formData is', formData)
//       const results = res.product.filter(myProduct)
//       return results
//     })
//     // .then(ui.getMyPartySuccess)
//     .then((results) => {
//       if (results.length !== 0) {
//         const showMyProductHtml = showMyProductTemplate({ product: results })
//         $('.content').html(showMyProductHtml)
//         $('.status').text('Products are below!')
//       } else if (results.length < 1) {
//         $('.status').text('You do not have a product yet')
//       }
//       // console.log('results  is', results)
//     })
//     .catch(ui.failure)
// }
// const onDeleteParty = event => {
//   event.preventDefault()
//   const partyId = $(event.target).data('id')
//   // console.log(partyId)
//   api.deleteParty(partyId)
//     .then(function () {
//       onGetParty(event)
//     })
//     .then($('.user-message').show().text('You deleted the party').fadeOut(3000))
//     .catch(ui.failure)
// }
const onDeleteProduct = event => {
  event.preventDefault()
  const productId = $(event.target).data('id')
  // console.log(productId)
  api.deleteProduct(productId)
    .then(function () {
      onGetMyProduct(event)
    })
    .then($('.user-message').show().text('You deleted the product').fadeOut(3000))
    .then(function (formData) {
      onGetMyProduct(event)
    })
    .catch(ui.failure)
}

// const onUpdateParty = event => {
//   event.preventDefault()
//   const form = event.target
//   // //console.log('in events.js form is', form)
//   const partyId = $(event.target).data('id')
//   const formData = getFormFields(form)
//   // console.log(formData, partyId)
//   api.updateParty(formData, partyId)
//     .then(ui.updateParty)
//     .then(function (formData) {
//       onGetParty(event)
//     })
//     .catch(ui.failure)
// }
const onUpdateProduct = event => {
  event.preventDefault()
  // //console.log('in events.js form is', form)
  const productId = $(event.target).data('id')
  // console.log(productId)
  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData, partyId)
  api.updateProduct(productId, formData)
    .then(function (data) {
      onGetMyProduct(event)
    })
    .then(ui.updateProduct)
    .catch(ui.failure)
}

// const rsvp = []

// const onRsvp = event => {
//   event.preventDefault()
//   // console.log('RSVP button works!')
//   const partyId = $(event.target).data('id')
//   rsvp.push(partyId)
//   // console.log(partyId)
//   api.createRsvp(partyId)
//     .then(ui.rsvpSuccess)
//     .then($(event.target).addClass('hide'))
//     .catch(ui.failure)
// }
//
// const onGetMyRsvp = event => {
//   event.preventDefault()
//   // console.log('Get My RSVP button works!')
//   const partyId = $(event.target).data('id')
//   // console.log(partyId)
//   api.getMyRsvp()
//     .then(ui.getRsvpSuccess)
//     .catch(ui.failure)
// }

const addHandlers = event => {
  // $('#create-party').on('submit', onCreateParty)
  $('#create-product').on('submit', onCreateProduct)
  // $('.get-party').on('click', onGetParty)
  $('.get-product').on('click', onGetProduct)
  // $('#get-all-party').on('click', onGetAllParty)
  // $('#get-all-product').on('click', onGetAllProduct)
  // $('.get-my-party').on('click', onGetMyParty)
  $('.get-my-product').on('click', onGetMyProduct)
  // $('.content').on('click', '.delete', onDeleteParty)
  $('.content').on('click', '.delete-product', onDeleteProduct)
  // $('.content').on('submit', '.update-party', onUpdateParty)
  $('.content').on('submit', '.update-product', onUpdateProduct)
  // $('.clear-party').on('click', onClearParty)
  // $('.clear-product').on('click', onClearProduct)
  // $('.content').on('click', '.rsvp-btn', onRsvp)
  // $('.get-rsvp-btn').on('click', onGetMyRsvp)
}

module.exports = {
  addHandlers,
  onClearProduct
  // onviewProducts
  // onClearProduct,
  // rsvp
}
