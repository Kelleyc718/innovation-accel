const mongoose = require("mongoose");
const { Schema } = mongoose;

// Basic user model
const dbUserSchema = new Schema({
  userName: String
});

mongoose.model("dbUsers", dbUserSchema);
