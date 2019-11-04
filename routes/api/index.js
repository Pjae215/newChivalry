const path = require("path");
const router = require("express").Router();
const recordsRoutes = require("./records");
// const googleRoutes = require("./google");

// Book routes
router.use("/records", recordsRoutes);

// // Google Routes
// router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
