const Toodo_form =()=>{
   return (
   <div className="input_div">
        <form>
            <h1 className="heading">TODO LIST</h1>
            <p className="heading1">A Simple react todo list </p>
          <label className="name"><h1>New Todo</h1>
            <input className="name_input" type="text" />
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
            <input className="Time_text" type="text" />
          </label>
          <button className="btn">ADD TODO</button>
        </form>
   </div>     
  );
}
   
export default Toodo_form;
