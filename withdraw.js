import React, { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import userContext from "./context.js";

export default function Withdraw() {
  const user = useContext(userContext);
  const [currbalance, setCurrbalance] = useState(0); // Initialize state with default value
  const [withdraw, setWithdraw] = useState("");
  const [pin, setPin] = useState("");
  const [acc_Name, setAcc_Name] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!withdraw) {
      alert("Please enter an amount");
    } else if (isNaN(withdraw)) {
      setWithdraw("");
      alert("Please enter amount in number");
    } else if (Number(withdraw) < 1) {
      setWithdraw("");
      alert("Please enter a positive amount");
    } else if (!pin) { // Check if PIN is entered
      alert("Please enter your PIN");
    } else {
      updateProducts();
      setWithdraw("");
      setPin("");
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `http://localhost:1337/api/banks/${pin}`;
        const res = await axios(url);
        const result = res.data;
        setCurrbalance(result.data.attributes.balance);
        setAcc_Name(result.data.attributes.Name);
      } catch (error) {
        console.error(error);
      }
    }
    if (pin) {
      fetchData();
    }
  }, [pin]);

  async function updateProducts() {
    
      const url = `http://localhost:1337/api/banks/${pin}`;
      const balance_add = Number(currbalance)-Number(withdraw);
      setCurrbalance(balance_add);
      alert(`$${withdraw} amount deposited successfully`);
      const update = {
        data: {
          "balance": balance_add
        }
      };
      const put_bal = await axios.put(url, update);
      console.log(put_bal);
    
  };

  return (
    <>
      <h2 id="balance-d"> Balance :{currbalance} </h2>

      <div className="background-2">
        <form className="withdraw">
          <h1 id="withdraw-h1">Withdraw</h1>
          
          <label className="label52">Enter your PinNumber: </label>&nbsp;&nbsp;
          <input type="number" onChange={(e) => setPin(e.target.value)} value={pin} /><br /><br />
          <label className="label4">Enter your Amount:</label>&nbsp;&nbsp;
          <input type="number" id="number" value={withdraw} onChange={(e) => setWithdraw(e.target.value)} /><br /><br /><br />
          <Button className="withdraw-btn" disabled={!withdraw} onClick={handleSubmit}><b>Submit</b></Button>
        </form>
       
      </div>
    </>
  );
}
