const { Router } = require("express");
const router = Router();
const path = require("path");
const product = [];
router.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "panel.html"));
  product.push(req.body.fistName)
});

exports.route = router;
exports.product = product;
