import React from "react";
import "./App.css";
import { useState } from "react";
//import Skydiving from "./Component/skydiving";
//import style from "./Component/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  
  const [data, setData] = useState({ Name: "", price: "", date: "", time: "" });
  const [date, setDate] = useState();
  const [allData, setAllData] = useState([]);
  const [totalcharges, setTotalcharge] = useState(0);

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

  var d = new Date(date);
  console.log(d.getDay());
  var dayName = days[d.getDay()];
  console.log(dayName);

  let { Name, price, time } = data;

  function showCharge(e) {

    setData({ ...data, [e.target.name]: e.target.value });
    setDate(e.target.value);
    setTotalcharge(price);

    if (time == null) {
      if (dayName == "Sunday" || dayName == "Monday") {
        setTotalcharge(parseInt(price * 1.15));
      } else {
        setTotalcharge(price);
      }
    } else if (time === "Day") {
      if (dayName == "Sunday" || dayName == "Monday") {
        setTotalcharge(parseInt(price * 1.15) + 50);
      } else {
        setTotalcharge(parseInt(price) + 50);
      }
    } else if (time === "Night") {
      if (dayName == "Sunday" || dayName == "Monday") {
        setTotalcharge(parseInt(price * 1.15) + 100);
      } else {
        setTotalcharge(parseInt(price) + 100);
      }
    }
  }


  return (
    
    <div className="App">
      <h1 className="mt-2 bg-primary">SKY DIVING</h1>
      <form className=" width-400px bg-secondary text-white vh-100">
      <div>
        <label className="fs-30px ms-5 me-4">Name:</label>
        <input className="ms-5" type="text" name="Name" placeholder="Name" value={Name} nChange={showCharge} />
      </div> <br />

      <div>
        <label className="me-4 ps-3">Date:</label> 
        <input type="date" placeholder="Date" className="px-2 ms-5" name="date" value={date} onChange={showCharge}/> <br/>  <br/>
          If sunday or monday additional charges 15% applicable 
          <h2> Selected Day: {dayName}</h2><br/>
      </div>

      <div>
        <label className="ms-5 me-4">Price:</label>
        <input type="number" placeholder="Price" className=" ms-5 " name="price" value={price} onChange={showCharge}/>
          <br></br>
      </div><br />

      <div>
        <label className="pe-3 ">Select Time:</label>
        <input type="radio" name="time" className="ms-5 " value="Day" onChange={showCharge} /> Day
        <input type="radio" name="time" className="ms-2" value="Night" onChange={showCharge} /> Night
      </div> <br />

      <div>
        <label className="ms-5 ps-2">Total Charges:</label>
        <input type="number" placeholder="Total Charges" className="ms-3" value={totalcharges} disabled />
          <br></br>
          <br></br>
      </div>
      
        <button className="me-3 px-3">Add</button>
        <button className="px-3">Submit </button>
    </form>
        
    </div>
  );
};
export default App;
