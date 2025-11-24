const db = require('./db.config');

// Model product (berisi query dasar)
const Product = {
    getAll: callback => {
        db.query('SELECT * FROM product', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM product WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO product (nama,deskripsi,harga,foto) VALUES (?, ?, ?, ?)', [data.nama, data.deskripsi, data.harga, data.foto], callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE product SET nama = ?, deskripsi = ?, harga = ?, foto = ? WHERE id = ?', [data.nama, data.deskripsi, data.harga, data.foto, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM product WHERE id = ?', [id], callback);
    },
};

module.exports = Product;