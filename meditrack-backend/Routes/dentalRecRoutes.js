const express = require('express');

const router = express.Router();

const dentalRecController = require('../Controllers/dentalRecController');

router.get("/:id", (req, res) => {
    dentalRecController.getAllRecords(req.params.id).then(resultFromController => res.send(resultFromController));
});

router.post("/add", (req, res) => {
    dentalRecController.addRecord(req.body).then(result => res.send(result));
});

router.put("/update/:id", (req, res) => {
    dentalRecController.updateRecord(req.params.id, req.body).then(result => res.send(result));
})


module.exports = router;