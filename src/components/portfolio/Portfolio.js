import React from 'react';
import './portfolio.css';
import { portfolioData } from '../../assets/data';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {portfolioData.map((item) => {
          return (
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                {/* eslint-disable-next-line */}
                <img src={item.image} alt='' />
              </div>
              <h3>{item.title}</h3>
              <div className='portfolio__item-cta'>
                <a href={item.github} className='btn'>
                  GitHub
                </a>
                <a href={item.demo} className='btn btn-primary'>
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
