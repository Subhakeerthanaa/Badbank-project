import "./style.css";
import Navbars from "./nav.js";
import Home from "./home.js";
import Create from "./create.js";
import userContext from "./context.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import Deposit from "./deposit.js";
import Withdraw from "./withdraw.js";
import Alldata from "./Alldata.js";
import Badbank from "./Badbank.js";


export default function App() {
  return (
    <>
    
      <HashRouter>
          <userContext.Provider
          value={{
            users: [
              {
                name: "subha",
                email: "subha@gmail.com",
                password: "123",
                balance: 0
              }
            ]
          }}
        >
           <Navbars />
          <Routes>
          <Route path="/home" element={< Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<Alldata />} />
            <Route path="/Badbank" element={<Badbank />} />
          </Routes>
         </userContext.Provider>
         </HashRouter>
      </>
  );
}
