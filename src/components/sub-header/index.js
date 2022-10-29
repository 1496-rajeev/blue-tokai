import React from 'react'
import './style.css'

export default function SubHeader({ title }) {
  return (
    <div className='sub-header-container'>
      <p className='title'>{title}</p>
    </div>
  )
}
