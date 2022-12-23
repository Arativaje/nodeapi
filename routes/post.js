const express = require('express');
const {getPosts, createPost} = require('../controller/post');
const validator = require('../validator');

const router = express.Router();

router.get('/',getPosts);
router.post('/post',validator.createPostValidator, createPost);
// exports.getPosts = (req,res)=>{
//     // res.send("hi there");

// };

module.exports = router;

// module.exports ={
//     getPosts
// }