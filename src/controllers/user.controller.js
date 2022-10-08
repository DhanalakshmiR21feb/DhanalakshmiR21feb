const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

const createNewUser = async (req, res) => {
  try {
    const newUserDoc = await UserServiceInstance.create(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allTheUsers = await UserServiceInstance.findAllUsers();
    res.json(allTheUsers);
  } catch (err) {
    res.status(404);
  }
};

const deleteUsersWithId= async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServiceInstance.delete({ _id: id });
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
};

const updateUserWithId = async (req, res) => {
  const { id } = req.params;

  const filter = {
    _id: id,
  };
  const data = req.body;
  const result = await UserServiceInstance.delete(filter, data, { new: true });
  return res.json(result);
};

module.exports = {
  createNewUser,
  getAllUsers,
  deleteUsersWithId,
  updateUserWithId,
  };
