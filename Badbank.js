import 'bootstrap/dist/css/bootstrap.min.css';  
import {Carousel } from 'react-bootstrap';  
import img1 from './images/creates.jpg' ;
import img2 from './images/withdraw.png' ;
import img3 from './images/deposit.jpg' ;
 
function Badbank() {  
  
  return (  
    <>  
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
  <Carousel.Item>  
    <img  
      className="d-block w-100"  
      src={img3}  
      alt="Third slide"  
    />  
  
    
  </Carousel.Item>  
</Carousel>  
</div>  
    </>  
  );  
}  
export default Badbank;
