import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST, REMOVE_POSTS } from "../actions/post_actions";

const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      delete newState[action.post.id];
      return newState;
    // case REMOVE_POSTS:
    //   newState = null;
    //   return newState;
    default:
      return oldState;
  }
}

export default postsReducer