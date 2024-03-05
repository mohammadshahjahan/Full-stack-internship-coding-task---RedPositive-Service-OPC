const mongoose = require("mongoose");
const express = require("express");
const { Person } = require("../db");

const router = express.Router();

router.get("/getAllPersonsData", async (req, res) => {
  try {
    const personsData = await Person.find();
    res.status(200).json(personsData);
  } catch (error) {
    console.error("Error finding Persons:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/addPerson", async (req, res) => {
  try {
    const { name, phoneNumber, email, hobbies } = req.body;
    const newPerson = new Person({
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      hobbies: hobbies,
    });
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    console.error("Error adding Person:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/updatePerson/:id", async (req, res) => {
  try {
    const { name, phoneNumber, email, hobbies } = req.body;
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        hobbies: hobbies,
      },
      { new: true }
    );

    if (!updatedPerson) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.json(updatedPerson);
  } catch (error) {
    console.error("Error updating Person:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
