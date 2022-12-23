exports.createPostValidator = (req,res, next) =>{
    //title
    req.check("title","Write a title").notEmpty();
    req.check("title","title must be between 10 to 120 characters").isLength({
        min:10,
        max:120
    });
    //body
    req.check("body","Write a body").notEmpty();
    req.check("body","body must be between 10 to 2000 characters").isLength({
        min:10,
        max:2000
    });

//check for errors

const errors  = req.validationErrors();
//if error show the first one as they happen

if(errors){
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({error:firstError});
}

next();

}