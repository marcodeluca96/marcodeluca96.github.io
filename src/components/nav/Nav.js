import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBookAlt, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      {/* eslint-disable-next-line */}
      <a
        href='#'
        onClick={() => {
          setActiveNav('#');
        }}
        className={activeNav === '#' ? 'active' : null}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => {
          setActiveNav('#about');
        }}
        className={activeNav === '#about' ? 'active' : null}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => {
          setActiveNav('#experience');
        }}
        className={activeNav === '#experience' ? 'active' : null}
      >
        <BiBookAlt />
      </a>
      <a
        href='#services'
        onClick={() => {
          setActiveNav('#services');
        }}
        className={activeNav === '#services' ? 'active' : null}
      >
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        onClick={() => {
          setActiveNav('#contact');
        }}
        className={activeNav === '#contact' ? 'active' : null}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
