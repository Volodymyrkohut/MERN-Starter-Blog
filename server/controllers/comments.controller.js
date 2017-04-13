import Comments from "../models/comments.js";



//Show all comments
export function getComments(req,res){
  Comments.find().sort('dateAdded').exec((err, comment) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ comment });
  });
}



//ADD comment
export function addComments(req, res) {
  if (!req.body.comment.cuid || !req.body.comment.content || !req.body.comment.author) {
      res.status(403).end();
  }
  const newComment = new Comments(req.body.comment)
  newComment.save((err,data)=>{
  	if(err){
  		res.status(500).send(err);
  	}
  	else{
  		console.log("Done");
  	}
  	 res.json({comment: data})

  })
}


