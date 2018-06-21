const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Routes to retrieve all articles and to post a new saved article to the db
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Route to remove specific saved article
router.route("/:id")
  .delete(articleController.remove);

module.exports = router;