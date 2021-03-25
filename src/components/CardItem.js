import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

let CardItem = (props) => {
    return (
        <>
            <li className="card-item">
                <Link to={props.path} className='card-item-link'>
                    <figure className='card-item-img-wrapper'>
                        <img src={props.src} alt="Waterfall" className='card-item-img'/>
                        <div className="card-item-category">
                            <p className='card-item-category-text'>{props.label}</p>
                        </div>
                    </figure>
                    <div className="card-item-info">
                        <h5 className="card-item-text">
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
