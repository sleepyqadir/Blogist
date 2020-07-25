import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "DELETE_BLOGPOST":
      return state.filter((blog) => blog.id !== action.payload);
    case "EDIT_BLOGPOST":
      return state.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (newBlog, callback) => {
    dispatch({
      type: "ADD_BLOGPOST",
      payload: newBlog,
    });
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return (newBlog, callback) => {
    console.log(newBlog);
    dispatch({
      type: "EDIT_BLOGPOST",
      payload: newBlog,
    });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({
      type: "DELETE_BLOGPOST",
      payload: id,
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
