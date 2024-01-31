import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("users/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = response.json();
  return data;
});

const initialState = {
  posts: [],
  status: "idle",
  author: -1,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addReaction: (state, action) => {
      const { id, name } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.reactions[name]++;
      }
    },
    addPost: (state, action) => {
      const { title, body } = action.payload;
      const newPost = {
        id: state.posts.length + 1,
        title,
        body,
        reactions: {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        },
      };
      state.posts.push(newPost);
    },
    filterAuthor: (state, action) => {
      state.author = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "succeeded";
      const loadedPosts = action.payload.map((post) => {
        post.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        return post;
      });
      state.posts = loadedPosts;
      return state;
    });
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = "loading";
      return state;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "rejected";
      return state;
    });
  },
});

export const { addReaction, addPost, filterAuthor } = postsSlice.actions;
export default postsSlice.reducer;
