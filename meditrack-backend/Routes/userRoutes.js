const express = require('express');

const router = express.Router();

const userController = require('../Controllers/userController');

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