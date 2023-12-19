const { passport } = require("../libs/PassportUtils.js")
const path = require("path")





var express = require('express'),
    loginrouter = express.Router();

loginrouter


    .get('/login', (req, res) => {

        const filepath = path.join(__dirname, "..", "..", "public", "login", "index.ejs")
        res.render(filepath)

    })

    .post('/login', passport.authenticate("local-login", {
        failureRedirect: "/login"
    }),
        (req, res, next) => {
            res.redirect("/")
        }
    )


    .post('/logout', (req, res) => {

        req.logout((err) => {
            logger.debug(err ? err : "Log out")
        })

        res.redirect("/")

    })






module.exports = { loginrouter };