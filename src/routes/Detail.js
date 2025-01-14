import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import { Tab } from "react-bootstrap";
import {Context1} from "./../App.js"
import { addItem } from "../store.js";
import { useDispatch } from "react-redux";

function Deatil(props){


  let {재고} = useContext(Context1)

  let [count, setCount] = useState(0)
  let [alert, setalert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let dispatch = useDispatch()

  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });


  useEffect(()=>{
    setTimeout(()=>{ setalert(false) }, 2000)
  })
    return(
        <div className="container">
          {count}
          {재고}
          <button onClick={()=>{setCount(count+1)}}>버튼</button>

  <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">  
      <h4 className="pt-5">{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}</p>
      <button className="btn btn-danger" onClick={()=>{
        dispatch(addItem({
          id : 1, name : 'Red Knit', count : 1
        }))
      }}>주문하기</button> 
    </div>
  </div>
  <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick = {()=>{탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick = {()=>{탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick = {()=>{탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<TabContent 탭 = {탭}/>

    </div> 
    )
}

function TabContent({탭}){

    let [fade, setFade] = useState('');

    useEffect(()=>{
      setTimeout(()=>{ setFade('end')}, 100)
      return ()=>{
      setFade('');
      }
    }, [탭])
    return <div className={"start " + fade} >
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  }

export default Deatil;