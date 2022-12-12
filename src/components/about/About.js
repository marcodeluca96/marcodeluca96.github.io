import React from 'react';
import './about.css';
import ME from '../../assets/images/me-about.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { aboutData } from '../../assets/data';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            {/* eslint-disable-next-line */}
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              <FaAward className='about__icon' />
              <h5>{aboutData.firstTitle}</h5>
              <small>{aboutData.firstDesc}</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about__icon' />
              <h5>{aboutData.secondTitle}</h5>
              <small>{aboutData.secondDesc}</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about__icon' />
              <h5>{aboutData.thirdTitle}</h5>
              <small>{aboutData.thirdDesc}</small>
            </article>
          </div>
          <p>{aboutData.descrizione}</p>
          <a href='#contact' className='btn btn-primary'>
            Contattami
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
