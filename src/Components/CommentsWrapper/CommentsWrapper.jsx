import "./CommentsWrapper.css";
import Comment from "../Comment/Comment";
function CommentsWrapper(props) {
  return (
    <div className="CommentsWrapper">
      {props.AllComments.map((comment) => {
        return (
          <Comment
            key={comment.commentid}
            comment={comment}
            deleteComment={props.deleteComment}
            postid={props.postid}
            updateComment={props.updateComment}
          ></Comment>
        );
      })}
    </div>
  );
}

export default CommentsWrapper;
