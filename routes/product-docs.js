/**
 * @swagger
 * components:
 *   schemas:
 *     Produk:
 *       type: object
 *       required:
 *         - nama_produk
 *         - harga
 *         - kategori_id
 *       properties:
 *         produk_id:
 *           type: integer
 *           description: ID produk yang akan otomatis di generate auto increment
 *         nama_produk:
 *           type: string
 *           description: Nama dari produk
 *         harga:
 *           type: integer
 *           description: Harga dari produk
 *         kategori_id:
 *           type: string
 *           description: ID kategori untuk jenis kategori produk
 *       example:
 *         produk_id: 1
 *         nama_produk: Tinta Inkoming
 *         harga: 12000
 *         kategori_id: B2

 * @swagger
 * tags:
 *   name: Produk
 *   description: Semua Rest Api untuk Produk
 * /api/product/addProduct:
 *   post:
 *     summary: Menambah produk baru
 *     tags: [Produk]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             example:
 *                  nama_produk: Tinta
 *                  harga: 10000
 *                  kategori_id: B5
 *     responses:
 *       200:
 *         description: Berhasil menambah produk.
 *         content:
 *           application/json:
 *             example:
 *                  status: ok
 *                  message: Success add product
 *       400:
 *         description: Some server error
 *         content:
 *           application/json:
 *              example:
 *                  status: bad_request
 *                  errorMessage: err.message
 * 
 * /api/product/getAll:
 *   get:
 *     summary: Menampilkan semua produk
 *     tags: [Produk]
 *     responses:
 *       200:
 *         description: Berhasil menampilkan data produk
 *         content:
 *           application/json:
 *             example:
 *                  status: ok
 *                  message: berhasil
 *                  data: []
 *       400:
 *         description: Some server error
 *         content:
 *           application/json:
 *              example:
 *                  status: bad_request
 *                  errorMessage: err.message
 * 
 * /api/product/getByFilter/{filter}:
 *   get:
 *     summary: Menampilkan semua produk berdasarkan filter nama produk dan status produk
 *     tags: [Produk]
 *     parameters:
 *          - in: path
 *            name: filter
 *            required: true
 *            description: Gabungan dari nama_produk dan status_id
 *            schema: 
 *              type: string
 *     responses:
 *       200:
 *         description: Berhasil menampilkan data produk
 *         content:
 *           application/json:
 *             example:
 *                  status: ok
 *                  message: berhasil
 *                  data: []
 *       400:
 *         description: Some server error
 *         content:
 *           application/json:
 *              example:
 *                  status: bad_request
 *                  errorMessage: err.message
 * 
 * /api/product/deleteProduct/{produk_id}:
 *   delete:
 *     summary: Menghapus produk berdasarkan produk_id
 *     tags: [Produk]
 *     parameters:
 *          - in: path
 *            name: produk_id
 *            required: true
 *            description: ID dari produk
 *            schema: 
 *              type: integer
 *     responses:
 *       200:
 *         description: Berhasil menghapus produk
 *         content:
 *           application/json:
 *             example:
 *                  status: ok
 *                  message: success delete product
 *                  data: []
 *       400:
 *         description: Some server error
 *         content:
 *           application/json:
 *              example:
 *                  status: bad_request
 *                  errorMessage: err.message
 * 
 * /api/product/editProduct/{produk_id}:
 *   put:
 *     summary: Mengubah atau mengedit produk
 *     tags: [Produk]
 *     parameters:
 *         - in: path
 *           name: produk_id
 *           description: ID dari produk
 *           schema:
 *              type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             example:
 *                  nama_produk: Tinta
 *                  harga: 10000
 *                  kategori_id: B5
 *                  status_id: A2
 *     responses:
 *       200:
 *         description: Berhasil menambah produk.
 *         content:
 *           application/json:
 *             example:
 *                  status: ok
 *                  message: Success edit product
 *       400:
 *         description: Some server error
 *         content:
 *           application/json:
 *              example:
 *                  status: bad_request
 *                  errorMessage: err.message
 * 
 * @swagger
 * tags:
 *   name: Kategori Produk
 *   description: Semua Rest Api untuk Kategori
 * /api/kategori/all:
 *   get:
 *     summary: Menampilkan semua kategori
 *     tags: [Kategori Produk]
 *     responses:
 *       200:
 *         description: Berhasil menampilkan data kategori produk
 *         content:
 *           application/json:
 *             example:
 *                  status: ok
 *                  message: berhasil
 *                  data: []
 *       400:
 *         description: Some server error
 *         content:
 *           application/json:
 *              example:
 *                  status: bad_request
 *                  errorMessage: err.message
 */
