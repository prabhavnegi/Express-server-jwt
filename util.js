const jwt = require("jsonwebtoken");
require('dotenv').config();



const SK = process.env.SECRET_KEY


function gen(users) {
    const _id = users._id
    const expiresIn = '1h'

    const payload = {
        sub: _id,
        iat: Date.now()
    }

    const token = jwt.sign(payload, SK, { expiresIn: expiresIn })

    veri = jwt.verify(token, SK, (err, verifiedJwt) => {
        if (err) {
            return err.message
        } else {
            return verifiedJwt
        }
    })

    return {
        token: "bearer " + token,
        expires: expiresIn,
        email: users._id,
        veri: veri
    }
}

module.exports.gen = gen;