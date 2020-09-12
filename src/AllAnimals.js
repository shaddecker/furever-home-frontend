import React,{Component} from 'react';
import './App.css';
import { Link } from "react-router-dom";

class AllAnimals extends Component {

  
  render(){
    const animals = this.props.animals.map(animals => {
      return <div><Link to={`/animals/${animals.id}`}>{animals.name}</Link></div>;
    })
    return (
      <div className="App">
        <main>
        <h3>Add a New Animal</h3>
        {/* <form onSubmit={this.props.addArtist}>
          <input type="text" name="name" />
          <input type="submit" value="Add Artist" />
        </form> */}
          {animals}
        </main>
      </div>
    );
    }
}

export default AllAnimals;
