const Users = require("../users/users-model.js");

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(`METHOD: ${req.method} | URL: ${req.path} | ${Date.now()}`);
  next();
}

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  try {
    const { id } = req.params;
    const user = await Users.getById(id);
    if (user) {
      req.user = user;
      next();
    } else {
      next({ status: 404, message: "user not found" });
    }
  } catch (err) {
    next({ err });
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  if (req.body.name) {
    next();
  } else {
    next({ status: 400, message: "missing required name field" });
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
