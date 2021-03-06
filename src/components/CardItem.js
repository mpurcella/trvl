import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

let CardItem = (props) => {
    return (
        <>
            <li className="card-item">
                <Link to={props.path} className='card-item-link'>
                    <div className='card-item-img-wrapper'>
                        <p className='card-item-img-overlay-text'>{props.location}</p>
                        <img src={props.src} alt={props.alt} className='card-item-img'/>
                        <div className="card-item-category">
                            <p className='card-item-category-text'>{props.label}</p>
                        </div>
                    </div>
                    <div className="card-item-caption">
                        <h5 className="card-item-caption-text">
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
