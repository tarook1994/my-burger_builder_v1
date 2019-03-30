const initialState = {
    ingrediants: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 1
    },
    totalPrice: 4
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                ingrediants: {
                    ...state.ingrediants,
                    [action.ingrediantName]: state.ingrediants[action.ingrediantName] + 1
                },
                totalPrice: state.totalPrice + action.value
            }

        case 'REMOVE':
            return {
                ...state,
                ingrediants: {
                    ...state.ingrediants,
                    [action.ingrediantName]: state.ingrediants[action.ingrediantName] -1 
                },
                totalPrice: state.totalPrice - action.value
            }
    }

    return state;

}

export default reducer;