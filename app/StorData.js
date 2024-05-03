

const ShowTodo=({todo,time,proti})=>{
    return(
        <div style={{height:"100px", width:"300px",display:"flex", gap:"20px", border:"3px solid"}}>
            <p>{todo}</p>
            <p>{time}</p>
            <p>{proti}</p>
        </div> 
    )
}

export default ShowTodo;