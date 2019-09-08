import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';
import Post from '../components/Post/Post';


class SpotsContainer extends Component {
  state={
    posts:[],
  }
    componentDidMount() {
      // console.log('bye')
      axios.get(`${API_URL}/posts` , { withCredentials: true })
       .then((res) => { 
         console.log("========================")
         console.log(res)
        //  const posts = res.data.data;
      // this.setState({posts});
      console.log(res.data.data);
      var posts = res.data.data;
      this.setState({posts});
      console.log("=========== this.state.posts =========")
      console.log(this.state.posts)
      //this.setState({isLoading: false});    
       })
       .catch(err => console.log(err))
    }
    
  render() {
    return (
      <>
      <div>
        Spots list
      </div>
      <div className="post-container">
        {/* { !isLoading ? this.state.posts.data.map(post => <Post key={post._id} id={post._id} city={post.city} content={post.content} title={post.title} />) : <h3>Loading...</h3> } */}
        {console.log("this.state.posts " + JSON.stringify(this.state.posts))} 
        {console.log("this.state.posts.class " + this.state.posts.class)} 
        <Post posts={this.state.posts}/> 
      </div>
      </>
    );
  };
};

export default SpotsContainer;


// const posts = res.data;
//       this.setState({posts});
//       console.log(res.data);
//       this.setState({isLoading: false});