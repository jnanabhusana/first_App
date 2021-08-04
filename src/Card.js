import React from 'react'
import './card.scss'
function Card(props) {
  return (
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt=""  className="card_img" />
          <div className="card_info">
            <span className="card_catagory" width="100px"> {props.title}</span>
            <p className="card_title" > {props.sname}</p>
            <a href="" target="_blank">
              <button className="button">click</button>
            </a>
          </div>
        </div>
      </div>
    
  )
}

export default Card

