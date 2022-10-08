const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();
router.post(
  "/register",
  userController.createNewUser
);
router.delete(
  "/:userId",
  userController.deleteUsersWithId
);
router.patch(
  "/update",
  userController.updateUserWithId
);
router.get(
  "/",
  userController.getAllUsers
);
module.exports = router;
