import React,{Component} from 'react';
import './App.css';
import { Link } from "react-router-dom";

class AllAnimals extends Component {
  
  render(){
    const animals = this.props.animals.map(animals => {
      return 
            

              <div className="sectionDetail and1" key={`${animals.id}`}><Link to={`/animals/${animals.id}`}>{animals.name}</Link></div>
              <div className="sectionDetail and2" key={`${animals.id}`}><Link to={`/animals/${animals.id}`}>{animals.age}</Link></div>
              <div className="sectionDetail and3" key={`${animals.id}`}><Link to={`/animals/${animals.id}`}>{animals.status}</Link></div>

            
      
    })
    return (
      <div>        
        <main>
        <div className="AllAnimalsContainer">
          <div className="sectionTitle anT1" key={`null`}>Name</div>
          <div className="sectionTitle anT2" key={`null`}>Age</div>
          <div className="sectionTitle anT3" key={`null`}>Status</div>
          {animals}
        </div>
        <div className="sectionTitle">Add a New Animal</div>
        {/* <form onSubmit={this.props.addArtist}>
          <input type="text" name="name" />
          <input type="submit" value="Add Artist" />
        </form> */}
          
        </main>
      </div>
    );
    }
}

export default AllAnimals;
