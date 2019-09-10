import React from 'react';

 

//const Post = ({post:{title, content, _id}, deletePost}) => {
// const Post = (posts) => {


    const Post = ({ post, handleDeletePost, handleEditPost }) => {
        const commentList = post.comments.map(comment => {
            return (<div>{comment.text}</div>)
        })

      return (
          <>
        <div className="card post-card">
        <h5 className="card-header post-title">{ post.title }</h5>
        <h5 className="card-header post-content">{ post.content}</h5>
        <div className="card-body post-content">
        
        {commentList}
        

            {/* <img src={ image } alt="" /> */}
            {/* <p className="card-text">{ content }</p> */}
            <button type="submit" className="post-edit-button post-update-buttons" onClick={() => handleEditPost(post)}>Edit</button>
           <button type="submit" className="post-delete-button post-update-buttons" onClick={()=>{handleDeletePost(post._id)}}>Delete</button>
        </div>

    </div>
    </>
          )
    }
    const PostList = ({ posts, handleEditPost, handleDeletePost }) => {
       
        const postList = posts.map(post => {
            
            return <Post post={post} key={post._id} handleDeletePost={handleDeletePost} handleEditPost={handleEditPost}/>
            
            })

    return (
        <>
        {console.log("----------------------")}
        {console.log(JSON.stringify(posts))}
        
        <div className="Posts">
            {postList}
          </div>        
        </>
    )
}
// }

export default PostList;