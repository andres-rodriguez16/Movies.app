import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, clearDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        this.props.dispatchOfGetMovieDetail(this.props.match.params.id)
    }
    componentWillUnmount(){
        this.props.clearDetail()
    }

    render() {
        return (
            <div className="movie-detail">
                {console.log(this.props.movie)}
                <img src={this.props.movie.Poster} />
                <p>Titulo: {this.props.movie.Title}</p>
                <p>Year: {this.props.movie.Year}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail,
    };
}           

function mapDispatchToProps(dispatch) {
    return {
        dispatchOfGetMovieDetail: idMovie => dispatch(getMovieDetail(idMovie)),
        clearDetail: () => dispatch(clearDetail()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);