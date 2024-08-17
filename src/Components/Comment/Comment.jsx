import { useState } from "react";
import './Comment.css'

function Comment({ comment, postid, deleteComment, updateComment }) {
  const [showEditSection, setShowEditSection] = useState(false);
  const [inputValue, setInputValue] = useState(comment.commentContent);

  const [postId] = useState(postid);
  const [commentId] = useState(comment.commentid);

  function handleDeleteComment() {
    deleteComment(postId, commentId);
  }

  function handleEditComment() {
    const neweditSectionValue = !showEditSection;
    setShowEditSection(neweditSectionValue);
  }

  function handleOnChange(event) {
    setInputValue(event.target.value);
  }

  function handleUpdateButton() {
    setShowEditSection(false);
    updateComment(inputValue, postId, commentId);
  }
  return (
    <div className="Comment">
      {showEditSection == true ? (
        <>
          <input className="commentinput" value={inputValue} onChange={handleOnChange}></input>
          <button  className="update" onClick={handleUpdateButton}>Update</button>
        
        </>
      ) : (
        <div>

        <img src={comment.commenticon}/>
        <p>{comment.commentContent}</p>
        </div>
      )}

      <button className="delete" onClick={handleDeleteComment}>Delete comment</button>

      <button  className="edit" onClick={handleEditComment}>Edit</button>
    </div>
  );
}

export default Comment;
