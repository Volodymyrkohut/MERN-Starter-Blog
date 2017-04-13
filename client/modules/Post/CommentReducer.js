import { ADD_COMMENT } from './CommentActions';



//CommentReducer//////////////////////////////////////////////////////
export const  Comment = (state = {comment: [] }, action) =>{
  switch(action.type){
    case ADD_COMMENT :
      return {
        comment: [...state.comment,action.comment]
      };
  default:
    return state;
  }
}; 

export const getComments = (state,cuid) => state.Comment.comment.filter( (comments) => {
  return comments.cuid === cuid
})

