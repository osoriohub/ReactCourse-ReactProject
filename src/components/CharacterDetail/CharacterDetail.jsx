export default function CharacterDetail({character}){
    return(
        <div>
            <h1>{character.name}</h1>
            <img src={character.img} alt={character.name}/>
            <p>{character.biography}</p>

        </div>
    )
}