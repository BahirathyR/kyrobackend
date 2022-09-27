// @ts-check
const mongoose = require("mongoose");
console.log("schema")
const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 50,
    default: ""
  },
  email: {
    required: true,
    type: String,
    unique: true
  },

  phone: {
    type: String,
    unique: true,
    }
});

const Profile = mongoose.model("Profile", profileSchema);
exports.Profile = Profile;