const Post = require('../models/post');

exports.getPosts = (req, res) => {
    //res.send("hi there");
    // res.json({
    //     posts:[
    //         {title:'first post'},
    //         {title:'second post'}
    //     ]
    // });
    const posts = Post.find().select(" _id title body ").then(posts => {
        res.json({ posts});
    }).catch(err => console.log(err));

};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    //console.log(req.body);
    // post.save((err,result)=>{
    //     if(err){
    //         return res.status(400).json({
    //             error:err
    //         });
    //     }
    //     return res.status(200).json({
    //             post: result
    //     });
    // });
    post.save().then(result => {
        res.json({
            post: result
        });
    })

}
