"use strict";
const app = require("../app");
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});


