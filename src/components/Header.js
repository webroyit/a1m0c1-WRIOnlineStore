import React from 'react';
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import './Header.css';

function Header() {
    return(
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src="/images/logo.png" alt="Logo" />
            </Link>

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text" />
                <SearchRoundedIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Membership
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartRoundedIcon />
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;