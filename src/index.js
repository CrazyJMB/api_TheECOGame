const express = require("express");
const fileUpload = require("express-fileupload");

// Routes
const indexRoutes = require("./routes");
const participantesRoutes = require("./routes/users");
const preguntasRoutes = require("./routes/questions");

// Swagger
const { swaggerDocs } = require("./util/swagger");

const app = express();

// Midlewares
app.use(express.json());
app.use(fileUpload());

// Routes
app.use("/", require("./routes"));

app.listen(3000, () => {
  swaggerDocs(app);
});
