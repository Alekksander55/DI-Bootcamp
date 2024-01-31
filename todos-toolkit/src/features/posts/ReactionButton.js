import { useDispatch } from "react-redux";
import { addReaction } from "./postsSlice";

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

  const renderReactions = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        onClick={() => {
          dispatch(addReaction({id:post.id, name}));
        }}
        key={name}
        style={{ backgroundColor: "transparent", border: "0px" }}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <>{renderReactions}</>;
};

export default ReactionButton;
