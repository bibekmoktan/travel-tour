import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import {Col} from 'reactstrap'

const TopSelling = () => {
  return (
    <>
        {   
            tourData?.map(tour => (
                <Col lg='3' className="mb-4" key={tour}>
                    <TourCard tour={tour} />
                </Col>
            ))
        }
    </>
  ); 
}

export default TopSelling
