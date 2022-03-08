const express = require("express");

 const hostname = 'localhost';
 const port = 3000;

const dishesRoute = require("./routes/dishesRoute");
const promotionsRoute = require("./routes/promotionsRoute");
const leadersRoute = require("./routes/leadersRoute");

const app = express();

app.use(express.json());

app.use("/dishes", dishesRoute);
app.use("/promotions", promotionsRoute);
app.use("/leaders", leadersRoute);

app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});