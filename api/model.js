const router = require("express").Router();
const { Model } = require("../db/models");

module.exports = router;

router.get("/", function(req, res, next) {
  Model.findAll()
    .then(models => res.json(models))
    .catch(next);
});
