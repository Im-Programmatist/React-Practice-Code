const initialState = {
    Message:"Reducer message"
}

const reducer = (state = initialState, action) =>{
    console.log("dispacher call");
    const newState = {...state};
    if(action.type === "Message_Change"){
        //newState.Message = action.payload;
        newState.Message = "action.payload";
    }
    return newState;
}

export default reducer;