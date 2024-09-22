const express = require('express');
const mongoose = require("mongoose");

const register = require('../models/RegisterModel.js');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Use async/await instead of .then()
    const user = await register.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password incorrect");
      }
    } else {
      res.json("No record exists");
    }
  } catch (error) {
    // Handle any errors that might occur during the process
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = loginUser;
