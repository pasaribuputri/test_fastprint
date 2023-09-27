# Test Fast print

Aplikasi ini menggunakan REST API untuk komunikasi dengan server.

- [Pendahuluan](#pendahuluan)
- [Instalasi](#instalasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Menggunakan Aplikasi](#menggunakan-aplikasi)

## Pendahuluan

Aplikasi ini dibangun menggunakan [Express.js](https://expressjs.com/) sebagai backend dan HTML5 & CSS sebagai frontend. Aplikasi ini memanfaatkan database MYSQL untuk menyimpan data product.

## Instalasi
1. Clone repositori ini ke Komputer Anda :
   ``bash
   git clone https://github.com/pasaribuputri/test_fastprint.git
   ``
2. Install dependensi 
   
  ``npm add express mariadb nodemon dotenv swagger-jsdoc swagger-ui-express``

3. Import file test_fastprint.sql yang ada dalam folder helpers ke dalam database Anda.


4. Tambahkan file .env-local dengan konfigurasi berikut ke dalam direktori utama proyek Anda:
    ``
     PORT=8000
    DB_HOST=localhost
    DB_USER=root
    DB_NAME=test_fastprint
  ``

## Menjalankan Aplikasi

``npm start ``

## Menggunakan Aplikasi

- Setelah menjalankan aplikasi, Anda dapat mengaksesnya melalui browser dengan alamat  http://localhost:8000/views/home/.

- Untuk mengakses dokumentasi API, silakan akses http://localhost:8000/api-docs/.
