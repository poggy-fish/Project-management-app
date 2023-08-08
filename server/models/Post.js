const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId : String,
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    text: {
        type: String,
        required: true,
    },
    increasePriority: {
        type: Map,
        of: Boolean,
    },
    comments: {
        type: Array,
        default: []
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;