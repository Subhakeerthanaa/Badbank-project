import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import bank from './images/bank1.png'; 
import dep from './images/deposit.jpg';
import {Carousel } from 'react-bootstrap';  
import img1 from './images/creates.jpg' ;
import img2 from './images/withdraw.png' ;
//import img3 from './images/bank4.jpg' ;
import logo1 from './images/header.jpg'

function Home() {  
  
  return ( 
    <>
   
    <div className='sample'>
    {/* <h2 id='color'>WELCOME TO SBI BANK</h2> */}
    <img id="logo-1" src={logo1}/>
    <div id="home">
    <div className='p-5'>  
    <Carousel>  
  <Carousel.Item>  
  <img style={{maxHeight:"100vh"}}  
      className="d-block w-100"  
      src={img1}  
      alt="First slide"  
    />  
     
  </Carousel.Item>  
  <Carousel.Item>  
    <img  
      className="d-block w-100"  
      src={img2}  
      alt="Second slide"  
    />  
  
     
  </Carousel.Item>  
  
</Carousel>  
</div>  
    <div className="App">  
   <Container className='p-4'>  
  <Col md="4">  
  <Card>  
  <Card.Img variant="top" src={bank} />  
  <Card.Body>  
    <Card.Title>Badbank</Card.Title>  
    <Card.Text>  
    A bad bank is a corporate structure which isolates illiquid and high risk assets (typically non-performing loans) held by a
     bank or a financial organisation, or perhaps a group of banks or financial organisations. A bank may accumulate a large
      portfolio of debts or other financial instruments which unexpectedly become at risk of partial or full default.</Card.Text>  
    
  </Card.Body>  
</Card>  
    </Col>  
</Container>  
    </div>  

<div className="App1">  
<Container className='p-4'>  
<Col md="4">  
<Card>  

<Card.Img variant="top" src={dep}  /> 
 
<Card.Body>  
 <Card.Title>Bank Deposit</Card.Title>  
 <Card.Text>  
 Bank deposits are a savings product that customers can use to hold an amount of money at a bank for a specified length of time. In return, 
 the financial institution will pay the customer  </Card.Text>  
 {/* <Button variant="primary" >Read More</Button>   */}
</Card.Body>  
</Card>  
 </Col>  
</Container>  
 </div> 
 </div>
 </div>
 </>  
  );  
}  
export default Home;  
