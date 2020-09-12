import React,{Component} from 'react';
import './App.css';

class AnimalDetail extends Component{
 
  render(){
    
    const animalDetail = this.props.animals.find(animal => {
      return animal.id === parseInt(this.props.match.params.id);      
    });
    console.log(animalDetail);
    console.log(animalDetail.Vaccinations)
    // const vaccinations = animalDetail.Vaccinations.map(vac => {
    //   return <li key={vaccinations.id}>Bordetella - {vaccinations.bordetella}</li>;
    // });

    
    return (
      <div className="App">
        <main>
          <h1>Animal Details</h1>
          <h3>{animalDetail.name}</h3>
          <h5>Add a New Vaccination</h5>
          {/* <form onSubmit={this.props.addVaccination}>
          <input type="hidden" name="artistId" value={animalDetail.id} />
          <input type="text" name="title" />
          <input type="submit" value="Add Song" />
        </form> */}
          <ul>{animalDetail.Vaccinations}</ul>
        </main>
      </div>
    );
    }
}

export default AnimalDetail;
