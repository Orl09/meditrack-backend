const express = require('express');

const router = express.Router();

const userController = require('../Controllers/userController');

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
  userController.fileUpload(req.file, req.params.id).then(result => res.send(result));
})

router.get("/get", (req, res) => {
    userController.getAllUsers().then(resultFromController => res.send(resultFromController));
});

//data for login
router.get("/getUsers", (req, res) => {
    userController.getUsers().then(resultFromController => res.send(resultFromController));
});

router.post("/add", (req, res) => {
    userController.registerUser(req.body).then(result => res.send(result))
});

//user data from ID

router.get("/:id", (req, res) => {
    userController.findUser(req.params.id).then(result => res.send(result));

})

//update user
router.put("/update/:id", (req, res) => {
    userController.updateUser(req.params.id, req.body).then(result => res.send(result));
})



module.exports = router;