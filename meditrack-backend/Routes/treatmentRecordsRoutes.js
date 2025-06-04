const express = require('express');

const router = express.Router();
const multer = require('multer');
const path = require('path');
const treatmentRecordsController = require('../Controllers/treatmentRecordsController');


let storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, './uploads')
  },
  filename: function (req, file, cb) {
  let extArray = file.mimetype.split("/");
  let extension = extArray[extArray.length - 1];
  cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
  });


const upload = multer({ storage: storage })

router.route("/upload").post(upload.single('image'), treatmentRecordsController.fileUpload);

router.post("/upload", upload.single('image'), (req,res) => {
  treatmentRecordsController.fileUpload;
})


router.post("/add", (req, res) => {
    treatmentRecordsController.addTreatment(req.body).then(result => res.send(result))
});

router.get("/:id", (req, res) => {
  treatmentRecordsController.findTreatment(req.params.id).then(resultFromController => res.send(resultFromController));
});

//update treatment
router.put("/update/:id", (req, res) => {
    treatmentRecordsController.updateTreatment(req.params.id, req.body).then(result => res.send(result));
})


module.exports = router;

