import React,{Component} from 'react';
import './App.css';

class AnimalDetail extends Component{
 
  render(){
    
    const animalDetail = this.props.animals.find(animal => {
      return animal.id === parseInt(this.props.match.params.id);      
    });
    console.log(animalDetail);
    const vac = animalDetail.Vaccinations[0]
    // const tests = animalDetail.Tests[0]
    // const adopt = animalDetail.Adoptions[0]

    return (
      <div>
        <main>
          <div className="animalName">{animalDetail.name}</div>
          <div className="sectionTitle">Vaccinations:</div>
          <ul className="sectionDetail"> 
            <li key={vac.Bordetella}>Bordetella - {vac.bordetella ? `True`:`False`}</li>
            <li key={vac.Rabies}>Rabies - {vac.rabies ? `True`:`False`}</li>
            <li key={vac.Distemper}>Distemper - {vac.distemper ? `True`:`False`}</li>
            <li key={vac.Hepatitis}>Hepatitis - {vac.hepatitis ? `True`:`False`}</li>
            <li key={vac.Parvovirus}>Parvovirus - {vac.parvovirus ? `True`:`False`}</li>
            <li key={vac.Parainfluenza}>Parainfluenza - {vac.parainfluenza ? `True`:`False`}</li>
            <li key={vac.Leptospirosis}>Leptospirosis - {vac.leptospirosis ? `True`:`False`}</li>
            <li key={vac.Coronavirus}>Coronavirus - {vac.coronavirus ? `True`:`False`}</li>
            <li key={vac.Lyme}>Lyme - {vac.lyme ? `True`:`False`}</li>
            <li key={vac.Felineluekemia}>Felineluekemia - {vac.felineluekemia ? `True`:`False`}</li>
            <li key={vac.Rhinotracheitis}>Rhinotracheitis - {vac.rhinotracheitis ? `True`:`False`}</li>
            <li key={vac.Calicivirus}>Calicivirus - {vac.calicivirus ? `True`:`False`}</li>
          </ul>
          <div className="sectionTitle">NOTES:</div>
          <div className="sectionDetail">{vac.notes}</div>
          
          </main>
      </div>
    );
    }
}

export default AnimalDetail;
