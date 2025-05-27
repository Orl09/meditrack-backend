const express = require('express');

const router = express.Router();

const medRecController = require('../Controllers/medRecController');

router.get("/:id", (req, res) => {
    medRecController.getAllRecords(req.params.id).then(resultFromController => res.send(resultFromController));
});

router.post("/add", (req, res) => {
    medRecController.addRecord(req.body).then(result => res.send(result));
});

router.put("/update/:id", (req, res) => {
    medRecController.updateRecord(req.params.id, req.body).then(result => res.send(result));
})


module.exports = router;