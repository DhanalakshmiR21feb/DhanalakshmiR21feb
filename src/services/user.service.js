const Users = require("../models/user.model");

class userService {
  save = async (doc) => {
    const result = await doc.save();
    return result;
  };
create = async (userBody) => {
    if (await Users.isEmailTaken(userBody.email)) {
      throw new ApiError(httpStatus.OK, "Email already taken");
    }
    const newDoc = new Users(userBody);
   const user = await this.save(newDoc);
    return user;
  };
  findAllUsers = async () => {
    const result = await Users.find({});
    return result;
  };
  update= async (req, res) => {
    const { id } = req.params;
      const filter = {
      _id: id,
    };
    const update = req.body;
    const result = await Users.findOneAndUpdate(filter, update, { new: true });
    return res.json(result);
  };
  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Users.findOneAndDelete({ _id:id });
      res.json(result);
    } catch (err) {
      res.sendStatus(500);
    }
  };
}
module.exports = userService;
