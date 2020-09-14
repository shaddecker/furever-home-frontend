import React,{Component} from 'react';
import './App.css';
import { Link } from "react-router-dom";

class AllAnimals extends Component {
  
  render(){
    const animals = this.props.animals.map(animals => {
      return <div class="sectionDetail" key={`${animals.id}`}><Link to={`/animals/${animals.id}`}>{animals.name}</Link></div>;
    })
    return (
      <div>        
        <main>
        <h3>Add a New Animal</h3>
        {/* <form onSubmit={this.props.addArtist}>
          <input type="text" name="name" />
          <input type="submit" value="Add Artist" />
        </form> */}
          <div>={animals}=</div>
        </main>
      </div>
    );
    }
}

export default AllAnimals;
