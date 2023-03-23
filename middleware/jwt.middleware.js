const jwt = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      jwt.verify(token, "privatekey", (err, decoded) => {
        if (err) {
          res.send({ error: true, message: "Unauthorized User" });
        } else {
          req.user = decoded;
          next();
        }
      });
    } else {
      res.send({ error: true, Message: "Token not found" });
    }
  },
};
