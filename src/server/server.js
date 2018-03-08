const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 3005;
const connection = process.env.PORT ? `mongodb://${process.env.UNAME}:${process.env.PWORD}@ds259768.mlab.com:59768/menu_comp` : 'mongodb://localhost/silverspoon';

mongoose.connect(connection);
app.listen(port, () => { console.log(`listening on port: ${port}`); });
