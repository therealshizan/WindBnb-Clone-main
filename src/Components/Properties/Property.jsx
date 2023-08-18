import React from 'react'
import star from '../../Assets/img/star.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Property = (props) => {
  return (
    <div className='property'>
      <div className="property-row">
        <div className="property-img">
          {/* <img
            src={props.propertyImg}
            srcSet={`${props.propertyImg} 1x, ${props.propertyImg} 2x`}
            loading="lazy"
          /> */}
          <LazyLoadImage
            alt={props.propertyName}
            effect="blur"
            src={props.propertyImg} />
        </div>
      </div>
      <div className="property-row flex justify-between mt-1">
        {props.isSuperHost &&
          <div className="superhost flex aling-center">SUPER HOST</div>
        }
        <div className="property-type">{props.propertyType}</div>
        <div className="property-rating flex align-center">
          {/* <img style={{width: '0.9rem', fill: 'var(--primary-color)'}} src={star} /> */}
          <svg id='star-icon' xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="48"><path d="m196-28 75-324L19-570l332-28 129-306 129 306 332 28-252 218 76 324-285-173L196-28Z" /></svg>
          {props.propertyRating}
        </div>
      </div>
      <div className="property-row mt-1">
        <div className="property-name">{props.propertyName}</div>
      </div>
    </div>
  )
}

export default Property