import React,{Component} from 'react';
import './App.css';
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
    </div>
    )    
    }
}

export default AllAnimals;
