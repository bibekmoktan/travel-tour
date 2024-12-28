import React from 'react'
import {Col} from "reactstrap";
import './ServiceCard'
import ServiceCard from './ServiceCard';
import weatheImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const serviceData = [
    {
        imgUrl:weatheImg,
        title:"Calculate Weather",
        desc:"This is"   
    },
    {
        imgUrl:guideImg,
        title:"Calculate Weather",
        desc:"This is"   
    },
    {
        imgUrl:customizationImg,
        title:"Calculate Weather",
        desc:"This is"   
    },
]

const ServicesList = () => {
  return <>
   {
    serviceData.map((item, index) => 
    <Col lg='3' key={index}>
        <ServiceCard item={item} />
    </Col>
   )}
  </>
}

export default ServicesList
