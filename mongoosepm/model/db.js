var mongoose =  require('mongoose');
var dbURI = 'mongodb://127.0.0.1/blogly';

// connect to the local mongo db
mongoose.connect(dbURI);

var userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    createdOn: { type: Date, 'default': Date.now },
    modifiedOn: Date,
    lastLogin: Date
});

varprojectSchema = new mongoose.Schema({
  projectName: String,
  createdOn: Date,
  modifiedOn: { type: Date, default: Date.now },
  createdBy: String,
  tasks: String
});

var userModel = mongoose.model('User', userSchema);

var userOne = new User

// ==================================================================
// Callback fuctions below here
// ==================================================================
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
})

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

// if node closes then also close the database connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});
