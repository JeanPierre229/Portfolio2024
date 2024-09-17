import React from 'react'
import '../styles/Menu.css'
import profil from '../assets/pROFIL.png'

export default function Content() {
  return (
    <div className='col-10 content-style text-light'>
        <div className='container'>
            <div className='row'>
                <div className='col content-text-style'>
                    <h1>Salut, Je suis <span className='text-yellow'>Jean-Pierre</span></h1>
                    <p className='h3'>Un <span className='text-yellow'>Developpeur Web</span></p>
                    <p className='h3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam dolorem nemo pariatur? Possimus, recusandae.</p>
                    <span className='mt-3'>
                        <button className='bg-yellow p-2 border-none me-3'>Me Connaître</button>
                        <button className='bg-yellow p-2 border-none'>Contactez-moi</button>
                    </span>
                </div>
                <div className='col'>
                    <img src={profil} alt='Mon profil' />
                </div>
            </div>
        </div>
        
    </div>
  )
}
