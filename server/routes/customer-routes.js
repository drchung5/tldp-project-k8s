import express from 'express'
var customerRouter = express.Router()
import customerController from '../controllers/customer-controller.js'

// var count = 0;

// import mongoose from 'mongoose'

customerRouter.get('/', function(req, res) {
  customerController.getAllCustomers(req, res)
  // mongoose.connect('mongodb://database:27017/project', (err) => {
  //   res.send(err)
  // })
  // res.send('****')
})

customerRouter.get('/:customer_id', function(req, res) {
  customerController.getCustomerByID(req, res)
})

customerRouter.post('/', function(req, res) {
  customerController.postCustomer(req, res)
})

customerRouter.get('/byname/:customer_name', function(req, res) {
  customerController.getCustomerByName(req, res)
})

customerRouter.delete('/:customer_id', function(req, res) {
  customerController.deleteCustomerByID(req, res)
})

export default customerRouter