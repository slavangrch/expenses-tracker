const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.login = async (req, res, next) => {
  try {
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

    res.status(200).json({ user, message: 'Logged successfully' });
  } catch (error) {
    console.log(error);
  }
};

exports.register = async (req, res, next) => {
  try {
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
    console.log(error);
  }
};
