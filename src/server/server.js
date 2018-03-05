const app = require('./app');
const mongoose = require('mongoose');

const port = 3005;

mongoose.connect('mongodb://localhost/silverspoon');
app.listen(port, () => { console.log(`listening on port: ${port}`); });
