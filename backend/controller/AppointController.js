const mongoose = require('mongoose');
const appoint = require('../models/AppointmentModel.js');

const createAppoint = async (req, res) => {
    try {
        const { ownerName, petCategory, address, time, date, reason, } = req.body;
        if (!ownerName || !petCategory || !address || !time || !date || !reason) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const response = await appoint.create({ ownerName, petCategory, address, time, date, reason });
        res.status(200).json({
            message: "Appointment successfully registered",
            success: true,
            data: response
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating appointment entry", success: false });
    }
};

module.exports = {
    createAppoint
};
