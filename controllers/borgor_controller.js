//create the router for the app

const express = require("express");
const router = express.Router();

router.get("/", function(res, req){
    console.log("helllo woorld");
});

module.exports = router;