const express = require("express");
const home = require("./routes/home");
const panel = require("./routes/panel");
const product = require("./routes/product");
const app = express();
//
app.use(express.urlencoded({ extended: true }));
app.use(home);
app.use(panel.route);
app.use(product);
//
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`run server PORT : ${PORT}`);
});
