import React, { Component } from 'react';
import axios from 'axios';
// import { API_URL } from '../../constants';
import Parks from '../components/Parks/Parks'

class ParksContainer extends Component {
  state={
    data:[],
  }
    componentDidMount() {
      console.log('hello')
      // const url = ('http://localhost:4000/api/v1/parks');
      axios.get('http://localhost:4000/api/v1/parks')
      .then((res) => {       
        const data = res.data.data
        this.setState({data: data})
      })
      .catch(err => console.log(err))
    }
  render() {
      return (
          <>
           <Parks parks={this.state.data} />
          </>
    );
  };
};

export default ParksContainer;