const express = require("express");
const path = require("path");
require("dotenv").config();

module.exports = {
    init(app){
        app.use(express.static(path.resolve(__dirname, '../../../client-side/dist')));
    }
};