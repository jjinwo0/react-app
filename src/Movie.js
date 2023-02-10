import  PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({m}){
    return (
        <div key={m.id}>
            <img src={m.medium_cover_image} />
            <h2>
                <Link to={`/movie/${m.id}`}>{m.title}</Link>
            </h2>
            <p>{m.summary}</p>
            <ul>
                {m.genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired 
}

export default Movie;