const express = require('express');
const treatmentRecordsController = require('../Controllers/treatmentRecordsController');
const router = express.Router();
const multer = require('multer');



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


router.put("/upload/:id", upload.single('image'), (req,res) => {
  treatmentRecordsController.fileUpload(req.file, req.params.id).then(result => res.send(result));
})

router.put("/uploadMultiple/:id", upload.array('images', 10), (req, res) => {
  treatmentRecordsController.multipleFileUpload(req.files, req.params.id)
    .then(result => res.send(result))
    .catch(err => res.status(500).send({ error: err.message }));
});

router.put("/removeFile/:id", (req, res) => {
    treatmentRecordsController.deleteAttachment(req.params.id, req.body).then(result => res.send(result))
});

router.post("/add", (req, res) => {
    treatmentRecordsController.addTreatment(req.body).then(result => res.send(result))
});

router.get("/:id", (req, res) => {
  treatmentRecordsController.findTreatment(req.params.id).then(resultFromController => res.send(resultFromController));
});

router.get("/attachments/:id", (req, res) => {
  treatmentRecordsController.getAttachments(req.params.id).then(resultFromController => res.send(resultFromController));
});

//update treatment
router.put("/update/:id", (req, res) => {
    treatmentRecordsController.updateTreatment(req.params.id, req.body).then(result => res.send(result));
})

//archive attachment
router.get("/archiveAttachment/:id", (req, res) => {
    treatmentRecordsController.archiveFile(req.params.id).then(result => res.send(result));
})

module.exports = router;

