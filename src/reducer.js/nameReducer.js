const initState = {
    all:[
        {id: 1, name:"Bhuma", age:23},
        {favourite: null}
    ]
}

const nameReducer = (state=initState, action)=> {
    switch(action.type){
        case "ADD_NAME" :
            const newName = action.payload;
            return {...state, all:[...state.all, newName]};

        case "SELECT_FAVE_NAME" :
            const faveName = state.all.find(c=> c.id === action.payload);
            return {...state, favourite: faveName}

        case "UPDATE_A_NAME" :
            const nameToUpdate = state.all.indexOf(nameToUpdate);
            const updatedName = [...state.all.slice(0, index), action.payload, ...state.all.slice(index + 1)]
            return{...state, all:updatedCats}

        default:
            return state;


    }
}


export default nameReducer;