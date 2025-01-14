import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createContext, useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';
import DonutChart from './DonutChat.js';
import Cart from './routes/Cart.js'


export let Context1 = createContext();


function App() {

  let obj = {name : 'kim'}
  localStorage.setItem('data', JSON.stringify(obj))
  let 꺼낸거 = localStorage.getItem('data')
  console.log(꺼낸거)

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);

  let navigate = useNavigate();

  return (
    <div className='App'>

      <Navbar data-bs-theme="dark" className='d_navbar'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/chart') }}>Donut Chart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
              <br />
              <Container>
                <Row>
                  {shoes.map((a,i)=>{
                    return <Card shoes = {shoes[i]} i = {i} key = {i}></Card>
                  })}
                </Row>
                <button onClick={()=>{
                  
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((결과)=>{
                    console.log(결과.data);
                    let copy = [...shoes, ...결과.data];
                    setShoes(copy);
                  })

                  axios.post('/sadfas', {name: 'kim'})


                }}> 더보기 </button>
              </Container>
            </>
          }
        />
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ 재고 }}>
          <Detail shoes={shoes} />
          </Context1.Provider>
          } />

        {/* About */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<Detail />} />
        </Route>

        {/* Event */}
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일 기념 쿠폰받기</div>} />
        </Route>

        {/* [추가] /chart 경로에서 DonutChart 표시 */}
        <Route path="/chart" element={<DonutChart />} />

        <Route path="/cart" element = { <Cart />}/>


      </Routes>

      

    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + props.i + '.jpg'} width="80%" alt="shoes" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
