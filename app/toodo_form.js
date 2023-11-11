"use client"
import {useState} from "react";
const Toodo_form =()=>{
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
   return (
   <div className="input_div">
        <form>
            <h1 className="heading">TODO LIST</h1>
            <p className="heading1">A Simple todo list </p>
          <label className="name"><h1>New Todo</h1>
            <input className="name_input" placeholder="Your Task"type="text" 
            value={name}
            onChange={e => setName(e.target.value)}
            />
          </label>
          <div>
          <h1 className="selecter">Priority Task</h1>
           <select className="select">
                 <option value="Select">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
           </select>
          </div>
          <label className="Time"><h1>Time Limit</h1>
            <input className="Time_text" placeholder="Your Time" type="text" />
          </label>
          <button className="btn"
          onClick={() => {
          artists.push({
          id: nextId++,
          name: name,
        });
        }}>ADD TODO
          </button>
          <ul>
            {artists.map(artist => (
            <li key={artist.id}>{artist.name}</li>
            ))}
          </ul>
        </form>
   </div>     
  )
}
   
export default Toodo_form
