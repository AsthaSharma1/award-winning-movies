import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmCard from "./FilmCard";
import Navbar from "./Navbar"

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      filmInfo: [],
      fetching: false,
      error: false

    }
  }

  componentDidMount() {
    this.setState(
        {fetching:true }
    )

    fetch("https://api.apispreadsheets.com/data/568/").then(res=>{
      if (res.status === 200){
        // SUCCESS
        res.json().then(data=>{
          const yourData = data.data
          this.setState(
              {filmInfo: yourData,
              fetching: false
              }
          )
        }).catch(err => this.setState({error:true, fetching:false }))
      }
      else{
        this.setState({error:true, fetching:false })
        // ERROR
      }
    }).catch(err => this.setState({error:true, fetching:false }))
  }

  render() {
    let body;
    if(this.state.filmInfo.length===0 && this.state.fetching===false && this.state.error===false){
            body = <h1> ... </h1>
    } else {
        if(this.state.fetching===true){
            body = <h1> ... </h1>
        }
        else{
            if(this.state.error===true){
                body = <h1> There was an error getting your request</h1>
            }
            else{
                body = this.state.filmInfo.map(x => <FilmCard title={x.title}
                                                                          awards_won={x.awards_won}
                                                                          rotten_tomato_score={x.rotten_tomato_score}
                                                                          imdb_score={x.imdb_score}
                                                                          revenue={x.revenue}
                                                                          genre={x.genre}
                                                                          picture={x.picture}
                                                                          film_url={x.film_url}
                                                                          year={x.year}/>
                                                                          )

            }
        }

    }

    return (
       <div>
           <Navbar />
           {body}
       </div>
    )
  }
}

export default App;
