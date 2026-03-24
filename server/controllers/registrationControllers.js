const emailValidation = require("../helpers/emailvalidation");
const userSchema = require("../models/userSchema");

async function registrationControllers(req, res) {
   const { firstName, lastName, email, password } = req.body

  if (!firstName || !lastName) {
    return res.status(400).json({
      error: "FirstName & lastName is required",
    });
  }

  

  if (!emailValidation(email)) {
    return res.status(400).json({
      error: "Email is not valid",
    });
  }

  try {
    const user = new userSchema({
      firstName,
      lastName,
      email,
      password,
    });

    await user.save();
console.log(user);


    return res.status(200).json({
      message: "Registration successful",
      status: "success",
      data: user
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Server error",
      details: error.message
    });
  }
}

module.exports = registrationControllers;