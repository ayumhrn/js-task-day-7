var express = require('express');
var router = express.Router();

let users = [
  {
    id: "1",
    nama: "ayu",
    email: "maharani.ayu98@gmail.com"
  },
  {
    id: "2",
    nama: "rafli",
    email: "akilarafli@gmail.com"
  }
];

// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// codingan post get try by myself

router.get('/', (req, res) => {
  res.send(users);
})

router.get('/page/:id', (req, res) => {
  let id = req.params.id
  let user = users.filter((user) => user.id === id)
  res.json({
    results: user[0]
  })
})

router.post('/page', (req, res) => {
  let newuser = req.body;
  users.push(newuser);
  res.send(users);
})

router.delete('/page/:id', (req, res) => {
  let id = req.params.id;
  let user = users.filter((user) => user.id !== id);
  users = user;
  res.json({ results: users });
}) /* params for get, body for post */

router.put('/page/:id', (req, res) => {
  let id = req.params.id;
  let user = users.find((user) => user.id === id);

  if (user) {
    let user = users.filter((user) => user.id !== id);
    users = user

    let updateUser = req.body;
    users.push(updateUser)

    res.send(updateUser);
    
  } else {  
    res.status(500).send('User not found.');
  }


})

//code from mentor but the result is same
// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.status(200).json({
//     results: userArr
//   })
// });

// router.post('/', (req, res, next) => {
//   const newUser = {
//     name: req.body.name,
//     email: req.body.email
//   }
//   userArr.push(newUser)
//   res.status(201).json({ results: userArr })
// })

// router.get('/:name', (req, res, next)=> {
//   let name = req.params.name
//   let user = userArr.filter((user) => user.name === name )
//   res.json({
//     results: user[0]
//   })
// })

module.exports = router;
