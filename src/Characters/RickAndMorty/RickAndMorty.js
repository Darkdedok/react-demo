function RickAndMortyCharacter(props){
    let {id,name, status, species,gender,image} = props;
    return(
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt={''}/>
        </div>
    )
}
export default RickAndMortyCharacter;