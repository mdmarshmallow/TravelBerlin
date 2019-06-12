import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {title: ''};
    }
  
    // async componentDidMount() {
    //   Client.getSummary(summary => {
    //     this.setState({
    //       title: summary.content
    //     });
    //   });
    // }
  
    render() {
      return (
        <div className="Home">
          <h1>Home page</h1>
          <form action="/login" method="post">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br/><br/>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <br/><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
    }
  }
  export default Home;