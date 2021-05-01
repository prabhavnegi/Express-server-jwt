const router = require('express').Router();
let User = require('../models/user.model');
const e = require('express');
const bcrypt = require('bcrypt');
const util = require("../util.js")
const passport = require("passport")
const jwt = require("jsonwebtoken");
require('../passport.js');


router.route('/').get((req, res) => {
    User.find()
        .then(users =>{ 
                res.json(users)
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const phoneno = Number(req.body.phoneno);
    const password = req.body.password;
    const gender = req.body.gender;
    const dob = Date.parse(req.body.dob);

    const newUser = new User({
        username,
        email,
        phoneno,
        password,
        gender,
        dob
    });

    //encryption of password

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash
            newUser.save()
                .then(() => res.json('User added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        });
    });
});

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.status(200).send(req.user.email);
});


//login 
router.route('/login').post((req, res) => {
    User.findOne({ 'email': req.body.email })
        .then(users => {
            if (users) {
                bcrypt.compare(req.body.password, users.password).then(isMatch => {
                    if (isMatch) {
                        const jwt = util.gen(users)
                        res.json({ msg: "success", token: jwt.token, veri: jwt.veri });
                    } else
                        res.send("incorrect password")
                });
            } else
                res.send("User does not exist")
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;