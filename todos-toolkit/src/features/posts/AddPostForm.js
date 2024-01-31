import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

const AddPostForm = (props) => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({ title: titleRef.current.value, body: bodyRef.current.value })
    );
    titleRef.current.value = "";
    bodyRef.current.value = "";
  };
  return (
    <>
      <section>
        <h2> Add Post</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Post Title</label>
          <input name="postTitle" type="text" ref={titleRef} />

          <label htmlFor="postContent">Post Constent</label>
          <input name="postContent" type="text" ref={bodyRef} />

          <input type="submit" value="Save" />
        </form>
      </section>
    </>
  );
};

export default AddPostForm;
