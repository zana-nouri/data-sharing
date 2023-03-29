const { Router } = require("express");
const panel = require("./panel");

const router = Router();
router.post("/product", (req, res) => {
  res.send(Object.values(req.body).join("-"));
  console.log(panel.product);
});
module.exports = router;
