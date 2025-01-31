import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    price: String,
    quantity: String,
    name: String,
    creator: String,
    selectedFile: String,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;