import React from 'react'
import "./product.css"
import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'


const Product = () => {
    let [ product , setProduct ] = useState([])
 let [inmormation , setInmormation] = useState(false)
 let [inmormation1 , setInmormation1] = useState(false)
 let [inmormation2 , setInmormation2] = useState(false)
 let [inmormation3 , setInmormation3] = useState(false)

 let infoBtn = ()=>{
  setInmormation(!inmormation )
 }
 let infoBtn1 = ()=>{
  setInmormation1(!inmormation1 )
 }
 let infoBtn2 = ()=>{
  setInmormation2(!inmormation2 )
 }
 let infoBtn3 = ()=>{
  setInmormation3(!inmormation3 )
 }

let getData = ()=>{
 axios.get("https://dummyjson.com/products").then((responce)=>{
  setProduct(responce.data.products);
 })
}
console.log(product);

useEffect(()=>{
  getData()
},[])
  return (
 <>
 <body className='body'>
    
    <Container>
      <Row>
      {product.map((item)=>(
       <Col lg="4">
       <Card className='cus-card'>
       <div className='products'>
          <p>{item.id}</p>
          <img src={item.thumbnail} alt="" />
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <h3>${item.price}</h3>
        </div>
       </Card>
       </Col>
      ))}
      
      </Row>
      <Row>
        <Col lg={{span : 8 , offset : 2}}>
        <Button onClick={infoBtn} className='cus-btn'>Click for "About us "</Button>
        {inmormation && <p  className='ptag element'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, architecto. Eius qui quasi est iure, similique inventore. Debitis aut iure adipisci libero quibusdam quis sed iusto. Non cumque repudiandae totam impedit voluptate aspernatur veritatis quos deleniti quidem? Amet ex, rem asperiores voluptates ipsam doloribus dolor nulla similique laborum laudantium beatae eveniet quo omnis totam animi at voluptas fuga. Id incidunt fuga, dicta nulla, cupiditate deleniti eum cum officia distinctio veniam mollitia blanditiis sunt, provident aut quas voluptatibus maxime dignissimos esse commodi quisquam! A, ut hic itaque quo eius est sequi, consequatur repudiandae, provident excepturi error numquam velit dolorem tenetur libero.</p> } 
        </Col>
      </Row>
      <Row>
        <Col lg={{span : 8 , offset : 2}}>
        <Button onClick={infoBtn1} className='cus-btn'>What makes you visit our website</Button>
        {inmormation1 && <p  className='ptag element'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, architecto. Eius qui quasi est iure, similique inventore. Debitis aut iure adipisci libero quibusdam quis sed iusto. Non cumque repudiandae totam impedit voluptate aspernatur veritatis quos deleniti quidem? Amet ex, rem asperiores voluptates ipsam doloribus dolor nulla similique laborum laudantium beatae eveniet quo omnis totam animi at voluptas fuga. Id incidunt fuga, dicta nulla, cupiditate deleniti eum cum officia distinctio veniam mollitia blanditiis sunt, provident aut quas voluptatibus maxime dignissimos esse commodi quisquam! A, ut hic itaque quo eius est sequi, consequatur repudiandae, provident excepturi error numquam velit dolorem tenetur libero.</p> } 
        </Col>
      </Row>
      <Row>
        <Col lg={{span : 8 , offset : 2}}>
        <Button onClick={infoBtn2} className='cus-btn'>Why did you choose our brand</Button>
        {inmormation2 && <p  className='ptag element'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, architecto. Eius qui quasi est iure, similique inventore. Debitis aut iure adipisci libero quibusdam quis sed iusto. Non cumque repudiandae totam impedit voluptate aspernatur veritatis quos deleniti quidem? Amet ex, rem asperiores voluptates ipsam doloribus dolor nulla similique laborum laudantium beatae eveniet quo omnis totam animi at voluptas fuga. Id incidunt fuga, dicta nulla, cupiditate deleniti eum cum officia distinctio veniam mollitia blanditiis sunt, provident aut quas voluptatibus maxime dignissimos esse commodi quisquam! A, ut hic itaque quo eius est sequi, consequatur repudiandae, provident excepturi error numquam velit dolorem tenetur libero.</p> } 
        </Col>
      </Row>
      <Row>
        <Col lg={{span : 8 , offset : 2}}>
        <Button onClick={infoBtn3} className='cus-btn'>How to order/ buy</Button>
        {inmormation3 && <p  className='ptag element'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, architecto. Eius qui quasi est iure, similique inventore. Debitis aut iure adipisci libero quibusdam quis sed iusto. Non cumque repudiandae totam impedit voluptate aspernatur veritatis quos deleniti quidem? Amet ex, rem asperiores voluptates ipsam doloribus dolor nulla similique laborum laudantium beatae eveniet quo omnis totam animi at voluptas fuga. Id incidunt fuga, dicta nulla, cupiditate deleniti eum cum officia distinctio veniam mollitia blanditiis sunt, provident aut quas voluptatibus maxime dignissimos esse commodi quisquam! A, ut hic itaque quo eius est sequi, consequatur repudiandae, provident excepturi error numquam velit dolorem tenetur libero.</p> } 
        </Col>
      </Row>
    </Container>
    </body>
 </>
  )
}

export default Product