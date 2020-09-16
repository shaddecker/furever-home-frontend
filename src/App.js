import React,{Component} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import AnimalDetail from "./AnimalDetail.js";
import AllAnimals from "./AllAnimals.js";
import axios from "axios";
const backEndURL = process.env.BACKEND_URL || 'http://localhost:3000/api';

class App extends Component {
  constructor (){
    super()
    this.state = {
      animals : [],
    }    
  }

  componentDidMount () {
    axios.get(`${backEndURL}/animals`).then ((response) => {
      this.setState({animals: response.data.animals});
    });    
  }

 
  addAnimal = (e) => {
    e.preventDefault();
    axios
      .post(`${backEndURL}/animals/newanimal`, {
        type: e.target.type.value,
        name: e.target.name.value,
        color: e.target.color.value,
        coatlength: e.target.coatlength.value,
        breed: e.target.breed.value,
        age: e.target.age.value,
        sex: e.target.sex.value,
        status: e.target.status.value,
        altered: e.target.altered.value,
        altereddate: e.target.altereddate.value,
        notes: e.target.notes.value,
      })
      .then((response) => {
        let newAnimalArray = this.state.animals;
        newAnimalArray.push(response.data.animal);
        this.setState({animals: newAnimalArray});
      });
  };
 
  updateAnimal = (e) => {
    e.preventDefault();
    axios
      .post(`${backEndURL}/animals/newanimal`, {
        type: e.target.type.value,
        name: e.target.name.value,
        color: e.target.color.value,
        coatlength: e.target.coatlength.value,
        breed: e.target.breed.value,
        age: e.target.age.value,
        sex: e.target.sex.value,
        status: e.target.status.value,
        altered: e.target.altered.value,
        altereddate: e.target.altereddate.value,
        notes: e.target.notes.value,
      })
      .then((response) => {
        let newAnimalArray = this.state.animals;
        newAnimalArray.push(response.data.animal);
        this.setState({animals: newAnimalArray});
      });
  };

  render(){
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/animals" component={() => <AllAnimals animals = {this.state.animals} addAnimal={this.addAnimal} />} />
            <Route path="/animals/:id" component={(routerProps) => <AnimalDetail {...routerProps} animals = {this.state.animals} updateAnimal={this.updateAnimal} />} />

            {/* <Route exact path="/" component={() => <AllAnimals artists = {this.state.animals} addArtist={this.addArtist} />} />
            <Route path="/artists/:id" component={(routerProps) => <ArtistDetail {...routerProps} artists = {this.state.artists} addSong={this.addSong}/>} /> */}
            {/* <Route path="/*" render={() => <Redirect to="/" />} /> */}

          </Switch>
        </main>
        <Footer />
      </div>
    );
    }
}

export default App;
