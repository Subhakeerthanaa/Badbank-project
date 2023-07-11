import { useContext, useState, useEffect } from "react";
import userContext from "./context.js";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from "axios";

export default function Deposit() {
  const user = useContext(userContext);
  const [currbalance, setCurrbalance] = useState(0); // Initialize state with default value
  const [deposit, setDeposit] = useState("");
  const [pin, setPin] = useState("");
  const [acc_Name, setAcc_Name] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!deposit) {
      alert("Please enter an amount");
    } else if (isNaN(deposit)) {
      setDeposit("");
      alert("Please enter amount in number");
    } else if (Number(deposit) < 1) {
      setDeposit("");
      alert("Please enter a positive amount");
    } else if (!pin) { // Check if PIN is entered
      alert("Please enter your PIN");
    } else {
      updateProducts();
      setDeposit("");
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
      const balance_add = Number(currbalance) + Number(deposit);
      setCurrbalance(balance_add);
      alert(`$${deposit} amount deposited successfully`);
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
      {/* Add a title for the component */}
      <h2 id="balance-d"> Balance: {currbalance} </h2>
      <div className="background1">
        <div id="deposit">
          <form onSubmit={handleSubmit}>
            <center>
              <h2 id="deposit-h1">Deposit </h2>
            </center>
            <br></br>
            <center>
              <label>Enter the pin :</label>
              <input
                type="number"
                onChange={(e) => setPin(e.target.value)}
                value={pin}
                placeholder="Enter your PIN"/><br></br><br></br>
                <label>Enter the Amount</label>
                <input
                type="number"
                onChange={(e) => setDeposit(e.target.value)}
                value={deposit}
                placeholder="Enter your Amount"
              />
            </center>
            <br></br><br></br>
            <Button type="submit" value="submit" className="desposit-btn" onClick={handleSubmit}><b>submit</b></Button>
          </form>
        </div>
      </div>
    </>
  );
}
