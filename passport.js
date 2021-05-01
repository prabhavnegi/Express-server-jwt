const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const passport = require("passport")
let User = require('./models/user.model');

require('dotenv').config();

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}, (jwtPayload, done) => {

    User.findById(jwtPayload.sub)
        .then(user => {
            return done(null, user);
        })
        .catch(err => {
            return done(err);

        });

}));