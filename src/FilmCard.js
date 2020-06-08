import React, { Component } from 'react';
import './FilmCard.css';
import RT from "./RT.jpg"
import imdb from "./imdb.svg"

class FilmCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cards">
               <div className="title">
                   <h1 id="titleTitle"> {this.props.title} </h1>
                   <h1 id="titleYear"> {this.props.year} </h1>
               </div>
                <div>
                    <a href={this.props.film_url} target="_blank" className="posters"> <img src={this.props.picture}/></a>
                    <div className="stats">
                            <h2> Movie Stats</h2>
                            <p> <img className="rtLogo" src={RT} /> <b>{this.props.rotten_tomato_score}</b>
                                <img className="imdbLogo" src={imdb} alt="hello"/> <b> {this.props.imdb_score}</b>
                            </p>
                        <p> Revenue: <b> {this.props.revenue} </b></p>
                        <p> Award Won: <b> {this.props.awards_won}</b></p>
                        <p> Genre: <b> {this.props.genre} </b></p>
                    </div>
                    <br/><br/>
                </div>
            </div>
        );
    }
}

export default FilmCard;
