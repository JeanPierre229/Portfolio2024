import React from 'react'
import '../styles/Menu.css'

export default function Menu() {
  return (
    <div className='col-2 text-light menu-style'>
      <p className='form-menu'>
        <span>
            <i className='material-icons size pe-2 text-yellow'>home</i>
        </span>
        <span className='pb-2 text-yellow'>
            ACCUEIL
        </span>
      </p>
      <p className='form-menu'>
        <span>
            <i className='material-icons size pe-2'>work</i>
        </span>
        <span className='pb-2'>
            COMPETENCES
        </span>
      </p>
      <p className='form-menu'>
        <span>
            <i className='material-icons size pe-2'>store</i>
        </span>
        <span className='pb-2'>
            PROJETS
        </span>
      </p>
      <p className='form-menu'>
        <span>
            <i className='material-icons size pe-2'>account_box</i>
        </span>
        <span className='pb-2'>
            CONTACT
        </span>
      </p>
    </div>
  )
}
