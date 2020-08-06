const initialState = {
    allVeg: ['hummus', 'celery', 'cucumber']
}

function Reducer (state = initialState, action){
    switch (action.type) {
        case "ADD_THINGS":
            const newVeg = action.payload;
            return {
              ...state, allVeg: [...state.allVeg, newVeg]
            }
        
        default:
            return state;

    }
}

export default Reducer;