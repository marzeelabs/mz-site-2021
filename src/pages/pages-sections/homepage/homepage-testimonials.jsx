import React, {useState, useEffect} from 'react';
import { urlFor } from '../../../lib/client';
import { useSanity } from '../../../context/sanity-context';

const HomepageTestimonials = () => {

  const sectionData = useSanity('testimonialSection')
  const data = useSanity('testimonial');
  const [testimonials, setTestimonials] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonial = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

 return (
    <>
    <section className="homepage-testimonials">

      <div className="homepage-testimonials__content">

        <div className="homepage-testimonials__message">

          <img
            className="homepage-testimonials__img"
            src={urlFor(sectionData.image)}
            alt="whale"
            width="300"
            height="600"
          />

          <h1 className="homepage-testimonials__title title-display">
            <span>{sectionData.titleTop}</span>
            {sectionData.titleMiddle}
            <span>{sectionData.titleBottom}</span>
          </h1>

        </div>

        <div className="homepage-testimonials__list__wrapper">

          <div className="homepage-testimonials__list">

            {testimonials.length && (
              <div className="homepage-testimonial">

                <img  
                 className="homepage-testimonial__img"
                 src={urlFor(testimonial.logo)}
                 alt="testimonial logo" 
                 width="144" 
                 height="72"
                />

                <h2 className="homepage-testimonial__title">
                  {testimonial.description}
                </h2>

                <h3 className="homepage-testimonial__subtitle">
                  {testimonial.author}
                </h3>

              </div>
            )}
           
            <div className="homepage-testimonials__navigation">
            
              <button
                onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)} 
                className="homepage-testimonials-button previous"
                type="button"
                aria-label="previous"
              />

              <button
                onClick={() => handleClick(currentIndex === testimonials.length - 1  ? 0 : currentIndex + 1)} 
                className="homepage-testimonials-button next"
                type="button"
                aria-label="next"
              />
            </div>
          </div>

          <a href="#" className="homepage-testimonials__link">
            Check All Our Reviews
          </a>
        </div>
      </div>


    </section>

    </>
  );

 }

export default HomepageTestimonials;
