import callApi from '../../util/apiCaller';

export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}
export function addCommentsRequest(comment) {
  return (dispatch) => {
    return callApi('comment', 'post', {
      comment: {
        cuid: comment.cuid,
        author: comment.author,
        content: comment.content,

      },
    }).then(res => dispatch(addComment(res.comment))).catch((err)=> console.log("err",err));
  };
}


export function commentGet(){
  return (dispatch)=>{
    return callApi('comments').then(res => {
        res.comment.map((item)=>{
        dispatch(addComment(item))
      })
    })
  }
}