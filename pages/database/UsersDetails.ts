import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

});

const Users = mongoose.model("Users", UsersSchema);

// console.log(Users)ffrfrfr
// module.exports = Users;
export default Users