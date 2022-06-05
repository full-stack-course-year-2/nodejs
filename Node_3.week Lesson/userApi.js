const express = require('express');
const router = express.Router();
const User = require('./db');

router.get('/', function (req, res) {
    res.send('<h1>Hello users</h1>');
});

// router.get('/:id', function (req, res) {
//     console.log('bu bir kullaniciyi iste');
//     const user = users.find((user) => user.id === parseInt(req.params.id));
//     res.send(`istenilen user  ${JSON.stringify(user)}`);
// });

// router.delete('/:id', function (req, res) {
//     console.log('bu bir kullaniciyi sil');
//     //const user = users.find((user) => user.id === parseInt(req.params.id));
//     //res.send(`istenilen user  ${JSON.stringify(users)}`);
// });

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.send(error);
    }
    //    User.find({}, function (err, users) {})
    //    User.find({}).then(function (users) {}).catch(function (err) {});
});

router.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const users = await User.findOne({ email: id });
        res.send(users);
    } catch (error) {
        res.send(error);
    }
});

router.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = req.body;

    try {
        const users = await User.updateOne({ _id: id }, user);
        res.send(users);
    } catch (error) {
        res.send(error);
    }
    //    User.find({}, function (err, users) {})
    //    User.find({}).then(function (users) {}).catch(function (err) {});
});

router.delete('/users/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const response = await User.deleteOne({ _id: id });
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

router.post('/users', async (req, res) => {
    const userInfo = req.body;
    const newUser = new User(userInfo);
    try {
        const user = await newUser.save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }

    // newUser.save(function (err) {
    //     if (err) return handleError(err);
    //     res.send(user);
    // });
});

module.exports = router;
