import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';
import { servicesData } from '../../assets/data';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        {servicesData &&
          servicesData.map((data) => {
            return (
              <article key={data.title} className='service'>
                <div className='service__head'>
                  <h3>{data.title}</h3>
                </div>
                <ul className='service__list'>
                  {data.tag.map((text) => {
                    return (
                      <li key={text}>
                        <BiCheck className='service__list-icon' />
                        <p>{text}</p>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        {/* <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Services;
