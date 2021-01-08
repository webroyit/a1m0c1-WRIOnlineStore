export const initialState = {
    basket: [],
    user: null
}

// Selector
export const getBasketTotal = (basket) => 
    // Get the total price from the basket
    basket?.reduce((amount, item) => item.price + amount, 0);

// 'action' is for how to change the data
const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // Find only the first item that match
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            // Make a copy of the basket
            let newBasket = [...state.basket];

            // Remove an element from the array
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Cannot remove item (id: ${action.id})`);
            }

            return {
                ...state,
                basket: newBasket
            };
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;