import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./postsSlice";
import AddPostForm from "./AddPostForm";
import ReactionButton from "./ReactionButton";
import Users from "../users/Users";

const PostsList = (props) => {
  const posts = useSelector((state) => state.posts.posts);
  const author = useSelector((state) => state.posts.author);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filterPosts = posts.filter((post) => {
    if (author !== -1) return post.userId == author;
    return post;
  });

  const test = () => {
    console.log(author);
    console.log(posts);
    console.log(filterPosts);
  };
  return (
    <div>
      <h1>Posts lists</h1>
      <button onClick={() => test()}>Test data</button>

      <Users />
      <AddPostForm />
      <ul>
        <div>
          {filterPosts?.map((post) => {
            return (
              <div
                key={post.id}
                style={{
                  maxWidthwidth: "300px",
                  border: "2px white solid",
                  borderRadius: "30px",
                  margin: "20px",
                  padding: "30px",
                }}
              >
                <h5>{post.title}</h5>
                <p>{post.body}</p>
                <ReactionButton post={post} />
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default PostsList;
