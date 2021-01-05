export const initialState = {
    basket: []
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
        default:
            return state;
    }
}

export default reducer;