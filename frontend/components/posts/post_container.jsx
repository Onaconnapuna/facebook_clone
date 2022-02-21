import {connect} from 'react-redux';
import PostItem from './post';
import { fetchComments, deleteComment, createComment } from '../../actions/comment_actions'
import { deletePost } from '../../actions/post_actions';
  
  const mapStateToProps = (state) => {
    return {
      comments: Object.values(state.entities.comments),
      // currentUser: state.session.currentUser
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchComments: (postId) => dispatch(fetchComments(postId)),
      deletePost: (postId)=> dispatch(deletePost(postId)),
      deleteComment: (commentId) => dispatch(deleteComment(commentId)),
      createComment: (comment) => dispatch(createComment(comment))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)
