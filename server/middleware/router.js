const express = require("express");
const taskController = require("../controllers/taskcontroller.js");
const userController = require("../controllers/usercontroller.js");

const router = express();
router.use(taskController);
router.use(userController);

module.exports = router;