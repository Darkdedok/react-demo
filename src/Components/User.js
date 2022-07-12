function User({item, postsButton}) {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={()=>{postsButton(item.id)}}>User posts</button>
        </div>
    )
}

export {User};
