const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index);
router.get("/getPlant", (req, res) => {
    res.send({
        plantType: 'peperomia',
        plantId: 5,
        plantName: "obtusifolia"
    })
} );

module.exports = router;