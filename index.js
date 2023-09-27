import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/product.js";
import kategoriRouter from "./routes/kategori.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config({ path: ".env-local" });
const port = process.env.PORT;
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Product Express API",
      version: "0.1.0",
      description: "Merupakan CRUD Api sederhana tentang produk.",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/product", productRouter);

app.use("/api/kategori", kategoriRouter);

app.listen(port, () => console.log(`Berjalan pada port ${port}`));
