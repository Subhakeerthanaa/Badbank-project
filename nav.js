import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbars() {
  return (
    <>
   <div id='nav-bg'>
   <ul>
   <li><a href="#/home">Home</a></li>
   <li><a href="#/create">Create</a></li>
   <li><a href="#/Deposit">Deposit</a></li>
   <li><a href="#/Withdraw">Withdraw</a></li>
   <li><a href="#/Alldata">Alldata</a></li>
   
</ul>
</div>
    </>
  );
}

