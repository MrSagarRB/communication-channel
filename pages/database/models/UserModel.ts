const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

let UserModelSchema = new mongoose.Schema(
  
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  

  },
  {
    timestamps:true
  }


);

UserModelSchema.methods.matchPassword = async function (enteredPassword:string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserModelSchema.pre("save", async function (next:any) {
  // @ts-ignore next line 
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
   // @ts-ignore next line 
  this.password = await bcrypt.hash(this.password, salt);
}
)


mongoose.models={}


 let User= mongoose.model("Users", UserModelSchema);




 

  export default User