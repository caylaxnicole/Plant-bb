const express = require("express");
const router = express.Router();


app.use(express.static(path.resolve(__dirname, '../client-side/dist')));

 
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client-side/dist', 'index.html'));
  });
module.exports = router;