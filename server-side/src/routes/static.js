const express = require("express");
const path = require("path");
const router = express.Router();
 
router.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../../../client-side/dist', 'index.html'));
  });
module.exports = router;