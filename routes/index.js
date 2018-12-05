/**
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')
const LOG = require('../utils/logger.js')

LOG.debug('START routing')
const router = express.Router()

router.get('/', (req, res, next) => {
  LOG.debug('Request to /')
  res.render('index.ejs', { title: 'Express App' })
})
router.use('/product', require('../controllers/product.js'))

router.use('/order', require('../controllers/order.js'))

router.use('/orderLineItem', require('../controllers/orderLineItem.js'))

router.get('/home', (req,res)=>{
  res.render('home')
})

LOG.debug('END routing')
module.exports = router
