function User({item, postsButton}) {
    return (
        <div>
            <h2>{item.id}</h2>
            <h1>{item.name}</h1>
            <button onClick={()=>{postsButton(item)}}>User posts</button>
        </div>
    )
}

export {User};