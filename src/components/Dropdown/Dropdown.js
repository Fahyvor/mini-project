import React from 'react'
import './dropdown.css'

const Dropdown = (props) => {
  return (
    <div className='dropdown-container justify-content-center px-auto bg-white p-4'>
     <img src={props.image} className='food-items mx-auto'/>
     <h5 className='mt-5'>{props.name} is available</h5>
    </div>
  )
}

export default Dropdown