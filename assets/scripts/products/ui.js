'use strict'

const getProductTemplate = require('../templates/product-listing.handlebars')
const getMyProductTemplate = require('../templates/myproduct-listing.handlebars')
const getAllProductTemplate = require('../templates/allproduct-listing.handlebars')
// const getMyRsvpTemplate = require('../templates/myrsvp-listing.handlebars')
// const getFlamingoTemplate = require('../templates/flamingo-listing.handlebars')
// const getMyFlamingoTemplate = require('../templates/myflamingo-listing.handlebars')
// const getAllFlamingoTemplate = require('../templates/allparty-listing.handlebars')

const getMyProductSuccess = (data) => {
  // console.log('get party success is working!')
  // console.log(data)
  // const showPartyHtml = getPartyTemplate({ party: data.party })
  if (data.product.length !== 0) {
    const showMyProductHtml = getMyProductTemplate({ product: data.product })
    //    //console.log('party is not empty')
    $('.content').html(showMyProductHtml)
    $('.get-product').show()
    $('.content').show()
    $('.clear-product').show()
    $('.status').text('Products are below!')
  } else if (data.product.length < 1) {
    // console.log('party is empty')
    $('.status').text('please log a product!')
    $('.content').hide()
    $('.get-product').show()
  }
}
// const getMyProductSuccess = (data) => {
//   // console.log('get party success is working!')
//   // console.log(data)
//   // const showPartyHtml = getPartyTemplate({ party: data.party })
//   if (data.product.length !== 0) {
//     const showMyProductHtml = getMyProductTemplate({ product: data.product })
//     //    //console.log('party is not empty')
//     $('.content').html(showMyProductHtml)
//     $('.get-product').show()
//     $('.content').show()
//     $('.clear-product').show()
//     $('.status').text('Your products are below!')
//   } else if (data.product.length < 1) {
//     // console.log('party is empty')
//     $('.status').text('No logged products, please creat a product!')
//     $('.content').hide()
//     $('.get-product').show()
//   }
// }

const getAllProductSuccess = (data) => {
  // const showPartyHtml = getPartyTemplate({ party: data.party })
  if (data.product.length !== 0) {
    const showAllProductHtml = getAllProductTemplate({ product: data.product })
    //    console.log('party is not empty')
    $('.content').html(showAllProductHtml)
    $('.get-product').show()
    $('.content').show()
    $('.clear-product').show()
    $('.status').text('products are below!')
  } else if (data.product.length < 1) {
    // conso//console'party is empty')
    $('.status').text('No recorded product, please enter a product!')
    $('.content').hide()
    $('.get-product').show()
  }
}

// const getAllproductSuccess = (data) => {
//   // const showPartyHtml = getPartyTemplate({ party: data.party })
//   if (data.flamingo.length !== 0) {
//     const showAllFlamingoHtml = getAllFlamingoTemplate({ party: data.flamingo })
//     //    console.log('party is not empty')
//     $('.content').html(showAllFlamingoHtml)
//     $('.get-flamingo').show()
//     $('.content').show()
//     $('.clear-flamingo').show()
//     $('.status').text('Flamingos are below!')
//   } else if (data.flamingo.length < 1) {
//     // conso//console'party is empty')
//     $('.status').text('No flamingos, please create a flamingo!')
//     $('.content').hide()
//     $('.get-party').show()
//   }
// }

// const getPartySuccess = (data) => {
//   // console.log('get party success is working!')
//   /// /console.log('data is:', data)
//   $('.clear-party').show()
//   // const showPartyHtml = getPartyTemplate({ party: data.party })
//   if (data.party.length !== 0) {
//     const showPartyHtml = getPartyTemplate({ party: data.party })
//     //    console.log('party is not empty')
//     $('.content').html(showPartyHtml)
//     // $('.get-party').hide()
//     $('.content').show()
//     $('.status').text('Parties are below!')
//   } else if (data.party.length < 1) {
//     // console.log('party is empty')
//     $('.status').text('No recorded party, please enter a party!')
//     $('.content').hide()
//     $('.clear-party').show()
//   }
// }
const getProductSuccess = (data) => {
  // console.log('get party success is working!')
  /// /console.log('data is:', data)
  $('.clear-product').show()
  // const showPartyHtml = getPartyTemplate({ party: data.party })
  if (data.product.length !== 0) {
    const showProductHtml = getProductTemplate({ product: data.product })
    //    console.log('party is not empty')
    $('.content').html(showProductHtml)
    // $('.get-party').hide()
    $('.content').show()
    $('.status').text('Products are below!')
  } else if (data.product.length < 1) {
    // console.log('party is empty')
    $('.status').text('No Products, please logg a product!')
    $('.content').hide()
    $('.clear-product').show()
  }
}
const createProductSuccess = (data) => {
  $('.status').text('you logged your product')
  $('form').trigger('reset')
}
// const createProductSuccess = (data) => {
//   $('.status').text('you created a product')
//   $('form').trigger('reset')
// }

const clearProduct = () => {
  $('.content').empty()
  // $('.clear-party').hide()
  $('.get-product').show()
  $('.status').text('Products are hidden')
}

// const clearFlamingo = () => {
//   $('.content').empty()
//   // $('.clear-party').hide()
//   $('.get-flamingo').show()
//   $('.status').text('flamingos are hiding')
// }
const updateProduct = () => {
  $('form').trigger('reset')
  $('.status').text('you updated your product')
  $('.user-message').show().text('You updated the product')
}
// const updateFlamingo = () => {
//   $('form').trigger('reset')
//   $('.status').text('you updated your flamingo')
//   $('.user-message').show().text('You updated the flamingo').fadeOut(3000)
// }
// const rsvpSuccess = () => {
//   $('.status').text("You have RSVP'd to a party!")
// }

const failure = () => {
  $('.status').text('yikes.. something went wrong')
}

// const rsvpFailure = () => {
//   $('.status').text('Please sign in to rsvp for a party!')
//   // console.log('got to rsvp failure')
// }

const showProductSuccess = () => {
  $('.status').text('products are below!')
}

// const showFlamingoSuccess = () => {
//   $('.status').text('flamingos are below!')
// }

// const getRsvpSuccess = data => {
//   // console.log('test')
//   const showMyRsvpHtml = getMyRsvpTemplate({ rsvps: data.rsvps })
//   // console.log(showMyRsvpHtml)
//   $('.content').html(showMyRsvpHtml)
//   $('.status').text('RSVPs are below!')
// }

module.exports = {
  getMyProductSuccess,
  getAllProductSuccess,
  getProductSuccess,
  createProductSuccess,
  clearProduct,
  updateProduct,
  failure,
  showProductSuccess
  // rsvpFailure,
  // getAllPartySuccess,
  // showPartySuccess,
  // clearFlamingo,
  // getMyFlamingoSuccess,
  // getAllFlamingoSuccess,
  // getFlamingoSuccess,
  // createFlamingoSuccess,
  // updateFlamingo,
  // showFlamingoSuccess
  // getOneParty
}
