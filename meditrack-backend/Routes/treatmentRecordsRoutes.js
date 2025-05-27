const express = require('express');

const router = express.Router();
const multer = require('multer');
const path = require('path');
const treatmentRecordsController = require('../Controllers/treatmentRecordsController');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../Public/Files');
    },
    filename: (req, file, cb) => {
      const uniqueName = Date.now() + '-' + file.originalname;
      cb(null, uniqueName);
    }
  });

const upload = multer({ storage });



router.get("/:id", (req, res) => {
    treatmentRecordsController.findTreatment(req.params.id).then(resultFromController => res.send(resultFromController));
});

router.post("/add", (req, res) => {
    treatmentRecordsController.addTreatment(req.body).then(result => res.send(result))
});

//update treatment
router.put("/update/:id", (req, res) => {
    treatmentRecordsController.updateTreatment(req.params.id, req.body).then(result => res.send(result));
})


module.exports = router;

