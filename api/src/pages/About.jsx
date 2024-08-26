import React from 'react'
import "./about.css"
import { Col, Container, Row } from 'react-bootstrap'
import img from '../assets/api-logo.jpg'


const About = () => {
  return (
  <>
  <section id='about'>
  <Container>
    <Row>
      <Col lg={6}>
      <div className="about-l">
        <h2>Know</h2>
        <h4>about</h4>
        <img src={img} alt="" />
      </div>
      </Col>
      <Col lg={6}>
     <div className="about-r">
      <p>1. *"Hit delivers the best deals right to your doorstep, every time."* <br />
2. *"Shop smarter with Hit—where quality meets unbeatable prices."*<br />
3. *"Experience the future of shopping with Hit's seamless service and swift delivery."*<br />
4. *"At Hit, we turn every purchase into a perfect match for your needs."*<br />
5. *"Hit is your go-to destination for the latest trends and must-have products."*<br />
6. *"With Hit, you’re always just one click away from a great find."*<br />
7. *"Discover endless possibilities and exclusive offers at Hit."*<br />
8. *"Hit: Where convenience meets customer satisfaction."*<br />
9. *"Trust Hit to bring you the best in fashion, tech, and beyond."*<br />
10. *"Hit makes shopping effortless, affordable, and fun!"*</p>
     </div>
      </Col>
    </Row>
  </Container>
  </section>
  </>
  )
}

export default About