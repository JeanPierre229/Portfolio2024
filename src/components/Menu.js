import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

export default function Menu() {
  const [activeLink, setActiveLink] = useState('home'); // Définit l'élément actif

  const getLinkStyle = (linkName) => {
    return activeLink === linkName ? { color: '#CFD307' } : { color: 'white' };
  };

  return (
    <div className='col-2 text-light menu-style'>
      <Link to="/" id="link" style={getLinkStyle('home')} onClick={() => setActiveLink('home')}>
        <p className='form-menu'>
          <span>
            <i className='material-icons size pe-2'>home</i>
          </span>
          <span className='pb-2'>ACCUEIL</span>
        </p>
      </Link>
      <Link to="/competences" id="link" style={getLinkStyle('competences')} onClick={() => setActiveLink('competences')}>
        <p className='form-menu'>
          <span>
            <i className='material-icons size pe-2'>work</i>
          </span>
          <span className='pb-2'>COMPETENCES</span>
        </p>
      </Link>
      <Link to="/projets" id="link" style={getLinkStyle('projets')} onClick={() => setActiveLink('projets')}>
        <p className='form-menu'>
          <span>
            <i className='material-icons size pe-2'>store</i>
          </span>
          <span className='pb-2'>PROJETS</span>
        </p>
      </Link>
      <Link to="/contact" id='link' style={getLinkStyle('contact')} onClick={() => setActiveLink('contact')}>
        <p className='form-menu'>
          <span>
            <i className='material-icons size pe-2'>account_box</i>
          </span>
          <span className='pb-2'>CONTACT</span>
        </p>
      </Link>
    </div>
  );
}
