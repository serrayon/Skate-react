import React from 'react';

 

//const Post = ({post:{title, content, _id}, deletePost}) => {
// const Post = (posts) => {



    const Post = ({ posts }) => {
        console.log(posts)
        const postList = posts.map(post => {
          return (
            <div className="card post-card">
            { <h5 className="card-header post-title">{ post.title }</h5> }
            <div className="card-body post-content">
                {/* <img src={ image } alt="" /> */}
                {/* <p className="card-text">{ content }</p> */}
                <button type="submit" className="post-edit-button post-update-buttons">Edit</button>
                {/* <button type="submit" className="post-delete-button post-update-buttons" onClick={()=>{deletePost(_id)}}>Delete</button> */}
            </div>

        </div>
              )
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

export default Post;