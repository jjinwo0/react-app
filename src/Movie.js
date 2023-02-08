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

export default Movie;