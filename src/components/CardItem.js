import React from 'react';
import './Card.css';
function CardItem(props) {
  return (
    <> 
      <div className="card_item">
        <div className="card_title">
            {props.title}
        </div>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
        <div className="list">
          <li class='listCard'>{props.list}</li>
        </div>
      </div>
      
    </>
  );
}

export default CardItem;