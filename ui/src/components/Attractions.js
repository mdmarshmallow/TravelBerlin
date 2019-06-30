import React, {Component} from 'react';
import Attraction from './Attraction'
import Client from '../Client.js'
import StackGrid from "react-stack-grid";

class Attractions extends Component {
    constructor(props) {
      super(props);
      this.state = {title: [1]};
    }
  
    async componentDidMount() {
      Client.getSummary(summary => {
        // console.log
        this.setState({
          title: JSON.parse(summary.content).attractions
        });
      });
    }
    async componentDidUpdate() {
      Client.getSummary(summary => {
        // console.log
        this.setState({
          title: JSON.parse(summary.content).attractions
        });
      });
    }
  
    render() {
      return (
        <div className="Attractions">
        <StackGrid columnWidth={300} gutterWidth={50}>
          {this.state.title.filter(itm => true).map(item =>(
               <Attraction name={item.name} description={item.description} location={item.location} imageUrl={item.imageUrl}/>
          ))}
        </StackGrid>
        </div>
    );
    }
  }
  export default Attractions;
