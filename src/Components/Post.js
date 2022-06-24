export default function Post({item}){
    return (<div>
        {item.id} {item.title}
        <button onClick={()=>{
            console.log('click', item.id);
        }}>
           details
        </button>
    </div>);
}