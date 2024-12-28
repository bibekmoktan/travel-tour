import React from 'react'
import '../styles/home.css'
import { Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import arika from '../assets/images/arika.png'
import Subtitle from './../shared/Subtitles'
import SearchBox from '../shared/SearchBox'
import ServicesList from '../services/ServicesList'
import TopSelling from '../components/FeaturedTours/TopSelling'


const Home = () => {
  return <>

  {/*=========== hero section start ========= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="" />
            </div>
            <h1>Travelng  opens the door to creating <span className="highlight">memories</span></h1>
            <p className='descriptio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel accusamus sunt debitis laboriosam quisquam rerum doloremque atque, explicabo fugiat quos impedit,
               cum deserunt deleniti reiciendis, perferendis aperiam ducimus et cumque.
            </p>
          </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={arika} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} width="100%" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBox />
        </Row>
      </Container>
    </section>
     {/*=========== hero section end ========= */}
     <section>
      <Container>
        <Row>
          <Col lg='3'>
              <h5 className="services__subtitle">What we Offer</h5>
              <h2 className="services__title">We offer our best services</h2>
          </Col>
          <ServicesList />
        </Row>
      </Container>
     </section>
     {/* ================featured section start ========== */}
      <section>
        <div className='top__selling_destination'>
            <Container>
              <Row>
                <Col lg='12'>
                  <h2 className="top_destination">Top Selling Destination </h2>
                 </Col>
                 <TopSelling />
              </Row>
            </Container>

        </div>
      </section>
     {/* ================featured section end ========== */}
  </>
}
export default Home
