const Post = require('../models/post');


// Create Post
exports.createPost = async (req, res) => {
    try {
        const { title, description } = req.body;
        const image = req.file ? req.file.filename : null;

        const post = await Post.create({ title, description, image });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Read Posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Read Posts by Id
exports.getPostsById = async (req, res) => {
    try {
        const posts = await Post.findById(req.params.id);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Update Post
exports.updatePost = async (req, res) => {
    try {
        const { title, description } = req.body;
        const image = req.file ? req.file.filename : undefined;

        const updatedData = { title, description };
        if (image) updatedData.image = image;

        const post = await Post.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Delete Post

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
