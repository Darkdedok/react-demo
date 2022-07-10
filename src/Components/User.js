function User({item, userButton}) {
    return (
        <div>
            <h2>{item.id}</h2>
            <h1>{item.name}</h1>
            <button onClick={()=>{userButton(item)}}>User Details</button>
        </div>
    )
}

export {User};