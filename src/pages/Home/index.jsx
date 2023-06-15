import { useEffect, useState } from "react";
import api from "../../service/api";
import { Background, ContainerDescription, ContainerPoster, Overlay } from "./styles";


const Home = () => {

    const [movies, setMovies] = useState();

    useEffect(() => {
        async function getMovies() {

            const { data: { results } } = await api.get("movie/popular");
     console.log(results[5]);
            setMovies(results[5]);
        }
        getMovies();
    }, []);

    return (
        <>
        { movies &&  (
        <Background img={ `https://image.tmdb.org/t/p/original${movies.backdrop_path}`}>
            <Overlay />
            <ContainerDescription>
            <h1>{movies.title}</h1>
            <p>{movies.overview}</p>
            </ContainerDescription>
            <ContainerPoster>
                <img src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} alt={movies.title} />
            </ContainerPoster>
        </Background>
        
        )}
        </>
    );
}

export default Home;