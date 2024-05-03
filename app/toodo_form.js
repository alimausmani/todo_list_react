"use client"

import { useState } from "react";
import ShowTodo from "./StorData";

const Toodo_form =()=>{
  const [todo, setTodo] = useState('');
  const [prioriti, setPrioriti] = useState('');
  const [hours,setHours] = useState('');
  const [todos,setTodos] = useState([]);
  const [secondPage ,setSecondPage] =useState(true);

  const input =(e)=>{
    setTodo(e.target.value)

  }

  const Prioritize=(e)=>{
    setPrioriti(e.target.value)

  }

  const Hour=(e)=>{
    setHours(e.target.value)
  }

  const AddTodos=(e)=>{
    e.preventDefault();
    setTodos([...todos,{todo,prioriti,hours}]);
  }

  const showButton=()=>{
    if(secondPage===true){
      setSecondPage(false)
    }else{
      setSecondPage(true)
    }
  }


   return (
   <div className="input_div">

      {secondPage?<form>
            <h1 className="heading">TODO LIST</h1>
            <p className="heading1">A Simple todo list </p>
          <label className="name"><h1>Your Todo</h1>
            <input onChange={input} className="name_input" placeholder="Write Your Task...."type="text" />
          </label>
          <div>
          <h1  className="selecter">Prioritize Your To-Dos</h1>
           <select onChange={Prioritize} className="select">
                <option value="Select">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
           </select>
          </div>
          <label className="Time"><h1>Time Limit</h1>
            <input onChange={Hour} className="Time_text" placeholder="Write Your Time...." type="text" />
          </label>
          <button onClick={AddTodos} className="btn">ADD TODO</button>
        </form>:<>
        {todos.map((e,i)=>(
            <ShowTodo todo={e.todo} time={e.hours} proti={e.prioriti}/>
        ))}
        </>

        }
       <button className="btn" style={{height:'50px',width:'300px'}} onClick={showButton}>{secondPage? "ShowTodo":"Again Todo" }</button>  

              
   </div>     
  )
}
   
export default Toodo_form;
