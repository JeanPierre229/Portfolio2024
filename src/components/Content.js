import React from 'react'
import '../styles/Menu.css'
import '../styles/Icon-l.css'
import profil from '../assets/jp-removebg-preview.png'

export default function Content() {
  return (
    <div className='col-10 content-style text-light'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 content-text-style'>
                    <h1>Salut, Je suis <span className='text-yellow'>Jean-Pierre</span></h1>
                    <p className='h3'>Un <span className='text-yellow'>Developpeur Web</span></p>
                    <p className='h3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam dolorem nemo pariatur? Possimus, recusandae.</p>
                    <span className='mt-3'>
                        <button className='bg-yellow p-2 border-none me-3'>Me Connaître</button>
                        <button className='bg-yellow p-2 border-none'>Contactez-moi</button>
                    </span>
                </div>
                <div className='col-6' >
                    <div className='icon-l-inverse float-end'></div>
                    <div className='text-center'>
                        <img src={profil} alt='Mon profil' className='text-center mt-2 w-edit' />
                    </div>
                    <div className='icon-l' style={{marginRight: 200}}></div>
                </div>
                <p className='text-center p-0 mt-4 mb-0 fixed'>Tout droits réservés</p>
            </div>
        </div>
        
    </div>
  )
}
