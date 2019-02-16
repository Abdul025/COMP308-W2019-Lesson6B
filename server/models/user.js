//require modules for our use model

let mongoose = require('mongoose');
let passportLocalMongoose = require(passport - local - mongoose);

let userSchema = mongoose.Schema({
    username: {
        type: String,
        default: '',
        trim: true,
        require: "username is required"

    },
    /*taken out because password will be encrypted by passport-local-mongoose
    password: {
        type: String,
        default: '',
        trim: true,
        require: "passport is required"
    }
    */
    email: {
        type: String,
        default: '',
        trim: true,
        require: "email is required"

    },
    displayname: {
        type: String,
        default: '',
        trim: true,
        require: "Display Name is required"

    },
    created: {
        type: Date,
        default: Date.now
    }
},
    {
        collection: "users"
    }
);

//configure options for the UserSchema

let options = ({
    missingPasswordError: "Wrong / Missing password"
});

userSchema.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', userSchema);