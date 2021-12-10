const auth = (req, res, next) => {
  const { token } = req.headers;

  if(!token) next ({status: 401, message: 'Token not found'});
  if(token !== "admin") next ({status: 403, message: 'Not Authorized'});

  next();

};

module.exports = auth;