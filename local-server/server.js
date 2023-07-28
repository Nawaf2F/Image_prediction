const express = require('express');
const app = express();

app.use(function(req, res, next) {
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    next();
});

app.use(express.static('../static'));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
    }
);