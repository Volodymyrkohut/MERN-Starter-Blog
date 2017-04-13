import React, { Component, PropTypes } from 'react';
import { addCommentsRequest, commentGet } from '../../CommentActions';
import style from "./comment.css";
// Import Selectors

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Com extends Component{
  constructor(props){
    super(props)
    this.state = {
      content: "",
      author: ""
    }
  } 
  componentDidMount(){
      this.props.props.dispatch(commentGet())
  }
  textValue(e){
    this.setState({content: e.target.value})
  }
  authorValue(e){
    this.setState({author:e.target.value})
  }
  func(){
    const {content,author} = this.state
    this.props.Click(content,author)
    // this.setState({content: ""})ocal
  }
  render(){
    return (
      <div>
        <p>Author</p>
        <input type="text" onChange={this.authorValue.bind(this)}/><br/>
        <p>your comment</p>
        <textarea placeholder="content" onChange={this.textValue.bind(this)}></textarea><br/>
        <button onClick={this.func.bind(this)}>submit</button>

         <div >
           
            {
              this.props.comment.map((item,index)=>{

                return (
                  <div key={item._id} className={style['showComments']}>
                    
                     <p className={style['commentAuthor']} >{item.author}</p><br />
                     <p className={style['commentContent']}>{item.content}</p><br />
                     <p className={style['commentDate']}>{item.dateAdded}</p><br/>
                  </div>
                  )
              }).reverse()
            }
            
      </div>

      </div>
      )
  }
}



export default Com;
