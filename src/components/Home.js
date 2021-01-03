import React from 'react';

import './Home.css';
import Product from './Product';

function Home() {
    return(
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="/images/hero.jpe" alt="Hero" />
                
                <div className="home__row">
                    <Product
                        id="1231231293"
                        title="Basket of Flowers (12 Different kinds of flowers)"
                        price={19.99}
                        image="/images/product3.jpe"
                        rating={5} />
                    <Product
                        id="3520932423"
                        title="Chair (5 foots long and well made in platic)"
                        price={15.99}
                        image="/images/product5.jpe"
                        rating={4} />
                </div>

                <div className="home__row">
                    <Product
                        id="9549550234"
                        title="Water Bottle (14 Inches long and made of glass)"
                        price={10.99}
                        image="/images/product1.jpe"
                        rating={2} />
                    <Product
                        id="7532949324"
                        title="Clock (9 Inches long and made of plastic)"
                        price={9.99}
                        image="/images/product4.jpe"
                        rating={3} />
                    <Product
                        id="5248924623"
                        title="Pencil Case (24 Different colors of pencils)"
                        price={6.99}
                        image="/images/product2.jpe"
                        rating={4} />
                </div>

                <div className="home__row">
                    <Product
                        id="2230249022"
                        title="Sofa (12 Foot wide and 5 Foot heigth made with cotton)"
                        price={59.99}
                        image="/images/product6.jpe"
                        rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home;