import React,{Component} from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
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
 
  addVaccination = (e) => {
    e.preventDefault();
  //   let artistId = e.target.artistId.value;
  //   axios
  //     .post(`${backEndURL}/artists/newsong`, {
  //       title: e.target.title.value,
  //       artistId: e.target.artistId.value,
  //     })
  //     .then((response) => {
  //       // get the correct artist from this.state.artists
  //       let updatedArtist = this.state.artists.find((artist) => {
  //         return artist.id == artistId;
  //       });
  //       // push the new song to the Song array
  //       updatedArtist.Songs.push(response.data.song);
  //       console.log(updatedArtist);
  //       const newArtistArray = this.state.artists.map((artist) => {
  //         if (artist.id == updatedArtist.id) {
  //           return updatedArtist;
  //         } else {
  //           return artist;
  //         }
  //       });
  //       // setState for the updated artist
  //       this.setState({
  //         artists: newArtistArray,
  //       });
  //     });
  };

  // addArtist = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(`${backEndURL}/artists`, {
  //       name: e.target.name.value,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       let tempArray = this.state.artists;
  //       tempArray.push(response.data.artist);
  //       this.setState({
  //         artists: tempArray,
  //       });
  //     });
  // };

  
  render(){
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route path="/animals" component={() => <AllAnimals animals = {this.state.animals} />} />
            <Route path="/animals/:id" component={(routerProps) => <AnimalDetail {...routerProps} animals = {this.state.animals} addVaccination={this.addVaccination}/>} />

            {/* <Route exact path="/" component={() => <AllAnimals artists = {this.state.animals} addArtist={this.addArtist} />} />
            <Route path="/artists/:id" component={(routerProps) => <ArtistDetail {...routerProps} artists = {this.state.artists} addSong={this.addSong}/>} /> */}
            <Route path="/*" render={() => <Redirect to="/" />} />

          </Switch>
        </main>
        <Footer />
      </div>
    );
    }
}

export default App;
