import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { experienceData } from '../../assets/data';
import CV from '../../assets/cv.pdf';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        {experienceData &&
          experienceData.map((div) => {
            return (
              <div key={div.id}>
                <h3>{div.title}</h3>
                <div className='experience__content'>
                  {div.skills.map((skill) => {
                    return (
                      <article key={skill.id} className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <h4>{skill.title}</h4>
                        <small className='text-light'>{skill.level}</small>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <a href={CV} download className='text-light experience__cv '>
        Scarica il mio Curriculum per l'esperienza completa
      </a>
    </section>
  );
};

export default Experience;

{
  /* <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>javaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div> */
}
