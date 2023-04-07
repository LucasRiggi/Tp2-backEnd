const express = require("express");

const controleursCours = require("../controllers/cours-controleurs");
const router = express.Router();

router.get("/:coursId", controleursCours.getCoursById);

router.get("/professeurs/:professeurId", controleursPlace.getPlacesByProfesseurId);

router.post('/', controleursCours.creerCours);

router.patch('/:coursId', controleursCours.updateCours);

router.delete('/:coursId', controleursCours.supprimerCours);

module.exports = router;



