const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    quota: { type: Number, default: 5 },
    borrowedBooks: [{
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
        borrowDate: { type: Date, default: Date.now },
        dueDate: { type: Date, required: true },
        returned: { type: Boolean, default: false }
    }]
})

const UserModel = mongoose.model("User", userSchema)

module.exports = { UserModel }