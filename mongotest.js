var mongoose =  require('mongoose');

mongoose.connect('mongodb://127.0.0.1/blogly');
//var db = mongoose.connection;

var userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    createdOn: { type: Date, 'default': Date.now },
    modifiedOn: Date,
    lastLogin: Date
});

// create a model from the the userSchema called 'user'
var user = mongoose.model('User', userSchema);


var User = mongoose.model('User', userSchema);
var userOne = new User({
  name: "Joe",
  email: "joebloggs@jbloggs.com"
});

var userTwo = new User({
  name: "Steve",
  email: "joecloggs@scloggs.com"
});

console.log(userOne.name);

userOne.save(function (err) {
  if (err) return handleError(err);
})
// ==================================================================
// Callback fuctions below here
// ==================================================================

//mongoose.connection.on('error', console.error('Connection error'));
// mongoose.connection.once('open', function(callback) {
//   pass;
// });

// if node closes then also close the database connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});
