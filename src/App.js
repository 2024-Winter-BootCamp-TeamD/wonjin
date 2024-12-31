import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  
  return (
    <div className='App'>
      


      <Navbar data-bs-theme="dark" className='d_navbar'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('-1')}}>Features</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
      <Route path="/" element = {
        <>
        <div className='main-bg' style={{backgroundImage: 'url(' + bg +')'}}></div>
        <br />
        <Container>
        <Row>
        <Card shoes={shoes[0]} i={1} />
        <Card shoes={shoes[1]} i={2} />
        <Card shoes={shoes[2]} i={3} />
        </Row>
      </Container>
      </>
      }/>
        <Route path="/detail/:id" element = {<Detail  shoes = {shoes}/>}/>




        <Route path="/about" element = {<About/>}>
         <Route path="member" element = {<div>멤버임</div>} />
         <Route path="location" element = {<Detail/>} />
        </Route>

        <Route path= "/event" element = {<Event />}>
          <Route path= "one" element = {<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path= "two" element =   {<div>생일 기념 쿠폰받기</div>}/>        
        </Route>
        
      </Routes>

    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + props.i + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

function Event(){
  return(
  <div>
    <h4>오늘의 이벤트</h4>
    <Outlet></Outlet>
  </div>
  )
}



export default App;
