import React from 'react';
import '../styles/ContentCompetences.css';
import html_css from '../assets/html_css.png';
import php from '../assets/php.png';
import javascript from '../assets/javascript.png';
import github from '../assets/github.png';
import figma from '../assets/figma.png';
import react from '../assets/react.png';

export default function Content() {
  return (
    <div className='col-10 content-style-competences text-light'>
      <div className='container c-c'>
        <h3 className="text-yellow ms-5 ps-3">MES COMPETENCES</h3>
        <div className='row my-3'>
          <div className="col text-end position-relative competence-block">
            <img src={php} className='competence-img' alt="PHP & MYSQL" />
            <article className='competence-label'>
              <span className='bg-yellow-c p-2 text-violet'>PHP & MySQL</span>
            </article>
          </div>
          <div className="col mx-2 text-end position-relative competence-block">
            <img src={html_css} className='competence-img' alt="HTML & CSS" />
            <article className='competence-label'>
              <span className='bg-yellow-c p-2 text-violet'>HTML & CSS</span>
            </article>
          </div>
          <div className="col text-end position-relative competence-block">
            <img src={javascript} className='competence-img' alt="JavaScript" />
            <article className='competence-label'>
              <span className='bg-yellow-c p-2 text-violet'>JavaScript</span>
            </article>
          </div>
        </div>
        <div className='row'>
          <div className="col text-end position-relative competence-block">
            <img src={github} className='competence-img' alt="GitHub" />
            <article className='competence-label'>
              <span className='bg-yellow-c p-2 text-violet'>GitHub</span>
            </article>
          </div>
          <div className="col mx-2 text-end position-relative competence-block">
            <img src={figma} className='competence-img' alt="Figma" />
            <article className='competence-label'>
              <span className='bg-yellow-c p-2 text-violet'>Figma</span>
            </article>
          </div>
          <div className="col text-end position-relative competence-block">
            <img src={react} className='competence-img' alt="ReactJS" />
            <article className='competence-label'>
              <span className='bg-yellow-c p-2 text-violet'>ReactJS</span>
            </article>
          </div>
        </div>
      </div>
      <p className='text-center mt-4 mb-0 p-0 fixed'>Tout droits réservés</p>
    </div>
  );
}
