import React from 'react';
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import './Header.css';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    // Logout the user
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

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
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello { user ? user.email : 'Guest' }
                        </span>
                        <span className="header__optionLineTwo">
                            { user ? 'Sign Out' : 'Sign In' }
                        </span>
                    </div>
                </Link>

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
                        <span className="header__optionLineTwo header__basketCount">
                            {/* '?' to prevent error if the value is undefined */}
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;