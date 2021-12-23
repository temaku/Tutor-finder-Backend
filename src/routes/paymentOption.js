const express = require('express');
const paymentOptionController = require('../controllers/paymentOptionController');
const authController = require('../Controllers/authControllers');
const adminController = require('../Controllers/adminControllers');

const router = express.Router();

router
  .route('/')
  .get(adminController.protect,adminController.restrictTo('admin'),authController.restrictTo('student'),paymentOptionController.getAllPaymentOption)
  .post(
    paymentOptionController.createPaymentOption
  );

router
  .route('/:id')
  .get(paymentOptionController.getPaymentOption)
  .patch(
    paymentOptionController.updatePaymentOption
  )
  .delete(
    adminController.protect,adminController.restrictTo('admin'),
    paymentOptionController.deletePaymentOption
  );

module.exports = router;