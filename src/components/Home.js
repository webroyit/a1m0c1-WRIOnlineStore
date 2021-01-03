import React from 'react';

import './Home.css';
import Product from './Product';

function Home() {
    return(
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="/images/hero.jpe" alt="Hero" />
                
                <div className="home__row">
                    <Product />
                </div>

                <div className="home__row">
                    
                </div>

                <div className="home__row">
                    
                </div>
            </div>
        </div>
    )
}

export default Home;