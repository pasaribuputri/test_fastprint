import express, { query } from "express";
import pool from "../helpers/database.js";
import dotenv from "dotenv";
import ResponseAPI from "../helpers/response.js";

dotenv.config({ path: ".env-local" });

const router = express.Router();

router.get("/getAll", async (req, res) => {
  try {
    const sqlQuery =
      "SELECT p.produk_id, p.nama_produk, p.harga, k.nama_kategori, s.nama_status FROM produk p, status s, kategori k WHERE p.kategori_id=k.kategori_id and p.status_id=s.status_id ORDER BY p.produk_id DESC";
    const result = await pool.query(sqlQuery);
    const respon = new ResponseAPI()
      .setStatus(200)
      .setHeader("Content-Type", "application/json")
      .setHeader("Access-Control-Allow-Methods", "GET")
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

router.get("/getByFilter/:filter", async (req, res) => {
  const [nama_produk, status] = req.params.filter.split("&");
  console.log(req.params.filter.split("&"));
  console.log(!!nama_produk);
  console.log(!!status);
  try {
    const sqlQuery = `SELECT p.produk_id, p.nama_produk, p.harga, k.nama_kategori, s.nama_status FROM produk p JOIN status s ON p.status_id = s.status_id JOIN kategori k ON p.kategori_id = k.kategori_id WHERE ${
      nama_produk && status
        ? `(p.nama_produk LIKE '%${nama_produk}%' && p.status_id = "${status}")`
        : nama_produk
        ? `p.nama_produk LIKE '%${nama_produk}%'`
        : status
        ? `p.status_id = "${status}"`
        : ""
    } ORDER BY produk_id DESC`;
    const result = await pool.query(sqlQuery);
    const respon = new ResponseAPI()
      .setStatus(200)
      .setHeader("Content-Type", "application/json")
      .setHeader("Access-Control-Allow-Methods", "GET")
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

router.post("/addProduct", async (req, res) => {
  try {
    const { nama_produk, harga, kategori_id } = req.body;
    if (!!!nama_produk || !!!harga || !!!kategori_id) {
      const respon = new ResponseAPI()
        .setStatus(400)
        .setHeader("Content-Type", "application/json")
        .setHeader("Access-Control-Allow-Methods", "POST")
        .setHeader("Cache-Control", "no-store,no-cache")
        .setBody({
          status: "bad_request",
          errorMessage: "Must not empty",
        });
      respon.send(res);
    } else {
      const sqlQuery = `INSERT INTO produk(nama_produk, harga, kategori_id, status_id) VALUES(?,?,?,"A1")`;
      await pool.query(sqlQuery, [nama_produk, harga, kategori_id]);
      const response = new ResponseAPI()
        .setStatus(200)
        .setHeader("Content-Type", "application/json")
        .setHeader("Access-Control-Allow-Methods", "POST")
        .setHeader("Cache-Control", "no-store,no-cache")
        .setBody({
          status: "ok",
          message: "Success add product",
        });
      response.send(res);
      return;
    }
  } catch (err) {
    const respon = new ResponseAPI()
      .setStatus(400)
      .setHeader("Content-Type", "application/json")
      .setHeader("Access-Control-Allow-Methods", "POST")
      .setHeader("Cache-Control", "no-store,no-cache")
      .setBody({
        status: "bad_request",
        errorMessage: err.message,
      });
    respon.send(res);
  }
});

router.put("/editProduct/:produk_id", async (req, res) => {
  try {
    const { nama_produk, harga, kategori_id, status_id } = req.body;
    const { produk_id } = req.params;
    const querySearch =
      "SELECT COUNT(*) > 0 as isExist FROM produk WHERE produk_id=?";
    const queryEdit =
      "UPDATE produk SET nama_produk=?, harga=?, kategori_id=?, status_id=? WHERE produk_id=?";
    const produk = await pool.query(querySearch, [produk_id]);
    if (!!!nama_produk || !!!harga || !!!kategori_id || !!!status_id) {
      const respon = new ResponseAPI()
        .setStatus(400)
        .setHeader("Content-Type", "application/json")
        .setHeader("Access-Control-Allow-Methods", "PUT")
        .setHeader("Cache-Control", "no-store,no-cache")
        .setBody({
          status: "bad_request",
          errorMessage: "Must not empty",
        });
      respon.send(res);
      return;
    } else if (!!!produk[0].isExist) {
      const respon = new ResponseAPI()
        .setStatus(400)
        .setHeader("Content-Type", "application/json")
        .setHeader("Access-Control-Allow-Methods", "PUT")
        .setHeader("Cache-Control", "no-store,no-cache")
        .setBody({
          status: "bad_request",
          errorMessage: "Product not found",
        });
      respon.send(res);
      return;
    } else {
      await pool.query(queryEdit, [
        nama_produk,
        harga,
        kategori_id,
        status_id,
        produk_id,
      ]);
      const response = new ResponseAPI()
        .setStatus(200)
        .setHeader("Content-Type", "application/json")
        .setHeader("Access-Control-Allow-Methods", "PUT")
        .setHeader("Cache-Control", "no-store,no-cache")
        .setBody({
          status: "ok",
          message: "Success edit product",
        });
      response.send(res);
      return;
    }
  } catch (err) {
    const respon = new ResponseAPI()
      .setStatus(400)
      .setHeader("Content-Type", "application/json")
      .setHeader("Access-Control-Allow-Methods", "PUT")
      .setHeader("Cache-Control", "no-store,no-cache")
      .setBody({
        status: "bad_request",
        errorMessage: err.message,
      });
    respon.send(res);
  }
});

router.delete("/deleteProduct/:produk_id", async (req, res) => {
  try {
    const { produk_id } = req.params;
    const querySearch =
      "SELECT COUNT(*) > 0 as isExist FROM produk WHERE produk_id=?";
    const queryDelete = "DELETE FROM produk WHERE produk_id=?";
    const produk = await pool.query(querySearch, [produk_id]);
    if (!!produk[0].isExist) {
      await pool.query(queryDelete, [produk_id]);
      const response = new ResponseAPI()
        .setStatus(200)
        .setHeader("Content-Type", "application/json")
        .setHeader("Access-Control-Allow-Methods", "DELETE")
        .setHeader("Cache-Control", "no-store,no-cache")
        .setBody({
          status: "ok",
          message: "Success delete product",
        });
      response.send(res);
      return;
    } else {
      const respon = new ResponseAPI()
        .setStatus(400)
        .setHeader("Content-Type", "application/json")
        .setHeader("Access-Control-Allow-Methods", "DELETE")
        .setHeader("Cache-Control", "no-store,no-cache")
        .setBody({
          status: "bad_request",
          errorMessage: "Product not found",
        });
      respon.send(res);
      return;
    }
  } catch (err) {
    const respon = new ResponseAPI()
      .setStatus(400)
      .setHeader("Content-Type", "application/json")
      .setHeader("Access-Control-Allow-Methods", "DELETE")
      .setHeader("Cache-Control", "no-store,no-cache")
      .setBody({
        status: "bad_request",
        errorMessage: err.message,
      });
    respon.send(res);
  }
});

export default router;
