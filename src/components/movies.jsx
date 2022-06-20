
//imrc cc shortcut

import { tab } from "@testing-library/user-event/dist/tab";
import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies:getMovies()
  
    };

    renderMovies(){
       
     
    }

    handleDelete = movie => {
        console.log(movie);
    };

    render () {
        return <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                <tr>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                </tr>
                ))}
            </tbody>
        </table>  
          
    
    }

}

export default Movies;


//{this.state.movies.length === 0 && 'please create new movies'}
  