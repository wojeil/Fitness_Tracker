const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");




//api route
router.use("/api", apiRoutes);
//html routes
router.use("/", htmlRoutes);





module.exports = router