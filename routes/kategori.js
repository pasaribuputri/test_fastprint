import express, { query } from "express";
import pool from "../helpers/database.js";
import dotenv from "dotenv";
import ResponseAPI from "../helpers/response.js";

dotenv.config({ path: ".env-local" });

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const queryGet = "SELECT * FROM kategori";
    const result = await pool.query(queryGet);
    const respon = new ResponseAPI()
      .setStatus(200)
      .setHeader("Content-Type", "application/json")
      .setHeader("Acccess-Control-Allo-Methods", "GET")
      .setHeader("Cache-Control", "no-store,no-cache")
      .setBody({
        status: "ok",
        message: "success",
        data: result,
      });
    respon.send(res);
  } catch (err) {
    const respon = new ResponseAPI()
      .setStatus(400)
      .setHeader("Content-Type", "application/json")
      .setHeader("Access-Control-Allow-Methods", "GET")
      .setHeader("Cache-Control", "no-store,no-cache")
      .setBody({
        status: "bad_request",
        errorMessage: err.message,
      });
    respon.send(res);
  }
});

export default router;
