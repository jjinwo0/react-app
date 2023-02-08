import  PropTypes from "prop-types";

function Movie({m}){
    return (
        <div key={m.id}>
            <img src={m.medium_cover_image} />
            <h2>{m.title}</h2>
            <p>{m.summary}</p>
            <ul>
                {m.genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.PropTypes = {
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired 
}

export default Movie;