import React,{Component} from 'react';
import './App.css';

class AnimalDetail extends Component{
 
  render(){
    
    const animalDetail = this.props.animals.find(animal => {
      return animal.id === parseInt(this.props.match.params.id);      
    });
    // console.log(animalDetail)
    const vac = animalDetail.Vaccinations[0]
    const tests = animalDetail.Tests[0]
    const adopt = animalDetail.Adoptions[0]

    return (
      <div>
        <main>
          <div className="animalName">{animalDetail.name}</div>
          <div className="sectionContainer">
            <div className="sectionVac">
              <div className="sectionTitle">Vaccinations:</div>            
              <ul className="sectionDetail"> 
                <li key={vac.Bordetella}>Bordetella - {vac.bordetella ? vac.bordetelladate:``}</li>
                <li key={vac.Rabies}>Rabies - {vac.rabies ? vac.rabiesdate:``}</li>
                <li key={vac.Distemper}>Distemper - {vac.distemper ? vac.rabiedate:``}</li>
                <li key={vac.Hepatitis}>Hepatitis - {vac.hepatitis ? vac.hepatitisdate:``}</li>
                <li key={vac.Parvovirus}>Parvovirus - {vac.parvovirus ? vac.parvovirusdate:``}</li>
                <li key={vac.Parainfluenza}>Parainfluenza - {vac.parainfluenza ? vac.parainfluenzadate:``}</li>
                <li key={vac.Leptospirosis}>Leptospirosis - {vac.leptospirosis ? vac.leptospirosisdate:``}</li>
                <li key={vac.Coronavirus}>Coronavirus - {vac.coronavirus ? vac.coronavirusdate:``}</li>
                <li key={vac.Lyme}>Lyme - {vac.lyme ? vac.lymedate:``}</li>
                <li key={vac.Felineluekemia}>Felineluekemia - {vac.felineluekemia ? vac.felineluekemiadate:``}</li>
                <li key={vac.Rhinotracheitis}>Rhinotracheitis - {vac.rhinotracheitis ? vac.rhinotracheitisdate:``}</li>
                <li key={vac.Calicivirus}>Calicivirus - {vac.calicivirus ? vac.calicivirusdate:``}</li>
              </ul>
            </div>
            <div className="sectionTest">
              <div className="sectionTitle">Tests:</div>            
              <ul className="sectionDetail"> 
                <li key={tests.canineheartworm}>Canine Heartworm - {tests.canineheartworm ? `True`:`False`}</li>
                <li key={tests.felineflv}>Feline Luekemia - {tests.felineflv ? `True`:`False`}</li>
                <li key={tests.felineid}>Feline Immunodeficiency - {tests.felineid ? `True`:`False`}</li>
              </ul>
            </div>          
          </div>
          
          <div className="container">
            <div className="sectionTitle">NOTES:</div>
            <div className="sectionDetail">{vac.notes}</div>
          </div>
          </main>
      </div>
    );
    }
}

export default AnimalDetail;
