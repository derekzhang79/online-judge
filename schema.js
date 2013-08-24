var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    institute: String,
    city: String,
    roll: String,

    // Required to be distinct
    username: String,

    password: String,
    authcode: String,
    privilege_level: { type: Number, min:0, max:10 },
    creation_date: { type: Date, default: Date.now }
});

var ProblemsSchema = new mongoose.Schema({
    name: String,

    // Required to be distinct
    code: String,

    grading_type: String,
    description: String,

    // The stuff below makes sense only for auto grading
    input_format: String,
    output_format: String,
    constraints: String,
    time_limit: { type: Number, min:0, },
    memory_limit: { type: Number, min:0 },
    sample_input: String,
    sample_output: String,
    num_input_files: Number,

    // Should add up to 100
    input_file_weights: [Number]
});

exports.UserSchema = UserSchema;
//exports.ProblemSchema = ProblemSchema;
