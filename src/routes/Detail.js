import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail(){
    const {id} = useParams();
    console.log({id});
    const getMovie = async() => {
        const json = await(
            await fetch (`https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5?sort_by=year`).json()
        )
    };

    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail</h1>;
}

export default Detail;