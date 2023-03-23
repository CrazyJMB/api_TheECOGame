const express = require("express");

// Routes
const indexRoutes = require("./routes/index.routes");
const participantesRoutes = require("./routes/users.router");
const preguntasRoutes = require("./routes/questions.router");

// Swagger
const { swaggerDocs } = require("./util/swagger");

const app = express();

// Midlewares
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/users", participantesRoutes);
app.use("/questions", preguntasRoutes);

app.listen(3000, () => {
  swaggerDocs(app);
});
