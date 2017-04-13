import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
//import Click from  
// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchPost } from '../../PostActions';
import { addCommentsRequest, commentGet } from '../../CommentActions';
// Import Selectors
import { getPost} from '../../PostReducer';
import { getComments} from '../../CommentReducer';
import Com from "../Comment/comment";

export function PostDetailPage(props) {
 
  return (
    <div>
      <Helmet title={props.post.title} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.post.title}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {props.post.name}</p>
        <p className={styles['post-desc']}>{props.post.content}</p>
      </div>
      
      <Com Click={(text,author)=>{props.dispatch(addCommentsRequest({author,content:text,cuid:props.params.cuid}))}} 
           comment={props.comment}
          props={props}
      />
    </div>
  
  );
}

// Actions required to provide data for this component to render in sever side.
PostDetailPage.need = [params => {
  return fetchPost(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post:     getPost(state, props.params.cuid),
    comment: getComments(state, props.params.cuid),
  };
}




PostDetailPage.propTypes = {
  // comment: PropTypes.shape({
  //   content: PropTypes.string.isRequired,
  //    author: PropTypes.string.isRequired,
  //  }).isRequired,

  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(PostDetailPage);
