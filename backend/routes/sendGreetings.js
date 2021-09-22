var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    try {
        console.log("req..........", req);
        res.send("Successfully sent.");
    } catch (error) {
        next;
    }
});

module.exports = router;
