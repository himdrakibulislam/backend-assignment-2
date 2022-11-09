const express = require('express');
const tourController = require('../controllers/tour.controller')
const router = express.Router();

router
     .route("/trending")
     .get(tourController.getTrendingTour)
router
     .route("/cheapest")
     .get(tourController.getCheapestTour)
     
router
     .route("/")
     .get(tourController.getTours)
     .post(tourController.createTour);

router
     .route("/:id")
     .get(tourController.getById)
     .patch(tourController.updateById);

module.exports = router;