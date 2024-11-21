const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bfhlRoutes = require("./routes/bfhlRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); 
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use("/bfhl", bfhlRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
