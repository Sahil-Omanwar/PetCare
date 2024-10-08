const adopt = require('../models/AdoptionModel.js'); // Ensure correct path

const adoptionCreate = async (req, res) => {
    try {
        const { pet_name, pet_category, breed, ownerName, age, about, address, contact, healthStatus, vaccinated, adoptionFee, photoUrl } = req.body;

        if (!pet_name || !pet_category || !breed || !ownerName || !age || !address || !contact) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const response = await adopt.create({ pet_name, pet_category, breed, ownerName, age, about, address, contact, healthStatus, vaccinated, adoptionFee, photoUrl });
        res.status(200).json({
            message: "Adoption successfully created",
            success: true,
            data: response
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating adoption entry", success: false });
    }
};

const getAdoptions = async (req, res) => {
    try {
        const adoptions = await adopt.find().limit(10);
        
        if (adoptions.length === 0) {
            return res.status(404).json({ message: "No pets available for adoption", success: false });
        }

        res.status(200).json({ pets: adoptions, success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error retrieving adoption data", success: false });
    }
};


const searchPetsByType = async (req, res) => {
    const petType = req.query.type; // Get the pet type from query parameters

    try {
        const pets = await adopt.find({ pet_category: petType }); // Search by pet_category
        if (pets.length === 0) {
            return res.status(404).json({ message: 'No pets found of this type', success: false });
        }
        res.status(200).json({ pets }); // Send the list of found pets
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving pets', success: false });
    }
};

const searchPetsById = async (req, res) => {
    try {
        const { type } = req.query;

        if (!type) {
            return res.status(400).json({ message: "Type parameter is required", success: false });
        }

        const pets = await adopt.find({ pet_: type });
        res.status(200).json({ pets, success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error retrieving pets", success: false });
    }
};
const getPetDetails = async (req, res) => {
    const petId = req.params.id; // Get the pet ID from the URL parameters

    try {
        const pet = await adopt.findById(petId); // Find pet by ID
        if (!pet) {
            return res.status(404).json({ message: 'Pet not found', success: false });
        }
        res.status(200).json(pet); // Send pet details as response
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving pet details', success: false });
    }
};
module.exports = {
    adoptionCreate,
    searchPetsByType,
    getAdoptions,
    getPetDetails 
};
