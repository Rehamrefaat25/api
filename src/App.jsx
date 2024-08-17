import { useState } from "react";
import "./App.css";
import NewPost from "./Components/AddNewPost/NewPost";
import Post from "./Components/Post/Post";
import amy from '../public/assets/images/amy.png'
import max from "../public/assets/images/max.png"
import reply from '../public/assets/images/icon-reply.svg'
import rams from '../public/assets/images/rams.png'

function App() {
  const[ArrayOfObjects,setArrayOfObjects]=useState([
    {
      likes: 0,
      id: 1,
      usericon:amy,
      username:"amyrobson",
      time:"1 month ago",
      content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
       replyicon:reply,
       comments: [
         {
           commentid: 1,
             commentContent:"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
           commenticon:rams
         }
       ]
   },
     
       
   {likes: 4,
   id: 2,
   usericon: max,
   username: "maxblagun",
   time: "2 weeks ago",
   content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
   replyicon:reply,
    comments: []
     }
   
  ])
 
// new post
  function addNewPost(PostContent) {
    let newPostObject = {
      likes: 0,
      id: ArrayOfObjects.length + 1,
      content: PostContent,
      username: "juliusomo",
      time:"just now",
      usericon:somo,
      replyicon:reply
,
      comments: [],
    };
    let newArrayofobjects = [...ArrayOfObjects, newPostObject];
    setArrayOfObjects(newArrayofobjects);
  }
// delete post
  function deleteItem(PostId) {
    const newArrayAfterDelete = ArrayOfObjects.filter((post) => {
      return post.id != PostId;
    });
    setArrayOfObjects(newArrayAfterDelete);
  }
// reply
  function addNewComment(commentContent, id) {
    let myOldPost = ArrayOfObjects.filter((post) => post.id == id)[0];
    let oldCommentCount = myOldPost.comments.length;
    let newCommentObject = {
      commentContent: commentContent,
      commentid: oldCommentCount + 1,
    };
    let newArrayAfterUpdate = ArrayOfObjects.map((currentPost) => {
      if (currentPost.id == id) {
        currentPost.comments.push(newCommentObject);
      }
      return currentPost;
    });
    setArrayOfObjects(newArrayAfterUpdate);
  }
// delete reply
  function deleteComment(postid, commentid) {
    let newArrayAfterCommentDelted = ArrayOfObjects.map((post) => {
      if (post.id == postid) {
        let newArrayOfComments = post.comments.filter((comment) => {
          return comment.commentid != commentid;
        });
        return { ...post, comments: newArrayOfComments };
      }

      return post;
    });

    setArrayOfObjects(newArrayAfterCommentDelted);
  }
// update comment
  function updateComment(NewContent, postid, commentid,) {
    let newArrayAfterCommentUpdated = ArrayOfObjects.map((post) => {
      if (post.id == postid) {
        let newArrayofCommentsAfterUpdate = post.comments.map((comment) => {
          if (comment.commentid == commentid) {
            return { ...comment, commentContent: NewContent };
          }
          return comment;
        });

        post = { ...post, comments: newArrayofCommentsAfterUpdate };
      }

      return post;
    });

    setArrayOfObjects(newArrayAfterCommentUpdated);
  }
  return (
    <>
      <div id="PostsWrapper">
        {ArrayOfObjects.map((post) => {
          return (
            <Post
              UniqueID={post.id}
              key={post.id}
              likes={post.likes}
              usericon={post.usericon}
              username={post.username}
              time={post.time}
              content={post.content}
              replyicon={post.replyicon}
              comments={post.comments}
              commenticon={post.commenticon}
              addNewComment={addNewComment}
              delteItem={deleteItem}
              deleteComment={deleteComment}
              updateComment={updateComment}
            ></Post>
          );
        })}
      </div>

      <NewPost AddnewPostInsideArray={addNewPost}></NewPost>
    </>
  );
}

export default App;
