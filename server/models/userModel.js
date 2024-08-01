const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For password hashing

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        maxLength: 20,
        default: "guest",
        required: true,
        unique: true // Ensure unique usernames
    },
    password: {
        type: String,
        maxLength: 60, // Increased length for hashed passwords
        required: true
    },
    email: {
        type: String,
        maxLength: 30,
        required: true,
        unique: true // Ensure unique emails
    },

    profilePicture: {
        type: String, // URL or path to profile picture
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Example roles
        default: 'user'
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Pre-save hook to hash password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
