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
            <h1 className='cards-heading'>Five incredible destinations to visit</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-list">
                        <CardItem 
                            path='/services'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            src={img9}
                        />
                        <CardItem 
                            path='/services'
                            text='Travel through the Islands of Bali on a private cruise'
                            label='Luxury'
                            src={img2}
                        />
                    </ul>
                    <ul className="cards-list">
                        <CardItem 
                            path='/services'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adventure'
                            src={img8}
                        />
                        <CardItem 
                            path='/services'
                            text='Climb to the highest peaks of Mount Kinabalu'
                            label='Adventure'
                            src={img1}
                        />
                        <CardItem 
                            path='/services'
                            text='Set sail on the Atlantic Ocean & visit uncharted waters'
                            label='Mystery'
                            src={img3}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;