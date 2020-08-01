const mongoose = require("mongoose");
const connection = mongoose.connect('mongodb://localhost/myintern', {  //this myintern should be the database name in which u are storing data if database name is myintern then ok.
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB ...'))
.catch(err => console.error('Could not connect to MongoDB:27017', err));
mongoose.set('useCreateIndex', true);

module.exports = [].concat(connection);
