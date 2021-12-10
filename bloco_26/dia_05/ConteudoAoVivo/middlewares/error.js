const { restart } = require("nodemon");

const error = (err, req, res, next) => {

  console.log(err.message);
  
  if(err.status) {
    return res.status(err.status).json({message: `${err.message}`})
  }
  
  return res.status(500).json({message: "Internal error"});
};

module.exports = error;