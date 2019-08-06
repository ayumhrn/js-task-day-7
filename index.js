var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res) {
  res.send('test berhasil')
});

router.get('/user/:username', function (req, res) {
  let username = req.params.username;
  res.send(username)
})

router.get('/tambah/:angka1/:angka2', (req, res) => {
  let result = parseInt(req.params.angka1) + parseInt(req.params.angka2);
  console.log(result)
  res.send(`hasil penjumlahan adalah ${result}`);
})

router.get('/tambah', (req, res) => {
  let result = parseInt(req.query.angka1) + parseInt(req.query.angka2)
  res.send(`Hasil penjumlahan adalah ${result}`)
})  /* http://127.0.0.1:3000/tambah?angka1=2&angka2=4 (cara pemanggilannya, hasilny adalah 6)
    di query, endpointnya cukup sampai /tambah saja */


module.exports = router;
