const router = require("express").Router();
const appController = require("../../controllers/appController");

// Matches with "/api/records"
router.route("/")
  .get(appController.findAll)
  .post(appController.create);

// Matches with "/api/records/:id"
router
  .route("/:id")
  .get(appController.findById)
  .put(appController.update)
  .delete(appController.remove);

module.exports = router;
