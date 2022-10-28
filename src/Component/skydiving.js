import React, { useState } from "react";
//import { Button, Form, Col, Row, FormControl } from "react-bootstrap";
import "./style.css";

function Skydiving() {
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
  <div>
    <form className="form">
      <div>
        Name:
        <input className="input" type="text" name="Name" placeholder="Name" value={Name} nChange={showCharge} />
      </div> <br />

      <div>
        <label className="label">Date:</label>
        <input type="date" placeholder="Date" className="input2" name="date" value={date} onChange={showCharge}/>
          If sunday or monday additional charges 15% applicable
          <h2>Selected Day: {dayName}</h2>
      </div>

      <div>
        Price:
        <input type="number" placeholder="Price" className="input3" name="price" value={price} onChange={showCharge}/>
          <br></br>
      </div><br />

      <div>
        <label className="label1">Select Time:</label>
        <input type="radio" name="time" className="input4" value="Day" onChange={showCharge} /> Day
        <input type="radio" name="time" className="" value="Night" onChange={showCharge} /> Night
      </div> <br />

      <div>
        Total Charges:
        <input type="number" placeholder="Total Charges" className="input5" value={totalcharges} disabled />
          <br></br>
          <br></br>
      </div>
      
        <button>Add</button>
        <button>Submit </button>
    </form>
  </div>
  
  );
}

export default Skydiving;
