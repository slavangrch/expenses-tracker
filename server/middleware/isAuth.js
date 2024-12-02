const jwt = require('jsonwebtoken');
exports.isAuth = async (req, res, next) => {
  try {
    // console.log(req.headers);
    // const authHeader = req.get('Authorization');
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      const error = new Error('Not authorized!');
      error.statusCode = 401;
      throw error;
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      throw Error('Token cannot be decoded');
    }

    req.userId = decoded.id;
    next();
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
