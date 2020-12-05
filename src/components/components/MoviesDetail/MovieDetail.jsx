export default function MovieDetails({movie}){
    return(
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.img} alt={movie.title}/>
            <p>{movie.description}</p>

            {movie.charcters.map(character => 
                 <CharacterDetail character = {character} /> 
                )}
        </div>
    )
}