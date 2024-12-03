const express = require('express');
const userController = require('../controllers/user');
const body = require('express-validation');

const router = express.Router();

router.post(
  '/login',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').trim().isLength({ min: 8 }),
  ],
  userController.login
);
router.post(
  '/register',
  [
    body('username').trim().isLength({ min: 3 }),
    body('email').isEmail().normalizeEmail(),
    body('password')
      .trim()
      .isLength({ min: 8 })
      .custom((value, { req }) => {
        const confirmedPassword = req.body['confirm-password'];
        return value === confirmedPassword;
      })
      .withMessage('Invalid password!'),
  ],
  userController.register
);

module.exports = router;
