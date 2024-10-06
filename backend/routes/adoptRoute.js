const express = require('express');
const router = express.Router();
const { adoptionCreate, searchPetsByType, getAdoptions,getPetDetails } = require('../controller/AdoptController'); 

router.post('/sell-pet', adoptionCreate);
router.get('/search', searchPetsByType);
router.get('/view-all', getAdoptions);
router.get('/view-pet/:id', getPetDetails);


module.exports = router;
