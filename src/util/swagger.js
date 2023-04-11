// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");

// Metadata info about our API
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TheECOGame API",
      version: "1.0.0",
      description: "This is TheECOGame API description XD",
    },
  },
  apis: ["./routes/*.js"],
};

// Docs in JSON format
const swaggerSpec = swaggerJsDoc(options);

// Function to setup our docs
const swaggerDocs = (app) => {
  app.use(
    "/swagger",
    swaggerUI.serve,
    swaggerUI.setup(swaggerSpec, { explorer: true })
  );
  app.get("/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
};

module.exports = { swaggerDocs };
