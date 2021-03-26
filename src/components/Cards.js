import React from 'react';
import CardItem from './CardItem';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img8 from '../images/img-8.jpg';
import img9 from '../images/img-9.jpg';
import './Cards.css';

let Cards= () => {
    return (
        <div className="cards">
            <h1 className='cards-heading'>Five incredible destinations</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-list">
                        <CardItem 
                            path='/services'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            location='Brazil'
                            src={img9}
                        />
                        <CardItem 
                            path='/services'
                            text='Travel through the Islands of Bali on a private cruise'
                            label='Luxury'
                            location='Indonesia'
                            src={img2}
                        />
                    </ul>
                    <ul className="cards-list">
                        <CardItem 
                            path='/services'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adventure'
                            location='Africa'
                            src={img8}
                        />
                        <CardItem 
                            path='/services'
                            text='Set sail on the Atlantic Ocean & visit uncharted waters'
                            label='Mystery'
                            location='Atlantic Ocean'
                            src={img3}
                        />
                        <CardItem 
                            path='/services'
                            text='Climb the highest peaks of the mystical Mount Kinabalu'
                            label='Adventure'
                            location='Malaysia'
                            src={img1}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;