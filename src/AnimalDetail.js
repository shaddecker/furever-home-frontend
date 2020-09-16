import React,{Component} from 'react';
import './App.css';

class AnimalDetail extends Component{
 
  render(){
    
    const animalDetail = this.props.animals.find(animal => {
      return animal.id === parseInt(this.props.match.params.id);      
    });
    const vac = animalDetail.Vaccinations[0]
    const tests = animalDetail.Tests[0]
    const adopt = animalDetail.Adoptions[0]
    const imageURL = `../animals/${animalDetail.name}.jpg`
    

    return (
      <div>
        <main>          
          <div className="sectionContainer">
            <div className="sectionName">{animalDetail.name}</div>
            <div className="sectionImg"><img src={imageURL} alt="" height="200px"/></div>
            <div className="sectionAbout">
              <div className="sectionTitle"></div>
              <span className="sectionHeader">Type:</span> <span className="sectionDetail">{animalDetail.type}</span>
              <span className="sectionHeader">Color:</span> <span className="sectionDetail">{animalDetail.color}</span>
              <span className="sectionHeader">Coat Length:</span> <span className="sectionDetail">{animalDetail.coatlength}</span>
              <span className="sectionHeader">Breed:</span> <span className="sectionDetail">{animalDetail.breed}</span>
              <span className="sectionHeader">Age:</span> <span className="sectionDetail">{animalDetail.age}</span>
              <span className="sectionHeader">Sex:</span> <span className="sectionDetail">{animalDetail.sex}</span>
              <span className="sectionHeader">Status:</span> <span className="sectionDetail">{animalDetail.status}</span>
              <span className="sectionHeader">Altered Date:</span> <span className="sectionDetail">{animalDetail.altereddate}</span>
            </div>
            <div className="sectionNotes">
              <div className="sectionTitle">
                NOTES:<span className="sectionDetail">{vac.notes}</span>
              </div>
            </div>
            <div className="sectionVac">
              <div className="sectionTitle">Vaccinations:</div>            
              <ul className="sectionDetail"> 
                <li key={vac.Bordetella}>Bordetella - {vac.bordetella ? vac.bordetelladate:``}</li>
                <li  key={vac.Rabies}>Rabies - {vac.rabies ? vac.rabiesdate:``}</li>
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
            <div className="sectionAdopt">
              <div className="sectionTitle">Adoptions:</div>            
              <div className="sectionDetail"> 
                <span>{adopt.fullname}</span>
                <span></span>
                <span></span>
              </div>
            </div>             
          </div>
          
          
          </main>
      </div>
    );
    }
}

export default AnimalDetail;
