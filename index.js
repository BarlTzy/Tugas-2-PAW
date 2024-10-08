const express = require("express");
const path = require("path"); // Import path untuk mengatur direktori
const app = express(); // Pastikan untuk memanggil express()
const port = 3000; // Ubah port ke 3000 agar lebih umum

// Set EJS sebagai view engine
app.set("view engine", "ejs");

// Tentukan folder views
app.set("views", path.join(__dirname, "views"));

// Rute untuk halaman utama
app.get("/", (req, res) => {
    res.send("Hello");
});

// Rute untuk halaman Home
app.get("/Home", (req, res) => {
    res.send("Home");
});

// Rute untuk halaman About
app.get("/About", (req, res) => {
    res.render("about"); // Render file about.ejs
});

// Rute untuk halaman Contact
app.get("/Contact", (req, res) => {
    res.send("Contact");
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
