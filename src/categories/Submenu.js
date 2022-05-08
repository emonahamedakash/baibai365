import React from 'react'
import './Submenu.css'

const Submenu = (props) => {
    let submenuTitle = props.submenuTitle;
    let submenuListLink = props.submenuListLink;
    let submenuListTitle = props.submenuListTitle;

  return (
    <div className='submenu'>
        <div className='submenuTitle'>
            <h3>{submenuTitle}</h3>
        </div>
        <div className='submenuList'>
            <ul>
                <li className='list'>
                    <a className='link' href={submenuListLink}>{submenuListTitle}</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Submenu