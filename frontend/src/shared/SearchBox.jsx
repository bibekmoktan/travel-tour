import React, {useRef}from 'react';
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBox = () => {

  const locationRef = useRef('');
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () =>{
      const location = locationRef.current.value;
      const distance = distanceRef.current.value;
      const maxGroupSize = maxGroupSizeRef.current.value;

      if(location ==='' || distance === '' || maxGroupSize === ''){
        return alert("All field Required!");
      }
  }
  return <>
        <Col lg="12">
        <div className="search">
          <Form
            className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
              <span>
                <i className="ri-map-pin-line"></i>
              </span>
              <div>
                <h6>Location</h6>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  aria-label="Enter location"
                  ref={locationRef}
                />
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
              <span>
                <i className="ri-pin-distance-line"></i>
              </span>
              <div>
                <h6>Distance</h6>
                <input
                  type="number"
                  placeholder="Distance in km"
                  aria-label="Enter distance"
                  ref={distanceRef}
                />
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group">
              <span>
                <i className="ri-group-line"></i>
              </span>
              <div>
                <h6>Max people</h6>
                <input
                  type="number"
                  placeholder="0"
                  aria-label="Enter max people"
                  ref={maxGroupSizeRef}
                />
              </div>
            </FormGroup>
            <span className="search__icon"><i class="ri-search-line" onClick={searchHandler}></i></span>
          </Form>
        </div>
      </Col>
  </>
};

export default SearchBox;
