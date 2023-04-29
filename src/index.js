const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

// Routes
const indexRoutes = require("./routes");
const participantesRoutes = require("./routes/users");
const preguntasRoutes = require("./routes/questions");

// Swagger
const { swaggerDocs } = require("./util/swagger");

const app = express();

// Midlewares
app.use(bodyParser.json());
app.use(fileUpload());

// Routes
app.use("/", require("./routes"));

app.listen(3000, () => {
  swaggerDocs(app);
});
