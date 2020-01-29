'use strict'

const events = require('./events.js')
const productEvents = require('./products/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.after-auth').hide()
  $('.task-list').hide()
  events.addAuthHandlers()
  productEvents.addHandlers()
})
