function Character(props){
    let {name, biography, picture} = props;
    return(
        <div>
            <h2>{name}</h2>
            <p>{biography}</p>
            <img src={picture} alt={''}/>
        </div>
    )
}
export default Character;