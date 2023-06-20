const express = require("express");
const router = express.Router();
const passport = require("passport");

const itemController = require("../controllers/itemController");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  itemController.getAllItems
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  itemController.getItemById
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  itemController.createItem
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  itemController.updateItem
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  itemController.deleteItem
);

module.exports = router;
