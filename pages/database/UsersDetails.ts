import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

});

const Users =mongoose.model("Users") || mongoose.model("Users", UsersSchema);
module.exports = Users;