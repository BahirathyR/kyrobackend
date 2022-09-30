// @ts-check
const mongoose = require("mongoose");
console.log("schema")
const profileSchema = new mongoose.Schema({
      firstname: {
            type: String,
            required: true,
            minlength: 0,
            maxlength: 50,
            default: ""
      },
      lastname: {
            type: String,
            required: true,
            minlength: 0,
            maxlength: 50,
            default: ""
      },
      displayname: {
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

      phoneno1: {
            type: String,
            unique: true,
      },
      phoneno2: {
            type: String,
            unique: true,
      },
      location: {
            type: String,
            required: true,
            minlength: 0,
            maxlength: 50,
            default: ""
      }
});

const Profile = mongoose.model("Profile", profileSchema);
exports.Profile = Profile;