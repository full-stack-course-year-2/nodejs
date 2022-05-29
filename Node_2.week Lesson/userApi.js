const express = require('express');
const router = express.Router();

const users = [
    { id: 4, name: 'John', age: '30' },
    { id: 5, name: 'J', age: '33' },
];

router.get('/', function (req, res) {
    res.send('<h1>Hello users</h1>');
});
router.get('/:id', function (req, res) {
    console.log('bu bir kullaniciyi iste');
    const user = users.find((user) => user.id === parseInt(req.params.id));
    res.send(`istenilen user  ${JSON.stringify(user)}`);
});

router.delete('/:id', function (req, res) {
    console.log('bu bir kullaniciyi sil');
    //const user = users.find((user) => user.id === parseInt(req.params.id));
    //res.send(`istenilen user  ${JSON.stringify(users)}`);
});

router.get('/users', function (req, res) {
    res.send(JSON.stringify(users));
});

module.exports = router;
