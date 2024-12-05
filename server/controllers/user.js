const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation error!');
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      const error = new Error("User with this email doesn't exist");
      error.statusCode = 404;
      throw error;
    }

    const passwordIsEqual = await bcrypt.compare(password, user.password);

    if (!passwordIsEqual) {
      const error = new Error('Wrong password!');
      error.statusCode = 422;
      throw error;
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: '7d' }
    );

    res.status(200).json({ token, message: 'Logged successfully' });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation error!');
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      const error = new Error('User with this email already exist');
      error.statusCode = 422;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ username, email, password: hashedPassword });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
