import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';
import Post from '../components/Post/Post';


class SpotsContainer extends Component {
  state={
    posts:[],
    parksList: [],
    mode: "create"
  }
    componentDidMount() {
      // console.log('bye')
      axios.get(`${API_URL}/posts` , { withCredentials: true })
       .then((res) => { 
         console.log('response')
         console.log(res)
        //  const posts = res.data.data;
      // this.setState({posts});
      console.log(res.data.data);
      var posts = res.data.data;
      this.setState({posts});
      console.log('state-props')
      console.log(this.state.posts)
      //this.setState({isLoading: false});    
       })
       .catch(err => console.log(err));
    }
    handleEditPost = (post) => {
      this.setState({
        ...post, 
        mode: "edit"
      })
    }
    handleDeletePost = (id) => {
      axios.delete(`${API_URL}/posts/${id}`, {withCredentials: true })
      .then(()=> {
        this.setState({
          posts: this.state.posts.filter((post) => post._id !== id)
        })
      })

    }

    handleSubmit = (e) => {
      e.preventDefault()
      const username = localStorage.getItem("uid")
      const {parks, title, content, posts, mode,  _id } = this.state;
      const newSpot = {
        parks,
        title,
        content,
        username
      }

      if(mode === "create"){

      axios.post(`${API_URL}/posts`, newSpot, { withCredentials: true })
      .then((res)=> {
        posts.push(res.data)
        this.setState({
          posts,
         
        })

      })
      .catch((err)=> console.log(err))
    }else{
      axios.put(`${API_URL}/posts/${_id}`, newSpot, { withCredentials: true })
      .then((res) => {
        this.setState({
          posts: posts.map((post) => {
            if(post._id === _id){
              post = res.data.data
            }
            return post
          }),
          _id: "",
          title: "",
          content: "",
          park: ""
        })
      })
    }
    }

    handleMode = () => {
      const { mode } = this.state
      this.setState({
        mode: mode === "view"? "create": "view"
      })
    }

    handleChange = (e) => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  render() {
    const { mode, parksList, title, content, parks} = this.state
    return (
      <>
      <form>
      <input name="title" placeholder="enter title" value={title} onChange={this.handleChange}/>
      <input name="content" placeholder="enter content" value={content} onChange={this.handleChange}/>
      <button onClick={this.handleSubmit}> Submit</button>
        
      </form>
      <>
      <div>
        Spots list
      </div>
      <div className="post-container">
        {/* { !isLoading ? this.state.posts.data.map(post => <Post key={post._id} id={post._id} city={post.city} content={post.content} title={post.title} />) : <h3>Loading...</h3> } */}
        {console.log("this.state.posts " + JSON.stringify(this.state.posts))} 
        {console.log("this.state.posts.class " + this.state.posts.class)} 
        <Post posts={this.state.posts} handleEditPost={this.handleEditPost} handleDeletePost={this.handleDeletePost} /> 
      </div>
      </>
      </>
    );
  };
};

export default SpotsContainer;


// const posts = res.data;
//       this.setState({posts});
//       console.log(res.data);
//       this.setState({isLoading: false});