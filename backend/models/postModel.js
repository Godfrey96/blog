import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        // reuired: true,
        unique: true
    },
    description: {
        type: String,
        // required: true,
    },
    photo: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: false
    }
},
    {
        timestamps: true
    }
)

const Post = mongoose.model('Post', postSchema)

export default Post