import React,{Component} from 'react';
import './App.css';
import "react-spreadsheet-grid/src/grid/styles.css";
import { Link } from "react-router-dom";
import { Grid } from "react-spreadsheet-grid";

class AllAnimals extends Component {
  
  render(){
    const animals = this.props.animals.map(animal => ({
      id: animal.id,
      name: animal.name, 
      sex: animal.sex,
      age: animal.age,
      breed: animal.breed, 
      status: animal.status,
    }));

    return (
      <div>
      <div className="sectionTitle">Here is a list of the animals currently at the shelter:</div>
      <Grid
        columns={[
          {
            title: 'Name',
            style: "sectionTitle",            
            value: (animal, {focus}) => {
              return (
                <Link to={`/animals/${animal.id}`}><span className="sectionDetail">{animal.name}</span></Link>
              );            
            }
          },
          {
            title: 'Sex',
            style: "sectionTitle",
            value: (animal) => <span className="sectionDetail">{animal.sex}</span>,
            
          },
          {
            title: 'Age',
            style: "sectionTitle",
            value: (animal) => <span className="sectionDetail">{animal.age}</span>,
            
          },
          {
            title: 'Breed',
            style: "sectionTitle",
            value: (animal) => <span className="sectionDetail">{animal.breed}</span>,
            
          },
          {
            title: 'Status',
            style: "sectionTitle",
            value: (animal) => <span className="sectionDetail">{animal.status}</span>,
            
          } 
          
        ]}
        rows={animals}
        getRowKey={animal => animal.id}
    />
    <div className="sectionTitle">Add a new animal:</div>
    <div className="sectionDetail">
      <form onSubmit={this.props.addAnimal}>        
        <select name="type">
          <option>Please select type...</option>
          <option>Canine</option>
          <option>Feline</option>
        </select><br/>
        <input type="text" name="name" placeholder="name" /><br/>
        <input type="text" name="color" placeholder="color"/><br/>
        <input type="text" name="coatlength" placeholder="coatlength"/><br/>
        <input type="text" name="breed" placeholder="breed"/><br/>
        <input type="text" name="age" placeholder="age"/><br/>
        <input type="text" name="sex" placeholder="sex"/><br/>
        <select name="status">
          <option>Please select status...</option>
          <option>Adoptable</option>
          <option>Adopted</option>          
          <option>Probationary Adoption</option>
        </select><br/>
        <select name="altered">
          <option>Spayed/Nuetered ? ...</option>
          <option>True</option>
          <option>False</option>          
        </select><br/>
        <input type="text" name="altereddate" placeholder="enter date of spay/nueter"/><br/>        
        <textarea name="notes" placeholder="notes..."></textarea><br/>
        <input type="submit" value="Add Animal" /><br/>
      </form>
    </div>
    </div>
    )    
    }
}

export default AllAnimals;
